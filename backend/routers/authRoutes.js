import express from "express";
import { Login, Signup, resetPassword } from "../controllers/authController.js";

const router = express.Router();

// Route for user login
router.post("/login", Login);

// Route for user signup
router.post("/signup", Signup);

// Route for password reset
router.post("/reset-password", resetPassword);

export default router;

