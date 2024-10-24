import React from 'react';
import PropTypes from 'prop-types'; // For type-checking

const FrontCard = ({ imageSrc, altText, description, link }) => {
  return (
    <a
      href={link}
      // target="_blank"
      rel="noopener noreferrer"
      className="w-60 border border-gray-300 bg-zinc-400 rounded-lg overflow-hidden flex flex-col items-center shadow-md text-current transition-transform duration-300 ease-in-out hover:border-blue-500 hover:scale-105 mb-8"
    >
      <div className="w-full h-4/5 flex items-center overflow-hidden">
        <img src={imageSrc} alt={altText} className="w-full object-cover" />
      </div>
      <div className="p-2 text-center font-semibold text-gray-800">
        <p>{description}</p>
      </div>
    </a>
  );
};

FrontCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FrontCard;
