const UserModel=require("../models/userLogin");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");

const JWT="";

//Signup Controller
const signup=async(req,res)=>{
    try{
        const{Name,Email,Password}=req.body;

        const existingUser=await UserModel.findOne({Email});
        if(existingUser){
            return res.status(400).json({
                message:'Email already registered'
            });
        }
        const hashedPassword=await bcrypt.hash(Password,10);

        //NewUser
        const newUser=new UserModel({
            Name,
            Email,
            Password:hashedPassword,
        });

        await newUser.save();
        res.status(200).json({
            message:"User registerd Successfully"
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message:"Server Error"
        });
    }
};

//Login Controller
const Loginup=async(req,res)=>{
    try{
        const{Email,Password}=req.body;

        const user=await UserModel.findOne({Email});
        if(!user){
            return res.status(400).json({message:'Invalid Credentials!'});

        }

        const isMatch=await bcrypt.compare(Password,user.Password);
        if(!isMatch){
            return res.status(400).json({
                message:"Invalid Password!"
            })
        }
        //generate JWT Token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({
            message:"Login Succesfull",token
        });
    }catch(err){
        res.status(500).json({message:"Server Error"});
    }
};
module.exports={signup,Loginup};