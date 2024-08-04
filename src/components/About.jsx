import React from "react";
import code from "../assets/code.png";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function About({ theme }) {
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
  const [ref] = useInView({
    threshold: 0.5,
  });

  const textColor = theme === 'dark' ? 'text-pink-300' : 'text-purple-700';
  const containerBg = theme === 'dark' ? 'bg-gradient-to-r from-[#0d1224] to-[#0a0d37]' : 'bg-blue-200';
  const borderColor = theme === 'dark' ? 'border-[#1b2c68a0]' : 'border-gray-300';

  const codeTextColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const keywordColor = theme === 'dark' ? 'text-pink-500' : 'text-blue-600';
  const stringColor = theme === 'dark' ? 'text-amber-300' : 'text-green-600';
  const booleanColor = theme === 'dark' ? 'text-orange-400' : 'text-red-600';
  const variableColor = theme === 'dark' ? 'text-cyan-400' : 'text-purple-600';
  const operatorColor = theme === 'dark' ? 'text-amber-300' : 'text-indigo-600';

  return (
    <div className={`about h-[100vh] pt-24 `} ref={ref}>
      <motion.div
        className="div"
        variants={fadeIn()}
        initial="hidden"
        animate="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className={`text-4xl font-semibold py-14 text-left pl-10 ${textColor}`}>
          About me
        </div>
        <div className="flex flex-row justify-around">
          <div>
            <img className="h-[500px] w-[500px]" src={code} alt="" />
          </div>
          <div className={`h-[60vh] w-[50vw] flex text-xl text-left ${containerBg} border ${borderColor} rounded-lg`}>
            <div className="relative">
              <div className="flex flex-row">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
              </div>
              <div className="px-4 lg:px-8 py-5">
                <div className="flex flex-row space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-200"></div>
                </div>
              </div>
              <div className="overflow-hidden border-t-[2px] px-4 lg:px-8 py-4 lg:py-8 border-indigo-900">
                <code className={`font-mono text-xs md:text-sm lg:text-base`}>
                  <div className="blink">
                    <span className={`mr-2 ${keywordColor}`}>const</span>
                    <span className={`mr-2 ${codeTextColor}`}>coder</span>
                    <span className={`mr-2 ${keywordColor}`}>=</span>
                    <span className="text-gray-400">{"{"}</span>
                  </div>
                  <div>
                    <span className={`ml-4 lg:ml-8 mr-2 ${codeTextColor}`}>name:</span>
                    <span className="text-gray-400">{`'`}</span>
                    <span className={stringColor}>Eisha Kumari</span>
                    <span className="text-gray-400">{`',`}</span>
                  </div>
                  <div className="ml-4 lg:ml-8 mr-2">
                    <span className={` ${codeTextColor}`}>skills:</span>
                    <span className="text-gray-400">{`['`}</span>
                    <span className={stringColor}>ReactJS</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className={stringColor}>NodeJS</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className={stringColor}>ExpressJS</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className={stringColor}>MongoDB</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className={stringColor}>SQL</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className={stringColor}>Java</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className={stringColor}>TailwindCSS</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className={stringColor}>HTML,CSS</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className={stringColor}>EJS</span>
                    <span className="text-gray-400">{"'],"}</span>
                  </div>
                  <div>
                    <span className={`ml-4 lg:ml-8 mr-2 ${codeTextColor}`}>
                      hardWorker:
                    </span>
                    <span className={booleanColor}>true</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className={`ml-4 lg:ml-8 mr-2 ${codeTextColor}`}>
                      quickLearner:
                    </span>
                    <span className={booleanColor}>true</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className={`ml-4 lg:ml-8 mr-2 ${codeTextColor}`}>
                      problemSolver:
                    </span>
                    <span className={booleanColor}>true</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className={`ml-4 lg:ml-8 mr-2 ${variableColor}`}>
                      hireable:
                    </span>
                    <span className={keywordColor}>function</span>
                    <span className="text-gray-400">{"() {"}</span>
                  </div>
                  <div>
                    <span className={`ml-8 lg:ml-16 mr-2 ${keywordColor}`}>
                      return
                    </span>
                    <span className="text-gray-400">{`(`}</span>
                  </div>
                  <div>
                    <span className={`ml-12 lg:ml-24 ${variableColor}`}>this.</span>
                    <span className={`mr-2 ${codeTextColor}`}>hardWorker</span>
                    <span className={operatorColor}>&amp;&amp;</span>
                  </div>
                  <div>
                    <span className={`ml-12 lg:ml-24 ${variableColor}`}>this.</span>
                    <span className={`mr-2 ${codeTextColor}`}>problemSolver</span>
                    <span className={operatorColor}>&amp;&amp;</span>
                  </div>
                  <div>
                    <span className={`ml-12 lg:ml-24 ${variableColor}`}>this.</span>
                    <span className={`mr-2 ${codeTextColor}`}>skills.length</span>
                    <span className={`mr-2 ${operatorColor}`}>&gt;=</span>
                    <span className={booleanColor}>5</span>
                  </div>
                  <div>
                    <span className={`ml-8 lg:ml-16 mr-2 text-gray-400`}>{`);`}</span>
                  </div>
                  <div>
                    <span className={`ml-4 lg:ml-8 text-gray-400`}>{`};`}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">{`};`}</span>
                  </div>
                </code>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
