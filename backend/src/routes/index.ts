import { Router } from "express";

const router = Router();

// Health check route
router.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

// Add your feature routes here
// router.use('/appointments', appointmentRoutes);
// router.use('/hospitals', hospitalRoutes);
// router.use('/users', userRoutes);

export default router;
