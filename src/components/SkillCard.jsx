import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card h-[25vh] w-[18vw] flex flex-col items-center justify-center">
        <div className="">
        <img src={skill.img} alt={skill.name} />
        </div>
      <div className=" text-3xl font-semibold font-opensans">
      <p>{skill.name}</p>
      </div>
      
    </div>
  );
};

export default SkillCard;
