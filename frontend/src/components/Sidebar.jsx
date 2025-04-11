import React, { useState } from 'react'
import { FaRegStar, FaHome } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { RiDashboardFill } from "react-icons/ri";

function Sidebar({showSidebar, setShowSidebar}) {

    const navigate = useNavigate();

    function handleLogout(){
        localStorage.removeItem("token");
         setShowSidebar(false)
         window.dispatchEvent(new Event("authChange"));
         navigate("/login");
    }

    function handleClick(){
        setShowSidebar(false);
        console.log(optionClicked)
    }

  return (
    <div className={`absolute h-[calc(100vh-8rem)] bg-gray-800 text-white text-lg top-16 left-0 p-3 m-5 mt-0 w-64 rounded-lg px-6 ${showSidebar ? 'translate-x-0 opacity-100' : '-translate-x-28 opacity-0'} transition-all ease-in-out duration-200}`}>
        <ul className='flex flex-col gap-4 mt-12'>
            <NavLink to='/'  onClick = {handleClick} className={({isActive}) => `${isActive ? 'bg-white text-xl text-gray-800' : 'hover:bg-gray-500 hover:text-xl'} flex justify-start font-bold items-center  transition-all duration-200 px-6 py-3 rounded-lg gap-4 cursor-pointer` }>
                <div className='text-4xl'><FaHome /></div>
                <div>Home</div>
            </NavLink>
            <NavLink to='/dashboard'  onClick = {handleClick} className={({isActive}) => `${isActive ? 'bg-white text-xl text-gray-800' : 'hover:bg-gray-500 hover:text-xl'} flex justify-start font-bold items-center  transition-all duration-200 px-6 py-3 rounded-lg gap-4 cursor-pointer` }>
                <div className='text-4xl'><RiDashboardFill /></div>
                <div>Dashboard</div>
            </NavLink>
            <NavLink to='https://www.vinove.com/about-us'  onClick = {handleClick} className={({isActive}) => `${isActive ? 'bg-gray-500 text-xl text-gray-800' : 'hover:bg-gray-500 hover:text-xl'} flex justify-start font-bold items-center  transition-all duration-200 px-6 py-3 rounded-lg gap-4 cursor-pointer` }>
                <div className='text-white text-4xl'><FaCircleInfo /></div>
                <div>About Us</div>
            </NavLink>
            <NavLink to='https://www.glassdoor.co.in/Overview/Working-at-Vinove-Software-and-Services-EI_IE455945.11,39.htm'  onClick = {handleClick} className={({isActive}) => `${isActive ? 'bg-gray-500 text-xl text-gray-800' : 'hover:bg-gray-500 hover:text-xl'} flex justify-start font-bold items-center  transition-all duration-200 px-6 py-3 rounded-lg gap-4 cursor-pointer` }>
                <div className='text-white text-4xl'><FaRegStar /></div>
                <div>Reviews</div>
            </NavLink>
            <li className='flex justify-start items-center hover:bg-red-500/10 hover:text-xl gap-4 cursor-pointer text-red-500 underline hover:text-red-700 transition-all duration-200 px-6 py-3 rounded-lg border-t pt-4' onClick={handleLogout}>
                <div className='text-4xl'><IoIosLogOut /></div>
                <div>Logout</div>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar