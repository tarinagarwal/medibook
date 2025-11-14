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
};
