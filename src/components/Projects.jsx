// src/App.js
import React from 'react';
import Card from './Card';
// import tacoRecipeImage from './assets/taco-recipe.jpg';  // example image path
// import signUpFormImage from './assets/sign-up-form.jpg';  // example image path
// import qrGeneratorImage from './assets/qr-generator.jpg';  // example image path
import edu from '../assets/eduupdates.png';
import profile  from '../assets/profile.png';
import todo from '../assets/todo.png';
import blog from '../assets/blog.png';
import musica from '../assets/musica.png';

function Projects({theme}) {
  const projects = [
    {
      image: blog,
      title: "AgonyMother",
      description: "Agony Mother is a full-stack website designed to be a supportive platform where anyone can share their day-to-day thoughts and feelings. As a good listener, Agony Mother provides a safe space for users to express themselves freely. Whether you're venting about a tough day or sharing a joyful moment, Agony Mother is here to listen and offer a sense of community and understanding",
      url:"https://github.com/eisha08/blogSite"
    },
    {
      image: todo,
      title: "DayBreak",
      description: "Daybreak is a full-stack website designed for users to manage their daily tasks efficiently. With full authentication, users can add, prioritize, and keep track of their tasks in a secure and organized manner. Daybreak ensures that your to-do list is tailored to your needs, helping you stay productive and on top of your responsibilities.",
      url:"https://github.com/eisha08/DayBreak"
    },
    {
      image: edu,
      title: "EduUpdates",
      description: "EduUpdate is a full-stack website that keeps you informed about new courses in your areas of interest. Upon logging in, you'll receive notifications about newly launched courses that match the preferences you specified in your profile. Stay up-to-date with the latest educational opportunities tailored just for you with EduUpdate."
    },
    {
        image: musica,
        title: "Musica", 
        description:"Musica is a frontend website dedicated to showcasing the music of underground rappers. Explore and enjoy a diverse range of songs from emerging artists, all in one place with Musica.",
        url:"https://github.com/eisha08/Music-Player"
        
    },
    {
        image: profile,
        title: "My Portfolio", 
        description: "My Portfolio Website is a frontend project that showcases my skills, projects, and experiences as a developer. Visitors can learn about my background, view my resume, and contact me for collaboration or job opportunities. This portfolio provides a comprehensive and engaging overview of my professional journey and capabilities.",
        url:"https://github.com/eisha08/portfolio"

    },


  ];

  return (
    <div className="">
      <div id='project' className={`text-left pl-10 font-bold text-4xl ${theme === 'dark' ? 'text-pink-300' : 'text-purple-700'} py-10`}>
        My Work
      </div>
      <div className="flex flex-wrap justify-center items-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <Card key={index} image={project.image} title={project.title} description={project.description} url={project.url} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
