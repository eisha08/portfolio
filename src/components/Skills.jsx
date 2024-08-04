import React from 'react';
import './skill.css';
import SkillCard from './SkillCard';
import { FaRegFileCode } from "react-icons/fa";
import react from '../assets/react.png';
import git  from '../assets/git.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/js.png';
import bootstrap from '../assets/bootstrap.png';
import java from '../assets/java.png';
import sql  from '../assets/sql.png';
import nodejs from '../assets/NodeJS Icon.png';
import mongo from '../assets/MongoDB.png';
import tailwind from '../assets/Tailwind CSS Icon.png';

const skills = [
  { name: 'ReactJs', img: react },
  { name: 'Git', img: git },
  { name: 'HTML', img: html },
  { name: 'CSS', img: css },
  { name: 'JavaScript', img: javascript },
  { name: 'Bootstrap', img: bootstrap},
  { name: 'JAVA', img: java },
  { name: 'MongoDB', img: mongo },
  { name: 'SQL', img: sql },
  { name: 'TailwindCSS', img: tailwind },
  { name: 'NodeJS', img: nodejs },
  { name: 'Express', img: javascript },
  { name: 'EJS', img: javascript },
];

function App({theme}) {
  return (
    <div id='skills' className="skills-section">
        <div className="div flex flex-row ">
        <div className={` ${theme==='dark'?'text-pink-300':'text-purple-700'} text-4xl font-semibold py-14 text-start pl-8`}>
        Skills
        </div>
        <div className="div py-14 px-2">
            <FaRegFileCode size={36} color={theme === 'dark' ? 'white' : 'purple'}/>
        </div>
        </div>
        
     
      <div className="skills-container">
        <div className="scroll">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
          {/* Repeat the skill cards to create a continuous effect */}
          {skills.map((skill, index) => (
            <SkillCard key={index + skills.length} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
