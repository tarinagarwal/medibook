import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 3001,
  nodeEnv: process.env.NODE_ENV || "development",
  corsOrigins: [
    process.env.USER_FRONTEND_URL || "http://localhost:4000",
    process.env.ADMIN_FRONTEND_URL || "http://localhost:4001",
    process.env.HOSPITAL_FRONTEND_URL || "http://localhost:4002",
  ],
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET || "your-secret-key",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1h",
  jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d",
  admin: {
    username: process.env.ADMIN_USERNAME || "admin",
    password: process.env.ADMIN_PASSWORD || "admin123",
    email: process.env.ADMIN_EMAIL || "admin@medibook.com",
  },
  uploadthing: {
    secret: process.env.UPLOADTHING_SECRET || "",
    appId: process.env.UPLOADTHING_APP_ID || "",
  },
  smtp: {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
    from: process.env.SMTP_FROM || "noreply@medibook.com",
  },
};
