import studentModel from "../models/studentmodel.js";

//Create New Student

export const createStudent = async (req, res) => {
  try {
    const { Name, Class, Age, Course } = req.body;

    if (!Name || !Class || !Age || !Course) {
      return res.status(400).json({
        message: "All fields are required!",
      });
    }
    const lastStudent = await studentModel.findOne().sort({ RollNo: -1 });
    const newRollNo = lastStudent ? lastStudent.RollNo + 1 : 1;
    const newStudent = new studentModel({
      RollNo: newRollNo,
      Name,
      Class,
      Age,
      Course,
    });
    await newStudent.save();

    res.status(201).json({
      message: "Student added successfully",
      student: newStudent,
    });
  } catch (err) {
    console.log(err);
    res.status(201).json({
      message: "Server Error",
    });
  }
};

//get All Students
export const getStudents = async (req, res) => {
  try {
    const student = await studentModel.find();
    res.status(200).json(student);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Find student by RollNo
export const getStudentByRollNo = async (req, res) => {
  try {
    const { rollNo } = req.params; // Get rollNo from request parameters
    const student = await studentModel.findOne({ RollNo: rollNo }); // Find student by RollNo

    if (!student) {
      return res.status(404).json({
        message: "Student not found!",
      });
    }

    res.status(200).json({
      student,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update Student by RollNo
export const updateStudentByRollNo = async (req, res) => {
  try {
    const { rollNo } = req.params; // Get rollNo from request parameters
    const updatedStudent = await studentModel.findOneAndUpdate(
      { RollNo: rollNo },
      req.body,
      { new: true } // Return the updated document
    );

    if (!updatedStudent) {
      return res.status(404).json({
        message: "Student not found!",
      });
    }

    res.status(200).json({
      message: "Student Updated Successfully",
      student: updatedStudent,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete Student by RollNo
export const deleteStudentByRollNo = async (req, res) => {
  try {
    const { rollNo } = req.params; // Get rollNo from request parameters
    const deletedStudent = await studentModel.findOneAndDelete({ RollNo: rollNo });

    if (!deletedStudent) {
      return res.status(404).json({
        message: "Student not found!",
      });
    }

    res.status(200).json({ message: "Student Deleted Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
