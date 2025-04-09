import mongoose from "mongoose";

const studentDataSchema=new mongoose.Schema(
    {
        Name:{
            type:String,
            required:true,
            MaxLength:20,
        },
        Class:{
            type:Number,
            required:true,
        },
        Age:{
            type:Number,
            required:true,
        },
        Course:{
            type:String,
            required:true
        }
    }
)
module.exports= mongoose.model("studentModel",studentDataSchema);