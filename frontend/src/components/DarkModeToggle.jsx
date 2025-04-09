// src/DarkModeToggle.js
import React, { useState, useEffect } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("dark-mode") === "true";
    setIsDarkMode(savedMode);
    document.body.classList.toggle("bg-gray-800", savedMode);
    document.body.classList.toggle("text-white", savedMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("dark-mode", !isDarkMode);
    document.body.classList.toggle("bg-gray-800", !isDarkMode);
    document.body.classList.toggle("text-white", !isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`box-border text-2xl rounded-xl py-3 px-4 mr-2 transition duration-300 
                    ${
                      isDarkMode
                        ? "bg-slate-400 text-white"
                        : "bg-gray-300 text-black"
                    }`}
    >
      {isDarkMode ? <FaMoon /> : <MdOutlineWbSunny />}
    </button>
  );
};

export default DarkModeToggle;
