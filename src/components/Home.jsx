import React from 'react';
import { motion } from 'framer-motion';
import bg from '../assets/perfect-removebg-preview.png';
import profile from '../assets/e-removebg-preview.png';
import Typewriter from 'typewriter-effect';
import { CiMail } from 'react-icons/ci';
import { IoMdDownload } from 'react-icons/io';



function Home() {
  // variants.js
// const fadeIn = () => ({
//   // hidden: { opacity: 0 },
//   // show: { opacity: 1, transition: { duration: 0.9 } },
  
// });

const fadeIn = () => {
  return {
    hidden: {
      opacity: 0.1,
    },
    show: {
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 2,
      ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

  return (
    <div className="home flex flex-row w-[100%] justify-around items-center">
      <div className="left text-white w-[50%]">
        <div className="intro-content flex flex-col">
          <span className="name text-5xl font-opensans p-2 text-pink-300">
            <strong>Hi, This is Eisha</strong>
          </span>
          <span className="prof text-3xl font-opensans font-semibold text-blue-400">
            I am a
            <Typewriter
              options={{
                strings: [
                  'Web Developer',
                  'Tech Enthusiast',
                  'Cricket Lover',
                  'Programmer',
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </span>
          <span className="intro-text text-center text-xl p-2 text-pink-200">
            From crafting responsive user interfaces to optimizing server-side
            performance, I thrive in the dynamic world of web development. Take a
            peek at my resume below and if you like what you see, drop me a
            message using the contact form—let's create something amazing together!
          </span>
        </div>
        <div className="button-div flex flex-row justify-center p-4 gap-4">
          <div className="btn1 flex flex-row gap-2 border-2 border-white rounded-3xl bg-pink-500 p-3 hover:bg-blue-400">
            <div className="btn">
              <a href="#form-page"><button>Contact Me</button></a>
            </div>
            <div className="icon">
              <CiMail size={24} />
            </div>
          </div>
          <div className="btn2 flex flex-row gap-2 border-2 border-white rounded-3xl bg-pink-500 p-3 hover:bg-blue-400">
            <div className="">
              <button>My Resume</button>
            </div>
            <div className="">
              <IoMdDownload size={24} />
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="right w-[40%]"
        
      >
        <motion.div className="img1 absolute bottom-[16%]"
        variants={fadeIn()}
        initial="hidden"
        animate="show"
        viewport={{ once: false, amount: 0.3 }}
        >
          <img src={bg} alt="" />
        </motion.div>
        <motion.div className="img2 relative top-[38%] left-[7%]"
        variants={fadeIn()}
        initial="hidden"
        animate="show"
        viewport={{ once: false, amount: 0.3 }}
        >
          <img src={profile} alt="" />
        </motion.div> 
      </motion.div> 
      
    </div>
  );
}

export default Home;
