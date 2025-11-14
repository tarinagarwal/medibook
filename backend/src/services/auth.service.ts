import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "../config";

export interface JWTPayload {
  id: string;
  email: string;
  role: "admin" | "hospital";
}

export class AuthService {
  /**
   * Hash password using bcrypt
   */
  static async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  /**
   * Compare password with hash
   */
  static async comparePassword(
    password: string,
    hash: string
  ): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  /**
   * Generate JWT access token
   */
  static generateAccessToken(payload: JWTPayload): string {
    return jwt.sign(payload, config.jwtSecret, {
      expiresIn: config.jwtExpiresIn,
    });
  }

  /**
   * Generate JWT refresh token
   */
  static generateRefreshToken(payload: JWTPayload): string {
    return jwt.sign(payload, config.jwtSecret, {
      expiresIn: config.jwtRefreshExpiresIn,
    });
  }

  /**
   * Verify JWT token
   */
  static verifyToken(token: string): JWTPayload {
    try {
      return jwt.verify(token, config.jwtSecret) as JWTPayload;
    } catch (error) {
      throw new Error("Invalid or expired token");
    }
  }

  /**
   * Generate both access and refresh tokens
   */
  static generateTokens(payload: JWTPayload) {
    return {
      accessToken: this.generateAccessToken(payload),
      refreshToken: this.generateRefreshToken(payload),
    };
  }
}
