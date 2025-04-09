import UserModel from '../models/userLogin.js';
import bcrypt from 'bcrypt';

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

export default signup;