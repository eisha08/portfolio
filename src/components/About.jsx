import React from "react";
import code from "../assets/code.png";
import { motion } from "framer-motion";
import {useInView} from 'react-intersection-observer';
function About() {
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
  const[ref]=useInView({
    threshold:0.5,
  });

  return (
    <div className="about h-[100vh] pt-24" ref={ref}>
    <motion.div className="div "
        variants={fadeIn()}
        initial="hidden"
        animate="show"
        viewport={{ once: false, amount: 0.3 }}
    >
      <div className="text-pink-300 text-3xl font-semibold py-14 text-start px-12">
         About me
      </div>
      <div className="flex flex-row justify-around">
        <div
        //   className="div"
        //   variants={fadeIn()}
        //   initial="hidden"
        //   animate="show"
        //   viewport={{ once: false, amount: 0.3 }}
        >
          <img className="h-[500px] w-[500px]" src={code} alt="" />
        </div>
        <div
          className="h-[60vh] w-[50vw] flex   text-xl text-left"
        //   variants={fadeIn()}
        //   initial="hidden"
        //   animate="show"
        //   viewport={{ once: false, amount: 0.3 }}
        >
          <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
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
            <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
              <code className="font-mono text-xs md:text-sm lg:text-base">
                <div className="blink">
                  <span className="mr-2 text-pink-500">const</span>
                  <span className="mr-2 text-white">coder</span>
                  <span className="mr-2 text-pink-500">=</span>
                  <span className="text-gray-400">{"{"}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                  <span className="text-gray-400">{`'`}</span>
                  <span className="text-amber-300">Eisha Kumari</span>
                  <span className="text-gray-400">{`',`}</span>
                </div>
                <div className="ml-4 lg:ml-8 mr-2">
                  <span className=" text-white">skills:</span>
                  <span className="text-gray-400">{`['`}</span>
                  <span className="text-amber-300">ReactJS</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">NodeJS</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">ExpressJS</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">MongoDB</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">SQL</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Java</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">TailwindCSS</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">HTML,CSS</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">EJS</span>
                  <span className="text-gray-400">{"'],"}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">
                    hardWorker:
                  </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">
                    quickLearner:
                  </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">
                    problemSolver:
                  </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                    hireable:
                  </span>
                  <span className="text-orange-400">function</span>
                  <span className="text-gray-400">{"() {"}</span>
                </div>
                <div>
                  <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
                    return
                  </span>
                  <span className="text-gray-400">{`(`}</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">hardWorker</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">problemSolver</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">skills.length</span>
                  <span className="mr-2 text-amber-300">&gt;=</span>
                  <span className="text-orange-400">5</span>
                </div>
                <div>
                  <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
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
