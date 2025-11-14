import { Router } from "express";
import { HospitalController } from "../controllers/hospital.controller";
import { authenticate, requireHospital } from "../middleware/auth.middleware";

const router = Router();

// Public routes
router.post("/register/step1", HospitalController.registerStep1);
router.post("/register/step2/:hospitalId", HospitalController.registerStep2);
router.post("/register/step3/:hospitalId", HospitalController.registerStep3);
router.post("/login", HospitalController.login);

// Protected routes (require hospital authentication)
router.use(authenticate, requireHospital);

router.get("/profile", HospitalController.getProfile);
router.patch("/profile", HospitalController.updateProfile);
router.get("/verification-status", HospitalController.getVerificationStatus);

export default router;
