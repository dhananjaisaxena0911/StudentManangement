import express from "express";
import signup from "../controllers/authSignupController.js"; 
import login from "../controllers/authLoginController.js"; 

const router = express.Router();

router.post("/signup", signup); 

router.post("/login", login); 

export default router;
