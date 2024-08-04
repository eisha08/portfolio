import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Footer({ theme }) {
  const footerBg =
    theme === "dark"
      ? "bg-gradient-to-r from-[#0d1224] to-[#0a0d37]"
      : "bg-gradient-to-r from-[#e0eafc] to-[#cfdef3]";
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const linkColor = theme === "dark" ? "text-pink-300" : "text-blue-500";
  const iconColor = theme === "dark" ? "white" : "black";

  return (
    <div className={`${footerBg} h-auto py-4`}>
      <div className="flex flex-col lg:flex-row justify-between items-center px-4">
        <div className="text-center lg:text-left text-lg mb-4 lg:mb-0">
          <span className={textColor}>Developed by </span>
          <a
            className={linkColor}
            href="https://www.linkedin.com/in/eisha-kumari-4bb6b9260/"
          >
            Eisha Kumari
          </a>
        </div>
        <div className="flex flex-row space-x-4 justify-center">
          <div className="hover:opacity-[0.7]">
            <a href="https://github.com/eisha08">
              <IoLogoGithub size={24} color={iconColor} />
            </a>
          </div>
          <div className="hover:opacity-[0.7]">
            <a href="https://www.linkedin.com/in/eisha-kumari-4bb6b9260/">
              <FaLinkedin size={24} color={iconColor} />
            </a>
          </div>
          <div className="hover:opacity-[0.7]">
            <a href="https://www.geeksforgeeks.org/user/eishacodes0/">
              <SiGeeksforgeeks size={24} color={iconColor} />
            </a>
          </div>
          <div className="hover:opacity-[0.7]">
            <a href="https://www.instagram.com/imperfect_isha/">
              <FaInstagram size={24} color={iconColor} />
            </a>
          </div>
          <div className="hover:opacity-[0.7]">
            <a href="mailto:eishajha0807@gmail.com">
              <MdOutlineMail size={24} color={iconColor} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
