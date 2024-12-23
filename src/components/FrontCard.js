import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FrontCard = ({ imageSrc, altText, description, link }) => {
  return (
    <Link href={link} passHref>
      <div
        rel="noopener noreferrer"
        className="w-60 border border-gray-300 bg-zinc-400 rounded-lg overflow-hidden flex flex-col items-center shadow-md text-current transition-transform duration-300 ease-in-out hover:border-blue-500 hover:scale-105 mb-8 cursor-pointer"
      >
        <div className="w-full h-48 flex items-center justify-center overflow-hidden relative">
          <Image
            src={imageSrc}
            alt={altText}
            layout="intrinsic" // Adjust to intrinsic for fixed aspect ratio
            width={240} // Image width (fixed size)
            height={192} // Image height (fixed size)
            className="object-cover"
          />
        </div>
        <div className="p-4 text-center font-semibold text-gray-800">
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default FrontCard;
