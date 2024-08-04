import React from "react";
import { FaCode } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
function Navbar({ theme, toggleTheme }) {
  return (
    <div className={`navbar ${theme === 'dark' ? 'bg-transparent' : 'bg-transparent'}`}>
        <div className="flex flex-row justify-around items-center">
            <div className="left flex flex-row ">
               <div className="logo pt-4 ">
               <FaCode size={24} color={theme === 'dark' ? 'white' : 'purple'} />
               </div>
               <div className={`logoName p-3 font-opensans text-2xl ${theme === 'dark' ? 'text-white' : 'text-purple-700'} font-bold`}>
                eishacodes
               </div>
              
            </div>
            <div className={`right flex flex-row gap-6 p-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
             <div className="home font-opensans text-lg hover:text-pink-600"><a href="#">Home</a></div>
             <div className="about font-opensans text-lg hover:text-pink-600"><a href="#about">About</a></div>
             <div className="skills font-opensans text-lg hover:text-pink-600"><a href="#skills">Skills</a></div>
             <div className="exp font-opensans text-lg hover:text-pink-600"><a href="#experience">Experience</a></div>
             <div className="project font-opensans text-lg hover:text-pink-600"><a href="#project">My Work</a></div>
             
              </div>
              <div className={`mode flex flex-row mt-4 border-2 ${theme === 'dark' ? 'border-white' : 'border-black'} rounded-3xl`}>
              <div className="light p-1 cursor-pointer" onClick={toggleTheme}>
            {theme === 'dark' ? <MdOutlineWbSunny size={18} color="white" /> : <FaRegMoon size={18} color="black" />}
          </div>
               </div>
        </div>
      
    </div>
  );
}
export default Navbar;  