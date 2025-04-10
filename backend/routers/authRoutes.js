import express from "express";
import { Login, Signup } from "../controllers/authController.js";

const router = express.Router();

// Route for user login
router.post("/login", Login);

// Route for user signup
router.post("/signup", Signup);

export default router;
