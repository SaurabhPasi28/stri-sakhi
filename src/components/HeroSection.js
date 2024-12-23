'use client'
import React, { useState } from 'react';
import Link from 'next/link';  // Import Next.js Link for routing

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-blue-200 h-20 px-4 flex items-center justify-between relative">
      {/* Left Side Text */}
      <div className="text-center w-full md:w-2/5">
        <i className="text-lg md:text-2xl">
          Don't suffer in silence, let's talk about it!
        </i>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex flex-col items-center justify-center cursor-pointer p-2" onClick={toggleMenu}>
        {/* Toggle between hamburger and X icon */}
        {isMenuOpen ? (
          <span className="text-2xl text-blue-500">&#10005;</span> // X icon
        ) : (
          <>
            <span className="w-6 h-0.5 bg-blue-500 mb-1"></span>
            <span className="w-6 h-0.5 bg-blue-500 mb-1"></span>
            <span className="w-6 h-0.5 bg-blue-500"></span>
          </>
        )}
      </div>

      <ul
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row items-center gap-4 p-4 md:p-0 md:gap-6 bg-blue-100 md:bg-transparent absolute top-20 right-0 md:static md:top-auto transition duration-300 ease-in-out z-10`}
        style={{ width: '200px' }} // Set fixed width for the menu
      >
        <li className="m-0 relative group">
          <Link
            href="/Health"
            className="text-lg md:text-xl text-blue-500 no-underline relative inline-block px-2 py-1"
          >
            Health
            <span className="block absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li className="m-0 relative group">
          <Link
            href="/LifeStyle"
            className="text-lg md:text-xl text-blue-500 no-underline relative inline-block px-2 py-1"
          >
            Lifestyle
            <span className="block absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeroSection;
