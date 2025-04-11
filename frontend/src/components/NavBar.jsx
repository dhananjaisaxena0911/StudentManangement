import React, { useEffect, useState } from "react";
import { SiGnuprivacyguard } from "react-icons/si";
import { PiStudentFill } from "react-icons/pi";
import { CiLogin } from "react-icons/ci";
import Sidebar from "./Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [showSIdebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem('isverified');
    setIsLoggedIn(value);
    // console.log(value);
  }, [])

  return (
    <div>
      <div className="flex text-2xl bg-gray-800 rounded-lg m-5 p-3 items-center justify-between">
        {/* Left icon */}
        {isLoggedIn ? (
          <div className="text-white cursor-pointer" onClick={() => setShowSidebar(!showSIdebar)}>
            <GiHamburgerMenu />
          </div>
        ) : (<a href="/" className="text-white">
          <PiStudentFill />
        </a>)
        }

        <Sidebar className={`${showSIdebar ? 'translate-x-0 opacity-100' : '-translate-x-28 opacity-0'} transition-all ease-in-out duration-200`} />
        {/* Centered text */}
        <a href="/" className="font-bold text-white text-center flex-1">
          Student Management System
        </a>

        {/* Right icons */}
        <a href="/signup" className="text-white hover:text-blue-500 px-3">
          <SiGnuprivacyguard />
        </a>
        <a href="/login" className="text-white hover:text-blue-500">
          <CiLogin />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
