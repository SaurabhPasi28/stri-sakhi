import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const HomeCard = ({ title, imageUrl, description, linkUrl }) => {
  return (
    <div className="relative w-[280px] m-4 mt-8 mb-8"> {/* Fixed width of the card */}
      {/* Card Head */}
      <div className="flex justify-center items-center absolute top-[-20px] left-1/2 transform -translate-x-1/2 bg-blue-600 px-3 py-1 rounded-md shadow-md z-10 text-white font-medium">
        {title}
      </div>
      {/* Card Body */}
      <div className="w-[280px] h-[320px] border border-gray-300 bg-[#F0F8FF] rounded-lg overflow-hidden flex flex-col transition-transform duration-300 ease-in-out hover:border-3 hover:border-blue-600 hover:scale-105">
        {/* Card Image */}
        <div className="flex-2 overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-70% object-cover" />
        </div>
        {/* Card Text */}
        <div className="flex-1 p-4 flex flex-col justify-center items-center text-center  text-black">
          <p className="text-lg">{description}</p>
          <a href={linkUrl} className="mt-4 px-4 py-2 bg-blue-600 text-white text-center rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
            More
            <FaArrowAltCircleRight className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
