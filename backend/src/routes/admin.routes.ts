import { Router } from "express";
import { AdminController } from "../controllers/admin.controller";
import { authenticate, requireAdmin } from "../middleware/auth.middleware";

const router = Router();

// Public routes
router.post("/login", AdminController.login);

// Protected routes (require admin authentication)
router.use(authenticate, requireAdmin);

router.get("/hospitals", AdminController.getHospitals);
router.get("/hospitals/:id", AdminController.getHospitalById);
router.patch("/hospitals/:id/approve", AdminController.approveHospital);
router.patch("/hospitals/:id/reject", AdminController.rejectHospital);
router.get("/stats", AdminController.getDashboardStats);

export default router;
