import React from 'react';

const Card = ({ image, title, description, url }) => {
  return (
    <div className="relative max-w-sm rounded overflow-hidden shadow-lg h-[570px] bg-gray-300">
      <img className="w-full h-[230px] hover:opacity-[0.6] cursor-pointer" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-black">{title}</div>
        <p className="text-gray-700">
          {description}
        </p>
      </div>
      <div className="absolute bottom-2 left-0 right-0 px-6 pt-4 mb-2">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className="bg-pink-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
            View Project
          </button>
        </a>
      </div>
    </div>   
  );
};

export default Card;
