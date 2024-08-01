import React from "react";
import { FaCode } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
function Navbar() {
  return (
    <div className="navbar bg-transparent">
        <div className="flex flex-row justify-around items-center">
            <div className="left flex flex-row ">
               <div className="logo pt-4 ">
               <FaCode size={24} color="white"/>
               </div>
               <div className="logoName p-3 font-opensans text-2xl text-white">
                eishacodes
               </div>
              
            </div>
            <div className="right flex flex-row gap-6 p-4 text-white">
             <div className="home font-opensans text-lg hover:text-pink-600"><a href="#">Home</a></div>
             <div className="about font-opensans text-lg hover:text-pink-600"><a href="#about">About</a></div>
             <div className="skills font-opensans text-lg hover:text-pink-600"><a href="#skills">Skills</a></div>
             <div className="exp font-opensans text-lg hover:text-pink-600"><a href="#experience">Experience</a></div>
             <div className="project font-opensans text-lg hover:text-pink-600"><a href="#project">My Work</a></div>
             
              </div>
              <div className="mode flex flex-row mt-4  border-2 border-white rounded-3xl">
                <div className="light p-1"><MdOutlineWbSunny size={18} color="white" /></div>
                <div className="dark p-1"><FaRegMoon size={18} color="white" /></div>
               </div>
        </div>
      
    </div>
  );
}
export default Navbar;