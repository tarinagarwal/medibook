import express from "express";
import cors from "cors";
import { config } from "./config";
import routes from "./routes";
import { errorHandler } from "./middleware/error.middleware";
import prisma from "./lib/prisma";

const app = express();

// Middleware
app.use(
  cors({
    origin: config.corsOrigins,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", routes);

// Error handling
app.use(errorHandler);

// Start server
app.listen(config.port, async () => {
  console.log(`🚀 Backend server running on port ${config.port}`);
  console.log(`📍 Environment: ${config.nodeEnv}`);
  console.log(`🔗 CORS enabled for:`);
  config.corsOrigins.forEach((origin) => console.log(`   - ${origin}`));

  // Test database connection
  try {
    await prisma.$connect();
    console.log(`✅ Database connected successfully`);
  } catch (error) {
    console.error(`❌ Database connection failed:`, error);
  }
});

// Graceful shutdown
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
