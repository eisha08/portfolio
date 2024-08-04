import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/perfect-removebg-preview.png";
import profile from "../assets/e-removebg-preview.png";
import Typewriter from "typewriter-effect";
import { CiMail } from "react-icons/ci";
import { IoMdDownload } from "react-icons/io";
import pdf  from "../assets/eisha.pdf";

function Home({ theme }) {
  
  const fadeIn = () => {
    return {
      hidden: {
        opacity: 0.1,
      },
      show: {
        opacity: 1,
        transition: {
          type: "tween",
          duration: 2,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };

  return (
    <div
      className={`home py-8 lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col w-[100%] justify-around items-center ${
        theme === "dark" ? "bg-dark text-white" : "bg-light text-black"
      }`}
    >
      <div className="left w-full md:w-[50%]">
        <div className="intro-content flex flex-col">
          <span
            className={`name text-3xl md:text-5xl font-opensans p-2 ${
              theme === "dark" ? "text-pink-300" : "text-purple-700"
            }`}
          >
            <strong>Hi, This is Eisha</strong>
          </span>
          <span
            className={`prof text-2xl md:text-3xl font-opensans font-semibold ${
              theme === "dark" ? "text-blue-400" : "text-blue-600"
            }`}
          >
            I am a
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Tech Enthusiast",
                  "Cricket Lover",
                  "Programmer",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </span>
          <span
            className={`intro-text text-center text-lg md:text-xl p-2 ${
              theme === "dark" ? "text-pink-200" : "text-purple-700"
            }`}
          >
            From crafting responsive user interfaces to optimizing server-side
            performance, I thrive in the dynamic world of web development. Take
            a peek at my resume below and if you like what you see, drop me a
            message using the contact form—let's create something amazing
            together!
          </span>
        </div>
        <div className="button-div flex flex-col md:flex-row justify-center p-4 gap-4">
          <div
            className={`btn1 flex items-center justify-center flex-row gap-2 border-2 ${
              theme === "dark" ? "border-white" : "border-black"
            } rounded-3xl bg-pink-500 p-2 md:p-3 hover:bg-blue-400`}
          >
            <div className="btn">
              <a href="#form-page">
                <button className="text-center">Contact Me</button>
              </a>
            </div>
            <div className="icon">
              <CiMail size={24} />
            </div>
          </div>
          <div
            className={`btn2 flex items-center justify-center flex-row gap-2 border-2 ${
              theme === "dark" ? "border-white" : "border-black"
            } rounded-3xl bg-pink-500 p-2 md:p-3 hover:bg-blue-400`}
          >
            <div className="">
              <a href={pdf} target="_blank" rel="noopener noreferrer" ><button className="text-center">My Resume</button></a>
            </div>
            <div className="">
              <IoMdDownload size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="right w-[42%] pb-4">
        <div className="relative w-[500px] h-[550px]">
          <motion.div
            className="img1 absolute top-0 left-0 right-0 bottom-0"  
            variants={fadeIn()}
            initial="hidden"
            animate="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* absolute lg:bottom-[16%] md:bottom-[10%] sm:bottom-[8%] */}
            <img src={bg} alt="Background" className="w-full h-full" />
            {/* lg:top-[38%] md:top-[28%] lg:left-[7%] */}
          </motion.div>
          <div className="img2 absolute bottom-0 left-0 right-0"> 
            <img src={profile} className=" w-full h-full" alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
