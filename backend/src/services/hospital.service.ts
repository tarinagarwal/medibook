import prisma from "../lib/prisma";
import { AuthService } from "./auth.service";
import { EmailService } from "./email.service";
import {
  HospitalRegistrationStep1,
  HospitalRegistrationStep2,
  HospitalRegistrationStep3,
  HospitalListQuery,
} from "../types/hospital.types";

export class HospitalService {
  /**
   * Register hospital - Step 1: Initial Registration
   */
  static async registerStep1(data: HospitalRegistrationStep1) {
    // Check if email already exists
    const existingEmail = await prisma.hospital.findUnique({
      where: { contactEmail: data.contactEmail },
    });

    if (existingEmail) {
      throw new Error("Email already registered");
    }

    // Check if registration number already exists
    const existingRegNumber = await prisma.hospital.findUnique({
      where: { registrationNumber: data.registrationNumber },
    });

    if (existingRegNumber) {
      throw new Error("Registration number already exists");
    }

    // Hash password
    const hashedPassword = await AuthService.hashPassword(data.password);

    // Create hospital
    const hospital = await prisma.hospital.create({
      data: {
        accountType: data.accountType,
        facilityName: data.facilityName,
        registrationNumber: data.registrationNumber,
        contactEmail: data.contactEmail,
        contactPhone: data.contactPhone,
        address: data.address,
        password: hashedPassword,
        registrationStep: 1,
        specializations: [],
        certificationUrls: [],
        facilityPhotoUrls: [],
      },
    });

    return {
      id: hospital.id,
      facilityName: hospital.facilityName,
      contactEmail: hospital.contactEmail,
      registrationStep: hospital.registrationStep,
    };
  }

  /**
   * Register hospital - Step 2: Facility Details
   */
  static async registerStep2(
    hospitalId: string,
    data: HospitalRegistrationStep2
  ) {
    const hospital = await prisma.hospital.findUnique({
      where: { id: hospitalId },
    });

    if (!hospital) {
      throw new Error("Hospital not found");
    }

    if (hospital.registrationStep !== 1) {
      throw new Error("Invalid registration step");
    }

    const updated = await prisma.hospital.update({
      where: { id: hospitalId },
      data: {
        description: data.description,
        specializations: data.specializations,
        operatingHours: data.operatingHours,
        latitude: data.latitude,
        longitude: data.longitude,
        registrationStep: 2,
      },
    });

    return {
      id: updated.id,
      registrationStep: updated.registrationStep,
    };
  }

  /**
   * Register hospital - Step 3: Document Upload
   */
  static async registerStep3(
    hospitalId: string,
    data: HospitalRegistrationStep3
  ) {
    const hospital = await prisma.hospital.findUnique({
      where: { id: hospitalId },
    });

    if (!hospital) {
      throw new Error("Hospital not found");
    }

    if (hospital.registrationStep !== 2) {
      throw new Error("Invalid registration step");
    }

    const updated = await prisma.hospital.update({
      where: { id: hospitalId },
      data: {
        licenseDocumentUrl: data.licenseDocumentUrl,
        certificationUrls: data.certificationUrls,
        facilityPhotoUrls: data.facilityPhotoUrls,
        registrationStep: 3,
        isComplete: true,
        verificationStatus: "PENDING",
      },
    });

    // Send confirmation email
    await EmailService.sendRegistrationConfirmation(
      updated.contactEmail,
      updated.facilityName
    );

    return {
      id: updated.id,
      registrationStep: updated.registrationStep,
      isComplete: updated.isComplete,
      verificationStatus: updated.verificationStatus,
    };
  }

  /**
   * Hospital login
   */
  static async login(email: string, password: string) {
    const hospital = await prisma.hospital.findUnique({
      where: { contactEmail: email },
    });

    if (!hospital) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await AuthService.comparePassword(
      password,
      hospital.password
    );

    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    // Generate tokens
    const tokens = AuthService.generateTokens({
      id: hospital.id,
      email: hospital.contactEmail,
      role: "hospital",
    });

    return {
      user: {
        id: hospital.id,
        email: hospital.contactEmail,
        facilityName: hospital.facilityName,
        verificationStatus: hospital.verificationStatus,
        isActive: hospital.isActive,
        registrationStep: hospital.registrationStep,
      },
      ...tokens,
    };
  }

  /**
   * Get hospital profile
   */
  static async getProfile(hospitalId: string) {
    const hospital = await prisma.hospital.findUnique({
      where: { id: hospitalId },
      select: {
        id: true,
        accountType: true,
        facilityName: true,
        registrationNumber: true,
        contactEmail: true,
        contactPhone: true,
        address: true,
        description: true,
        specializations: true,
        operatingHours: true,
        latitude: true,
        longitude: true,
        licenseDocumentUrl: true,
        certificationUrls: true,
        facilityPhotoUrls: true,
        verificationStatus: true,
        verifiedAt: true,
        rejectionReason: true,
        registrationStep: true,
        isComplete: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!hospital) {
      throw new Error("Hospital not found");
    }

    return hospital;
  }

  /**
   * Get all hospitals (Admin)
   */
  static async getAllHospitals(query: HospitalListQuery) {
    const { status, accountType, search, page = 1, limit = 10 } = query;

    const where: any = {};

    if (status) {
      where.verificationStatus = status;
    }

    if (accountType) {
      where.accountType = accountType;
    }

    if (search) {
      where.OR = [
        { facilityName: { contains: search, mode: "insensitive" } },
        { contactEmail: { contains: search, mode: "insensitive" } },
        { registrationNumber: { contains: search, mode: "insensitive" } },
      ];
    }

    const skip = (page - 1) * limit;

    const [hospitals, total] = await Promise.all([
      prisma.hospital.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          accountType: true,
          facilityName: true,
          registrationNumber: true,
          contactEmail: true,
          contactPhone: true,
          address: true,
          verificationStatus: true,
          verifiedAt: true,
          isActive: true,
          createdAt: true,
        },
      }),
      prisma.hospital.count({ where }),
    ]);

    return {
      hospitals,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Get hospital by ID (Admin)
   */
  static async getHospitalById(hospitalId: string) {
    const hospital = await prisma.hospital.findUnique({
      where: { id: hospitalId },
    });

    if (!hospital) {
      throw new Error("Hospital not found");
    }

    return hospital;
  }

  /**
   * Approve hospital (Admin)
   */
  static async approveHospital(hospitalId: string, adminId: string) {
    const hospital = await prisma.hospital.findUnique({
      where: { id: hospitalId },
    });

    if (!hospital) {
      throw new Error("Hospital not found");
    }

    const updated = await prisma.hospital.update({
      where: { id: hospitalId },
      data: {
        verificationStatus: "APPROVED",
        verifiedAt: new Date(),
        verifiedBy: adminId,
        isActive: true,
        rejectionReason: null,
      },
    });

    // Send approval email
    await EmailService.sendApprovalEmail(
      updated.contactEmail,
      updated.facilityName
    );

    return updated;
  }

  /**
   * Reject hospital (Admin)
   */
  static async rejectHospital(
    hospitalId: string,
    adminId: string,
    reason: string
  ) {
    const hospital = await prisma.hospital.findUnique({
      where: { id: hospitalId },
    });

    if (!hospital) {
      throw new Error("Hospital not found");
    }

    const updated = await prisma.hospital.update({
      where: { id: hospitalId },
      data: {
        verificationStatus: "REJECTED",
        verifiedBy: adminId,
        rejectionReason: reason,
        isActive: false,
      },
    });

    // Send rejection email
    await EmailService.sendRejectionEmail(
      updated.contactEmail,
      updated.facilityName,
      reason
    );

    return updated;
  }

  /**
   * Get dashboard statistics (Admin)
   */
  static async getDashboardStats() {
    const [
      totalHospitals,
      pendingHospitals,
      approvedHospitals,
      rejectedHospitals,
    ] = await Promise.all([
      prisma.hospital.count(),
      prisma.hospital.count({ where: { verificationStatus: "PENDING" } }),
      prisma.hospital.count({ where: { verificationStatus: "APPROVED" } }),
      prisma.hospital.count({ where: { verificationStatus: "REJECTED" } }),
    ]);

    return {
      totalHospitals,
      pendingHospitals,
      approvedHospitals,
      rejectedHospitals,
    };
  }
}
