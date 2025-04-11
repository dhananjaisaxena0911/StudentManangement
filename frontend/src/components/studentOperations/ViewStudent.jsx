import React, { useState } from "react";
import axios from "axios";

export default function ViewStudent() {
  const [rollNo, setRollNo] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const MONGO_URI = import.meta.env.VITE_MONGO_STU_URI;

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(`${MONGO_URI}`);
      setStudentData(response.data.student);
      console.log(response.data)
    } catch (err) {
      setError("Student not found or server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center align-middle h-[90vh] items-center">
      <div className="flex flex-col items-center mt-8">
        <h2 className="text-2xl font-bold mb-4">VIEW STUDENT</h2>
        <form className="space-y-4 w-96">
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
              onClick={handleSubmit}
            >
              View All
            </button>
          </div>
        </form>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {studentData && (
          <div className="mt-4">
            <h3 className="text-lg font-bold">Student Details:</h3>
            <p>
              <strong>Roll No:</strong> {studentData.RollNo}
            </p>
            <p>
              <strong>Name:</strong> {studentData.Name}
            </p>
            <p>
              <strong>Class:</strong> {studentData.Class}
            </p>
            <p>
              <strong>Age:</strong> {studentData.Age}
            </p>
            <p>
              <strong>Course:</strong> {studentData.Course}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
