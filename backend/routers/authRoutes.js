const express=require("express");
const {Signup,Login}=require("../controllers/authcontroller");
const router=express.Router();

//signup router
router.post('/signup',Signup);
router.post('/login',Login);

module.exports(router)