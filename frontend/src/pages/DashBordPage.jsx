import React, { useState } from 'react';

function DashBoardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="">
    {/* Buttons */}
    <div className="flex h-auto w-screen justify-center gap-40">
      <div>
        <button className="bg-blue-300 text-white font-bold py-2 px-4 rounded-lg border-2px hover:bg-blue-700 w-52">
          View
        </button>
      </div>
      <div>
        <button className="bg-blue-300 text-white font-bold py-2 px-4 rounded-lg border-2px hover:bg-blue-700 w-52">
          Create
        </button>
      </div>
      <div>
        <button className="bg-blue-300 text-white font-bold py-2 px-4 rounded-lg border-2px hover:bg-blue-700 w-52">
          Update
        </button>
      </div>
      <div>
        <button className="bg-blue-300 text-white font-bold py-2 px-4 rounded-lg border-2px hover:bg-blue-700 w-52">
          Delete
        </button>
      </div>
    </div>
  
    {/* Create Student Form */}
    <div className='flex justify-center align-middle h-[90vh] items-center'>
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">CREATE STUDENT</h2>
      <form className="space-y-4 w-96">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-black">
            Name<sup className="text-red-500 text-l">*</sup>
          </label>
          <input
            type="text"
            id="name" 
            name="name" required
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
            name="age" required
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            placeholder="Enter your age"
          />
        </div>
  
        <div>
          <label htmlFor="class" className="block text-sm font-medium text-black">
            Class<sup className="text-red-500 text-l">*</sup>
          </label>
          <input
            type="text"
            id="class" required
            name="class"
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
            name="course" required
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

export default DashBoardPage;


