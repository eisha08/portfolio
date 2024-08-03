import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
function Footer(){
    return (
        <div className=" bg-gradient-to-r from-[#0d1224] to-[#0a0d37] h-[8vh]">
                <div className="flex flex-row justify-between items-center pt-4">
                    <div className="pl-8 text-lg">
                        <span className="text-white">Developed by </span><a className="text-pink-300" href="https://www.linkedin.com/in/eisha-kumari-4bb6b9260/">Eisha Kumari</a>
                    </div>
                    <div className="flex flex-row space-x-4 pr-8">
                        <div className="hover:opacity-[0.7] ">
                        <a href="https://github.com/eisha08"><IoLogoGithub size={24} color="white" /></a>
                        </div>
                        <div className="hover:opacity-[0.7] ">
                        <a href="https://www.linkedin.com/in/eisha-kumari-4bb6b9260/"><FaLinkedin size={24} color="white" /></a>
                        </div>
                        <div className="hover:opacity-[0.7] ">
                        <a href="https://www.geeksforgeeks.org/user/eishacodes0/"><SiGeeksforgeeks size={24} color="white" /></a>
                        </div>
                        <div className="hover:opacity-[0.7] ">
                        <a href=""><FaInstagram size={24} color="white" /></a>
                        </div>
                        <div className="hover:opacity-[0.7] ">
                        <a href="mailto:eishajha0807@gmail.com"> <MdOutlineMail size={24} color="white" /></a>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Footer;