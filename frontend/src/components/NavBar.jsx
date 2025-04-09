import React from 'react'
import { SiGnuprivacyguard } from "react-icons/si";

function NavBar() {
  return (
    <div>
          <div className='flex text-2xl bg-cyan-500 rounded-lg m-5 p-3 justify-between'>
              <a href="/" className='font-bold'>Student Management System</a>
              <a href="/signup" className='text-2xl hover:text-white'><SiGnuprivacyguard/></a>
      </div>
    </div>
  )
}

export default NavBar
