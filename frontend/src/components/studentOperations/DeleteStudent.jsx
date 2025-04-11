import React, { useState } from "react";
import axios from "axios";

export default function DeleteStudent() {
  const [rollNo, setRollNo] = useState("");

  const handleChange = (e) => {
    setRollNo(e.target.value);
  };

  const MONGO_URI = import.meta.env.VITE_MONGO_STU_URI;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`${MONGO_URI}/rollno/${rollNo}`);
      alert(response.data.message); // Show success message
      setRollNo(""); // Reset the input field
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("Error deleting student. Please try again.");
    }
  };

  return (
    <div>
      <div className="flex justify-center align-middle h-[90vh] items-center">
        <div className="flex flex-col items-center mt-8 ">
          <h2 className="text-2xl font-bold mb-4">DELETE STUDENT</h2>
          <form className="space-y-6 w-96" onSubmit={handleSubmit}>
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
                onChange={handleChange}
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
          </form>
        </div>
      </div>
    </div>
  );
}
