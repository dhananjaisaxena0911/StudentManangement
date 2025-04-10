import express from "express";
import signup from "../controllers/authSignupController.js";
import login from "../controllers/authLoginController.js";

const router = express.Router();

// Signup route
router.post("/signup", signup);

// Login route
router.post("/login", login);

export default router;
