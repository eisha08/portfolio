import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card lg:h-[25vh] lg:w-[18vw] flex flex-col items-center justify-center md:h-[20vh] md:w-[30vw] sm:h-[18vh] sm:w-[40vw] xs:h-[15vh] xs:w-[50vw]">
      <div className="mb-2">
        <img className="max-w-[50px] md:max-w-[40px] sm:max-w-[30px] xs:max-w-[25px]" src={skill.img} alt={skill.name} />
      </div>
      <div className="text-3xl font-semibold font-opensans md:text-2xl sm:text-xl xs:text-lg">
        <p>{skill.name}</p>
      </div>
    </div>
  );
};

export default SkillCard;
