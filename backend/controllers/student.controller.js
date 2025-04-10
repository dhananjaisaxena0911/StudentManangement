import studentModel from "../models/studentmodel.js";

//Create New Student

 const createStudent =async(req,res)=>{
    try{
        const{
            Name,
            Class,
            Age,
            Course
        }=req.body;

        if(!Name||!Class||!Age||!Course){
            return res.status(400).json({
                message:"All fields are required!"
            });
        }
        const newStudent= new studentModel({
            Name,
            Class,
            Age,
            Course
        });
        await newStudent.save();

        res.status(201).json({
          message: "Student added successfully",
          student: newStudent,
        });
    }catch(err){
        console.log(err);
        res.status(201).json({
            message:"Server Error"
        })
    }
}

//get All Students
 const getStudents= async(req,res)=>{
    try{
        const student= await studentModel.find();
        res.status(200).json(student);
    }catch(err){
        console.log(err);
    res.status(500).json({ message: "Server Error" });
    }
}

//find student by ID

const getStudentByID=async(req,res)=>{
    try{
        const student=await studentModel.findById(req.params.id);
        if(!student){
            res.status(404).json({
                message:"Student not found!"
            })
        }
        res.status(200).json({
            student
        });
    }catch(err){
        console.log(err);
    res.status(500).json({ message: "Server Error" });
    }
}

//update Student details
const updateStudent = async(req,res)=>{
    try{
        const student=await studentModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        if(!student){
            return res.status(404).json({
                message:"Student Not Found!"
            });
        }
        res.status(200).json({
            message:"Student Updated Successfully",
            student,
        });
    }catch(err)
    {
        console.log(err);
        res.status(400).json({
            message:"Server Error"
        });
    }
}

//delete student by id
const deleteStudent= async(req,res)=>{
    try{
      const student=await studentModel.findByIdAndDelete(req.params.id);
      if(!student){
        res.status(404).json({
            message:"Student not found!"
        })
      }
      res.status(200).json({message:"Student Deleted Successfully"})  
    }catch(err){
        console.log(err);
    res.status(500).json({ message: "Server Error" });
  
    }
}

export {deleteStudent,updateStudent,createStudent,getStudentByID,getStudents};