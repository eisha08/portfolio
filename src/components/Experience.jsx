import React from "react";
import laptop from "../assets/laptop.png";
function Experience() {
  return (
    <div className='h-[80vh]'>
        <div className="text-pink-300 text-4xl font-semibold py-8 text-start pl-20">
            Experience
        </div>
      <div className="flex flex-row justify-around items-center">
        <div className="left pl-8">
        <img className="h-[550px] w-[750px]" src={laptop} alt="" />
        </div>
        <div className="right py-4 flex flex-col gap-y-6">
            <div className="flex flex-col  hover:opacity-[0.7] cursor-pointer py-6 border-2 border-purple-700 rounded-lg bg-gradient-to-r from-[#0d1224] to-[#0a0d37] ">
            <div className="px-4 text-left text-pink-300">
                <span className="text-3xl font-bold py-4">SnackBae  </span><span className="text-lg py-4">(Feb 2024-March 2024)</span>
            </div>
            <div className="text-xl text-left px-4 text-white">
                <li>Interned as a Frontend Developer.</li>
                <li>Developed the client side UI of the website using React and TailwindCSS.</li>
            </div>
            </div>
            <div className="flex flex-col py-6 hover:opacity-[0.7] cursor-pointer  border-2 border-purple-700 rounded-lg bg-gradient-to-r from-[#0d1224] to-[#0a0d37]">
             <div className="px-4 text-left text-pink-300">
                <span className="text-3xl font-bold py-4" >AiXchange</span><span className="text-lg py-4" >(Jan 2023-March 2023)</span>
             </div>
             <div className="text-xl text-left px-4 text-white">
                <li>Interned as a Frontend Developer.</li>
                <li>Styled the the client side website using HTML,CSS,Bootstrap.</li>
             </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Experience;