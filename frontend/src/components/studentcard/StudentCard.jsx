import React from 'react';

const StudentCard = ({ student }) => {
  const { Name: name, RollNo: rollNo, Age: age, Class: studentClass, Course: course } = student;

  return (
    <div className="bg-white shadow-lg rounded-lg w-60 p-4 text-center">
      <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
      <div className="space-y-2 mt-4">
        <p><span className="font-semibold">Roll No:</span> {rollNo}</p>
        <p><span className="font-semibold">Age:</span> {age}</p>
        <p><span className="font-semibold">Class:</span> {studentClass}</p>
        <p><span className="font-semibold">Course:</span> {course}</p>
      </div>
      <button className="bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-600">
        View Profile
      </button>
    </div>
  );
};

export default StudentCard;