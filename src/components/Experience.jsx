import React from "react";
import laptop from "../assets/laptop.png";

function Experience({ theme }) {
  return (
    <div id="experience" className="h-auto lg:h-[80vh] py-8">
      <div
        className={`text-4xl font-semibold pb-8 text-start pl-8 ${
          theme === 'dark' ? 'text-pink-300' : 'text-purple-700'
        }`}
      >
        Experience
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-center">
        <div className="left pl-8 mb-8 lg:mb-0">
          <img
            className="h-[200px] w-[300px] sm:h-[300px] sm:w-[450px] md:h-[400px] md:w-[600px] lg:h-[550px] lg:w-[750px]"
            src={laptop}
            alt=""
          />
        </div>
        <div className="right py-4 flex flex-col gap-y-6">
          <div
            className={`flex flex-col hover:opacity-[0.7] cursor-pointer py-6 border-2 border-purple-700 rounded-lg ${
              theme === 'dark' ? 'bg-gradient-to-r from-[#0d1224] to-[#0a0d37]' : 'bg-pink-200'
            }`}
          >
            <div
              className={`px-4 text-left ${
                theme === 'dark' ? 'text-pink-300' : 'text-purple-700'
              }`}
            >
              <span className="text-2xl md:text-3xl font-bold py-4">
                SnackBae
              </span>
              <span className="text-lg py-4">(Feb 2024-March 2024)</span>
            </div>
            <div
              className={`text-lg md:text-xl text-left px-4 ${
                theme === 'dark' ? 'text-white' : 'text-purple-500'
              }`}
            >
              <li>Interned as a Frontend Developer.</li>
              <li>
                Developed the client side UI of the website using React and
                TailwindCSS.
              </li>
            </div>
          </div>
          <div
            className={`flex flex-col py-6 hover:opacity-[0.7] cursor-pointer border-2 border-purple-700 rounded-lg ${
              theme === 'dark' ? 'bg-gradient-to-r from-[#0d1224] to-[#0a0d37]' : 'bg-pink-200'
            }`}
          >
            <div
              className={`px-4 text-left ${
                theme === 'dark' ? 'text-pink-300' : 'text-purple-700'
              }`}
            >
              <span className="text-2xl md:text-3xl font-bold py-4">
                AiXchange
              </span>
              <span className="text-lg py-4">(Jan 2023-March 2023)</span>
            </div>
            <div
              className={`text-lg md:text-xl text-left px-4 ${
                theme === 'dark' ? 'text-white' : 'text-purple-500'
              }`}
            >
              <li>Interned as a Frontend Developer.</li>
              <li>
                Styled the client side website using HTML, CSS, Bootstrap.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
