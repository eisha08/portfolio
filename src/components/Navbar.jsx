import React, { useState } from "react";
import { FaCode, FaRegMoon, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar ${theme === 'dark' ? 'bg-transparent' : 'bg-transparent'}  w-full z-10`}>
      <div className="flex flex-row justify-between items-center p-4">
        <div className="left flex flex-row items-center">
          <div className="logo pt-1">
            <FaCode size={24} color={theme === 'dark' ? 'white' : 'purple'} />
          </div>
          <div className={`logoName pl-3 font-opensans text-2xl ${theme === 'dark' ? 'text-white' : 'text-purple-700'} font-bold`}>
            eishacodes
          </div>
        </div>
        <div className="right hidden md:flex flex-row gap-6">
          <div className={`home font-opensans text-lg cursor-pointer hover:text-pink-600 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <a href="#">Home</a>
          </div>
          <div className={`about font-opensans text-lg cursor-pointer hover:text-pink-600 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <a href="#about">About</a>
          </div>
          <div className={`skills font-opensans text-lg cursor-pointer hover:text-pink-600 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <a href="#skills">Skills</a>
          </div>
          <div className={`exp cursor-pointer font-opensans  text-lg hover:text-pink-600 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <a href="#experience">Experience</a>
          </div>
          <div className={`project font-opensans cursor-pointer text-lg hover:text-pink-600 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <a href="#project">My Work</a>
          </div>
        </div> 
        <div className="md:hidden flex items-center">
          <button onClick={handleMenuToggle}>
            {menuOpen ? <FaTimes size={24} color={theme === 'dark' ? 'white' : 'black'} /> : <FaBars size={24} color={theme === 'dark' ? 'white' : 'black'} />}
          </button>
        </div>
        <div className={`mode hidden md:flex flex-row items-center border-2 ${theme === 'dark' ? 'border-white' : 'border-black'} rounded-3xl p-1 cursor-pointer`} onClick={toggleTheme}>
          {theme === 'dark' ? <MdOutlineWbSunny size={18} color="white" /> : <FaRegMoon size={18} color="black" />}
        </div>
      </div>
      <div className={`md:hidden flex flex-col items-center ${menuOpen ? 'block' : 'hidden'}`}>
        <div className={`home font-opensans text-lg hover:text-pink-600 ${theme === 'dark' ? 'text-white' : 'text-black'} mt-2`}>
          <a href="#" onClick={handleMenuToggle}>Home</a>
        </div>
        <div className={`about font-opensans text-lg hover:text-pink-600 ${theme === 'dark' ? 'text-white' : 'text-black'} mt-2`}>
          <a href="#about" onClick={handleMenuToggle}>About</a>
        </div>
        <div className={`skills font-opensans text-lg hover:text-pink-600 ${theme === 'dark' ? 'text-white' : 'text-black'} mt-2`}>
          <a href="#skills" onClick={handleMenuToggle}>Skills</a>
        </div>
        <div className={`exp font-opensans text-lg hover:text-pink-600 ${theme === 'dark' ? 'text-white' : 'text-black'} mt-2`}>
          <a href="#experience" onClick={handleMenuToggle}>Experience</a>
        </div>
        <div className={`project font-opensans cursor-pointer text-lg hover:text-pink-600 ${theme === 'dark' ? 'text-white' : 'text-black'} mt-2`}>
          <a href="#project" onClick={handleMenuToggle}>My Work</a>
        </div>
        <div className={`mode flex flex-row items-center border-2 ${theme === 'dark' ? 'border-white' : 'border-black'} rounded-3xl p-1 cursor-pointer mt-4`} onClick={toggleTheme}>
          {theme === 'dark' ? <MdOutlineWbSunny size={18} color="white" /> : <FaRegMoon size={18} color="black" />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
