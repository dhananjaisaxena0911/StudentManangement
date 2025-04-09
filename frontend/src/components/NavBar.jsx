import React from "react";
import { SiGnuprivacyguard } from "react-icons/si";
import { PiStudentFill } from "react-icons/pi";
import { CiLogin } from "react-icons/ci";

function NavBar() {
  return (
    <div>
      <div className="flex text-2xl bg-gray-800 rounded-lg m-5 p-3 items-center justify-between">
        {/* Left icon */}
        <a href="/" className="text-white">
          <PiStudentFill />
        </a>

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
