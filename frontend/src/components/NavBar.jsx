import React from 'react'
import { SiGnuprivacyguard } from "react-icons/si";
import { PiStudentFill } from "react-icons/pi";

function NavBar() {
  return (
    <div>
      <div className='flex text-2xl bg-gray-800 rounded-lg m-5 p-3 justify-between'>
        <a href="/" className='font-bold text-white text-center'><PiStudentFill/></a>
              <a href="/" className='font-bold text-white text-center'>Student Management System</a>
              <a href="/signup" className='text-2xl text-white hover:text-blue'><SiGnuprivacyguard/></a>
      </div>
    </div>
  )
}

export default NavBar
