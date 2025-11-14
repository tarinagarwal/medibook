import nodemailer from "nodemailer";
import { config } from "../config";

export class EmailService {
  private static transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.secure,
    auth: {
      user: config.smtp.user,
      pass: config.smtp.pass,
    },
  });

  /**
   * Send registration confirmation email
   */
  static async sendRegistrationConfirmation(
    to: string,
    facilityName: string
  ): Promise<void> {
    const mailOptions = {
      from: config.smtp.from,
      to,
      subject: "Registration Received - MediBook",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4a5568;">Registration Received</h2>
          <p>Dear ${facilityName},</p>
          <p>Thank you for registering with MediBook. We have received your registration and it is currently under review.</p>
          <p>Our admin team will verify your documents and facility details within 1-3 business days.</p>
          <p>You will receive an email notification once your registration is approved.</p>
          <br>
          <p>Best regards,<br>The MediBook Team</p>
        </div>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log(`Registration confirmation email sent to ${to}`);
    } catch (error) {
      console.error("Error sending registration confirmation email:", error);
      // Don't throw error - email failure shouldn't block registration
    }
  }

  /**
   * Send approval email
   */
  static async sendApprovalEmail(
    to: string,
    facilityName: string
  ): Promise<void> {
    const mailOptions = {
      from: config.smtp.from,
      to,
      subject: "Registration Approved - MediBook",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #22543d;">Congratulations! Your Registration is Approved</h2>
          <p>Dear ${facilityName},</p>
          <p>Great news! Your registration with MediBook has been approved.</p>
          <p>You can now log in to your hospital portal and start managing your appointments.</p>
          <a href="${config.corsOrigins[2]}/login" style="display: inline-block; padding: 12px 24px; background-color: #38a169; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0;">
            Login to Hospital Portal
          </a>
          <p>If you have any questions, please don't hesitate to contact our support team.</p>
          <br>
          <p>Best regards,<br>The MediBook Team</p>
        </div>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log(`Approval email sent to ${to}`);
    } catch (error) {
      console.error("Error sending approval email:", error);
    }
  }

  /**
   * Send rejection email
   */
  static async sendRejectionEmail(
    to: string,
    facilityName: string,
    reason: string
  ): Promise<void> {
    const mailOptions = {
      from: config.smtp.from,
      to,
      subject: "Registration Update - MediBook",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #742a2a;">Registration Update</h2>
          <p>Dear ${facilityName},</p>
          <p>Thank you for your interest in joining MediBook. After reviewing your registration, we need to inform you that we cannot approve it at this time.</p>
          <p><strong>Reason:</strong> ${reason}</p>
          <p>If you believe this is an error or would like to resubmit your application with corrections, please contact our support team.</p>
          <br>
          <p>Best regards,<br>The MediBook Team</p>
        </div>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log(`Rejection email sent to ${to}`);
    } catch (error) {
      console.error("Error sending rejection email:", error);
    }
  }

  /**
   * Send password reset email
   */
  static async sendPasswordResetEmail(
    to: string,
    resetToken: string
  ): Promise<void> {
    const resetUrl = `${config.corsOrigins[2]}/reset-password?token=${resetToken}`;

    const mailOptions = {
      from: config.smtp.from,
      to,
      subject: "Password Reset Request - MediBook",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4a5568;">Password Reset Request</h2>
          <p>You requested to reset your password.</p>
          <p>Click the button below to reset your password. This link will expire in 1 hour.</p>
          <a href="${resetUrl}" style="display: inline-block; padding: 12px 24px; background-color: #38a169; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0;">
            Reset Password
          </a>
          <p>If you didn't request this, please ignore this email.</p>
          <br>
          <p>Best regards,<br>The MediBook Team</p>
        </div>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log(`Password reset email sent to ${to}`);
    } catch (error) {
      console.error("Error sending password reset email:", error);
    }
  }
}
