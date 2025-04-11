import express from "express";
import {
    createStudent,
    getStudents,
    getStudentByRollNo,
    updateStudentByRollNo,
    deleteStudentByRollNo
}from "../controllers/student.controller.js";

const router=express.Router();

//Create a new Student
router.post("/create",createStudent);

//Get all students
router.get("/",getStudents);


// Get a single student by RollNo
router.get("/rollno/:rollNo", getStudentByRollNo);


// Update a student by RollNo
router.put("/rollno/:rollNo", updateStudentByRollNo);

// Delete a student by RollNo
router.delete("/rollno/:rollNo", deleteStudentByRollNo);

export default router;
