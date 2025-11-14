import { Response } from "express";
import { AuthRequest } from "../types/api.types";
import { HospitalService } from "../services/hospital.service";

export class HospitalController {
  /**
   * Register - Step 1: Initial Registration
   */
  static async registerStep1(req: AuthRequest, res: Response) {
    try {
      const {
        accountType,
        facilityName,
        registrationNumber,
        contactEmail,
        contactPhone,
        address,
        password,
      } = req.body;

      // Validation
      if (
        !accountType ||
        !facilityName ||
        !registrationNumber ||
        !contactEmail ||
        !contactPhone ||
        !address ||
        !password
      ) {
        return res.status(400).json({
          success: false,
          message: "All fields are required",
        });
      }

      const result = await HospitalService.registerStep1({
        accountType,
        facilityName,
        registrationNumber,
        contactEmail,
        contactPhone,
        address,
        password,
      });

      return res.status(201).json({
        success: true,
        message: "Step 1 completed successfully",
        data: result,
      });
    } catch (error: any) {
      console.error("Register step 1 error:", error);
      return res.status(400).json({
        success: false,
        message: error.message || "Registration failed",
      });
    }
  }

  /**
   * Register - Step 2: Facility Details
   */
  static async registerStep2(req: AuthRequest, res: Response) {
    try {
      const { hospitalId } = req.params;
      const {
        description,
        specializations,
        operatingHours,
        latitude,
        longitude,
      } = req.body;

      // Validation
      if (!description || !specializations || !operatingHours) {
        return res.status(400).json({
          success: false,
          message:
            "Description, specializations, and operating hours are required",
        });
      }

      const result = await HospitalService.registerStep2(hospitalId, {
        description,
        specializations,
        operatingHours,
        latitude,
        longitude,
      });

      return res.json({
        success: true,
        message: "Step 2 completed successfully",
        data: result,
      });
    } catch (error: any) {
      console.error("Register step 2 error:", error);
      return res.status(400).json({
        success: false,
        message: error.message || "Failed to update facility details",
      });
    }
  }

  /**
   * Register - Step 3: Document Upload
   */
  static async registerStep3(req: AuthRequest, res: Response) {
    try {
      const { hospitalId } = req.params;
      const { licenseDocumentUrl, certificationUrls, facilityPhotoUrls } =
        req.body;

      // Validation
      if (!licenseDocumentUrl) {
        return res.status(400).json({
          success: false,
          message: "License document is required",
        });
      }

      const result = await HospitalService.registerStep3(hospitalId, {
        licenseDocumentUrl,
        certificationUrls: certificationUrls || [],
        facilityPhotoUrls: facilityPhotoUrls || [],
      });

      return res.json({
        success: true,
        message: "Registration completed successfully. Awaiting verification.",
        data: result,
      });
    } catch (error: any) {
      console.error("Register step 3 error:", error);
      return res.status(400).json({
        success: false,
        message: error.message || "Failed to complete registration",
      });
    }
  }

  /**
   * Hospital login
   */
  static async login(req: AuthRequest, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Email and password are required",
        });
      }

      const result = await HospitalService.login(email, password);

      return res.json({
        success: true,
        message: "Login successful",
        data: result,
      });
    } catch (error: any) {
      console.error("Hospital login error:", error);
      return res.status(401).json({
        success: false,
        message: error.message || "Login failed",
      });
    }
  }

  /**
   * Get hospital profile
   */
  static async getProfile(req: AuthRequest, res: Response) {
    try {
      const hospitalId = req.user!.id;

      const profile = await HospitalService.getProfile(hospitalId);

      return res.json({
        success: true,
        message: "Profile retrieved successfully",
        data: profile,
      });
    } catch (error: any) {
      console.error("Get profile error:", error);
      return res.status(404).json({
        success: false,
        message: error.message || "Profile not found",
      });
    }
  }

  /**
   * Update hospital profile
   */
  static async updateProfile(req: AuthRequest, res: Response) {
    try {
      const hospitalId = req.user!.id;
      const updateData = req.body;

      // Remove sensitive fields that shouldn't be updated directly
      delete updateData.password;
      delete updateData.verificationStatus;
      delete updateData.verifiedAt;
      delete updateData.verifiedBy;
      delete updateData.isActive;

      const updated = await prisma.hospital.update({
        where: { id: hospitalId },
        data: updateData,
      });

      return res.json({
        success: true,
        message: "Profile updated successfully",
        data: updated,
      });
    } catch (error: any) {
      console.error("Update profile error:", error);
      return res.status(400).json({
        success: false,
        message: error.message || "Failed to update profile",
      });
    }
  }

  /**
   * Get verification status
   */
  static async getVerificationStatus(req: AuthRequest, res: Response) {
    try {
      const hospitalId = req.user!.id;

      const hospital = await HospitalService.getProfile(hospitalId);

      return res.json({
        success: true,
        message: "Verification status retrieved",
        data: {
          verificationStatus: hospital.verificationStatus,
          isActive: hospital.isActive,
          rejectionReason: hospital.rejectionReason,
          verifiedAt: hospital.verifiedAt,
          registrationStep: hospital.registrationStep,
          isComplete: hospital.isComplete,
        },
      });
    } catch (error: any) {
      console.error("Get verification status error:", error);
      return res.status(404).json({
        success: false,
        message: error.message || "Hospital not found",
      });
    }
  }
}
