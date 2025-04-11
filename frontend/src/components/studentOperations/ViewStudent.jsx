import React, { useState } from "react";
import axios from "axios";
import StudentCard from "../studentcard/StudentCard";

export default function ViewStudent() {
  const [rollNo, setRollNo] = useState("");
  const [studentData, setStudentData] = useState(null); // Change to null for a single student
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const MONGO_URI = import.meta.env.VITE_MONGO_STU_URI;

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(`${MONGO_URI}/rollno/${rollNo}`); // Fetch student by roll number
      setStudentData(response.data.student); // Assuming the response contains a student object
      console.log(response.data.student);
    } catch (err) {
      setError("Student not found or server error.");
      setStudentData(null); // Reset student data on error
    } finally {
      setLoading(false);
    }
  };

  const handleViewAll = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`${MONGO_URI}`); // Fetch all students
      setStudentData(response.data); // Assuming the response contains an array of students
      console.log(response.data);
    } catch (err) {
      setError("Error fetching students.");
      setStudentData(null); // Reset student data on error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center align-middle h-[90vh] items-center">
      <div className="flex flex-col items-center mt-8">
        <h2 className="text-2xl font-bold mb-4">VIEW STUDENT</h2>
        <form className="space-y-4 w-96" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="rollNo"
              className="block text-sm font-medium text-black"
            >
              Roll number<sup className="text-red-500 text-l">*</sup>
            </label>
            <input
              type="number"
              id="rollNo"
              name="rollNo"
              required
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              placeholder="Enter your roll number"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-blue-700"
            >
              Submit
            </button>
          </div>

          <div>
            <button
              type="button"
              className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-green-700"
              onClick={handleViewAll} // Call the function to view all students
            >
              View All
            </button>
          </div>
        </form>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {studentData && (
          <div className="mt-6 flex flex-wrap gap-6 justify-center">
            {Array.isArray(studentData) ? (
              studentData.map((student, index) => (
                <StudentCard key={index} student={student} />
              ))
            ) : (
              <StudentCard student={studentData} /> // Display single student data
            )}
          </div>
        )}
      </div>
    </div>
  );
}
