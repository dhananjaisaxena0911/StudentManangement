import React, { useState } from 'react';
import CreateStudent from '../components/studentOperations/CreateStudent';
import ViewStudent from '../components/studentOperations/ViewStudent';
import DeleteStudent from '../components/studentOperations/DeleteStudent';
import UpdateStudent from '../components/studentOperations/UpdateStudent';

function DashBoardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [activeComponent, setActiveComponent] = useState('view');
  return (
    <div>
      {/* Buttons */}
      <div className="flex h-auto w-screen justify-center gap-40">
        <div>
          <button
            onClick={() => setActiveComponent('view')}
            className={`bg-blue-300 text-white font-bold py-2 px-4 rounded-lg border-2px hover:bg-blue-700 w-52 ${activeComponent === 'view' ? 'bg-blue-700' : ''
              }`}
          >
            View
          </button>
        </div>
        <div>
          <button
            onClick={() => setActiveComponent('create')}
            className={`bg-blue-300 text-white font-bold py-2 px-4 rounded-lg border-2px hover:bg-blue-700 w-52 ${activeComponent === 'create' ? 'bg-blue-700' : ''
              }`}
          >
            create
          </button>
        </div>
        <div>
          <button
            onClick={() => setActiveComponent('update')}
            className={`bg-blue-300 text-white font-bold py-2 px-4 rounded-lg border-2px hover:bg-blue-700 w-52 ${activeComponent === 'update' ? 'bg-blue-700' : ''
              }`}
          >
            update
          </button>
        </div>
        <div>
          <button
            onClick={() => setActiveComponent('delete')}
            className={`bg-blue-300 text-white font-bold py-2 px-4 rounded-lg border-2px hover:bg-blue-700 w-52 ${activeComponent === 'delete' ? 'bg-blue-700' : ''
              }`}
          >
            delete
          </button>
        </div>
      </div>
      {/*Component Diaplay Area*/}
      <div>
        {activeComponent==='create'&& <CreateStudent/>}
        {activeComponent==='view'&& <ViewStudent/>}
        {activeComponent==='update'&& <UpdateStudent/>}
        {activeComponent==='delete'&& <DeleteStudent/>}
      </div>
    </div>

  );
}

export default DashBoardPage;


