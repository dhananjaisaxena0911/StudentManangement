import React, { useState } from "react";
import axios from "axios";

function CreateStudent() {
  const [studentData, setStudentData] = useState({
    name: "",
    age: "",
    class: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };
  const MONGO_URI = import.meta.env.VITE_MONGO_STU_URI;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${MONGO_URI}/create`, {
        Name: studentData.name,
        Age: studentData.age,
        Class: studentData.class,
        Course: studentData.course,
      });
      alert(response.data.message); // Show success message
      // Optionally, reset the form
      setStudentData({ name: "", age: "", class: "", course: "" });
    } catch (error) {
      console.error("Error creating student:", error);
      alert("Error creating student. Please try again.");
    }
  };

  return (
    <div>
      {/* Create Student Form */}
      <div className="flex justify-center align-middle h-[90vh] items-center">
        <div className="flex flex-col items-center mt-8">
          <h2 className="text-2xl font-bold mb-4">CREATE STUDENT</h2>
          <form className="space-y-4 w-96" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black">
                Name<sup className="text-red-500 text-l">*</sup>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={studentData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="age" className="block text-sm font-medium text-black">
                Age<sup className="text-red-500 text-l">*</sup>
              </label>
              <input
                type="number"
                id="age"
                name="age"
                required
                value={studentData.age}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                placeholder="Enter your age"
              />
            </div>

            <div>
              <label htmlFor="class" className="block text-sm font-medium text-black">
                Class<sup className="text-red-500 text-l">*</sup>
              </label>
              <input
                type="number"
                id="class"
                name="class"
                required
                value={studentData.class}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                placeholder="Enter your class"
              />
            </div>

            <div>
              <label htmlFor="course" className="block text-sm font-medium text-black">
                Course<sup className="text-red-500 text-l">*</sup>
              </label>
              <input
                type="text"
                id="course"
                name="course"
                required
                value={studentData.course}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                placeholder="Enter your course"
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

export default CreateStudent;
