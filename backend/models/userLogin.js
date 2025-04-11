import mongoose from "mongoose";
import { hash, verify } from "@node-rs/bcrypt";
import jwt from "jsonwebtoken"

const userLoginSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        maxLength: 20,
    },
    Email: {
        type: String,
        required: "Email address is required", 
        unique: true, 
    },
    Password: {
        type: String,
        required: true,
    },
});

//hashing password
userLoginSchema.pre("save", async function (next) {
    if (!this.isModified("Password")){
        next();
    }
    this.Password = await hash(this.Password, 10);
})

//token
userLoginSchema.methods.getJwtToken = function(){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE
    })
}

userLoginSchema.methods.comparePassword = async function(enteredPassword){
    return await verify(enteredPassword, this.Password)
}

const userModelLogin = mongoose.model("UserModel", userLoginSchema);

// Use export default to match ES Modules syntax
export default userModelLogin;