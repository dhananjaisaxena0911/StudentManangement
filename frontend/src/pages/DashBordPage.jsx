import React, { useState } from 'react';
import CreateStudent from '../components/studentOperations/CreateStudent';

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
  
<CreateStudent/>
  </div>
  );
}

export default DashBoardPage;


