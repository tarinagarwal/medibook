import { Router } from "express";
import adminRoutes from "./admin.routes";
import hospitalRoutes from "./hospital.routes";

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

export default router;
