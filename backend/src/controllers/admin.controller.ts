import { Response } from "express";
import { AuthRequest } from "../types/api.types";
import { HospitalService } from "../services/hospital.service";
import { AuthService } from "../services/auth.service";
import { config } from "../config";
import prisma from "../lib/prisma";

export class AdminController {
  /**
   * Admin login
   */
  static async login(req: AuthRequest, res: Response) {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({
          success: false,
          message: "Username and password are required",
        });
      }

      // Check if admin exists in database
      let admin = await prisma.admin.findUnique({
        where: { username },
      });

      // If admin doesn't exist and credentials match env, create admin
      if (!admin && username === config.admin.username) {
        const hashedPassword = await AuthService.hashPassword(
          config.admin.password
        );
        admin = await prisma.admin.create({
          data: {
            username: config.admin.username,
            password: hashedPassword,
            email: config.admin.email,
          },
        });
      }

      if (!admin) {
        return res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
      }

      // Verify password
      const isPasswordValid = await AuthService.comparePassword(
        password,
        admin.password
      );

      if (!isPasswordValid) {
        return res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
      }

      // Generate tokens
      const tokens = AuthService.generateTokens({
        id: admin.id,
        email: admin.email,
        role: "admin",
      });

      return res.json({
        success: true,
        message: "Login successful",
        data: {
          user: {
            id: admin.id,
            username: admin.username,
            email: admin.email,
            role: admin.role,
          },
          ...tokens,
        },
      });
    } catch (error: any) {
      console.error("Admin login error:", error);
      return res.status(500).json({
        success: false,
        message: "Login failed",
        error: error.message,
      });
    }
  }

  /**
   * Get all hospitals
   */
  static async getHospitals(req: AuthRequest, res: Response) {
    try {
      const { status, accountType, search, page, limit } = req.query;

      const result = await HospitalService.getAllHospitals({
        status: status as any,
        accountType: accountType as any,
        search: search as string,
        page: page ? parseInt(page as string) : undefined,
        limit: limit ? parseInt(limit as string) : undefined,
      });

      return res.json({
        success: true,
        message: "Hospitals retrieved successfully",
        data: result.hospitals,
        pagination: result.pagination,
      });
    } catch (error: any) {
      console.error("Get hospitals error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to retrieve hospitals",
        error: error.message,
      });
    }
  }

  /**
   * Get hospital by ID
   */
  static async getHospitalById(req: AuthRequest, res: Response) {
    try {
      const { id } = req.params;

      const hospital = await HospitalService.getHospitalById(id);

      return res.json({
        success: true,
        message: "Hospital retrieved successfully",
        data: hospital,
      });
    } catch (error: any) {
      console.error("Get hospital error:", error);
      return res.status(404).json({
        success: false,
        message: error.message || "Hospital not found",
      });
    }
  }

  /**
   * Approve hospital
   */
  static async approveHospital(req: AuthRequest, res: Response) {
    try {
      const { id } = req.params;
      const adminId = req.user!.id;

      const hospital = await HospitalService.approveHospital(id, adminId);

      return res.json({
        success: true,
        message: "Hospital approved successfully",
        data: hospital,
      });
    } catch (error: any) {
      console.error("Approve hospital error:", error);
      return res.status(400).json({
        success: false,
        message: error.message || "Failed to approve hospital",
      });
    }
  }

  /**
   * Reject hospital
   */
  static async rejectHospital(req: AuthRequest, res: Response) {
    try {
      const { id } = req.params;
      const { reason } = req.body;
      const adminId = req.user!.id;

      if (!reason) {
        return res.status(400).json({
          success: false,
          message: "Rejection reason is required",
        });
      }

      const hospital = await HospitalService.rejectHospital(
        id,
        adminId,
        reason
      );

      return res.json({
        success: true,
        message: "Hospital rejected",
        data: hospital,
      });
    } catch (error: any) {
      console.error("Reject hospital error:", error);
      return res.status(400).json({
        success: false,
        message: error.message || "Failed to reject hospital",
      });
    }
  }

  /**
   * Get dashboard statistics
   */
  static async getDashboardStats(req: AuthRequest, res: Response) {
    try {
      const stats = await HospitalService.getDashboardStats();

      return res.json({
        success: true,
        message: "Statistics retrieved successfully",
        data: stats,
      });
    } catch (error: any) {
      console.error("Get stats error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to retrieve statistics",
        error: error.message,
      });
    }
  }
}
