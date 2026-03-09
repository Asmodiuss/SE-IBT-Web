import express from "express";
import {
  createAdmin,
  listAdmins,
  deleteAdmin,
  updateAdmin,
  sendOtp,
  loginAdmin,
  verifyAdminOtp,
  requestPasswordReset,
  verifyResetOtp,
  resetPassword
} from "../controllers/adminController.js";

const router = express.Router();

router.get("/", listAdmins);
router.post("/", createAdmin);
router.delete("/:id", deleteAdmin);

router.patch("/:id", updateAdmin);
router.post("/auth/send-otp", sendOtp);

router.post("/login", loginAdmin);
router.post("/verify-otp", verifyAdminOtp);

router.post("/forgot-password", requestPasswordReset);
router.post("/verify-reset-otp", verifyResetOtp);
router.post("/reset-password", resetPassword);

export default router;