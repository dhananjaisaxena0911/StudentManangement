import React, { useState } from "react";
import axios from "axios";

export default function ViewStudent() {
  const [rollNo, setRollNo] = useState("");
  const [studentData, setStudentData] = useState([]);
  const [searchRollNo, setSearchRollNo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const MONGO_URI = import.meta.env.VITE_MONGO_STU_URI;

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`${MONGO_URI}`);
      setStudentData(response.data); // assuming it's already an array
      console.log(response.data);
    } catch (err) {
      setError("Student not found or server error.");
    } finally {
      setLoading(false);
    }
  };

  // Filter by roll number (if search input is not empty)
  const filteredStudents = searchRollNo
    ? studentData.filter(
        (student) =>
          String(student.RollNo).includes(String(searchRollNo).trim())
      )
    : studentData;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-center mb-6">View Students</h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
        <input
          type="number"
          value={searchRollNo}
          onChange={(e) => setSearchRollNo(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-64"
          placeholder="Search by Roll No"
        />
        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded"
        >
          View All
        </button>
      </div>

      {loading && <p className="text-center text-blue-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {filteredStudents.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border">Roll No</th>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Class</th>
                <th className="py-2 px-4 border">Age</th>
                <th className="py-2 px-4 border">Course</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2 px-4 border">{student.RollNo}</td>
                  <td className="py-2 px-4 border">{student.Name}</td>
                  <td className="py-2 px-4 border">{student.Class}</td>
                  <td className="py-2 px-4 border">{student.Age}</td>
                  <td className="py-2 px-4 border">{student.Course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading && <p className="text-center text-gray-600">No student data to display.</p>
      )}
    </div>
  );
}
