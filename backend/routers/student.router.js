import express from "express";
import {
    createStudent,
    getStudents,
    getStudentByID,
    updateStudent,
    deleteStudent
}from "../controllers/student.controller.js";

const router=express.Router();

//Create a new Student
router.post("/create",createStudent);

//Get all students
router.get("/",getStudents);

//get a single student by id
router.get("/:id",getStudentByID);

router.put("/:id",updateStudent);

router.delete("/:id",deleteStudent);

export default router;