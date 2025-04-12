import express from "express";
import {Sendotp} from "../controllers/otpController.js";

const router = express.Router();



// sendOtp route
router.post("/",Sendotp);

export default router;
