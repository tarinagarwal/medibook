import { Router } from "express";
import adminRoutes from "./admin.routes";
import hospitalRoutes from "./hospital.routes";
import { uploadthingRoutes } from "./uploadthing.routes";

const router = Router();

// Health check route
router.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

// Feature routes
router.use("/admin", adminRoutes);
router.use("/hospital", hospitalRoutes);

// UploadThing routes
router.use("/uploadthing", uploadthingRoutes);

export default router;
