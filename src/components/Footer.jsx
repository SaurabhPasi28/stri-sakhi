import React from 'react';
import { FaTwitter, FaYoutube, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-4 bg-slate-300 border-t border-gray-300 flex-wrap md:justify-between">

      <div className="flex flex-col items-center">
        <p className="pb-4 font-bold">Follow Sakhi</p>
        <div className="flex space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-2xl p-2 rounded-full border-2 border-gray-500 hover:border-blue-500 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-2xl p-2 rounded-full border-2 border-gray-500 hover:border-blue-500 transition"
          >
            <FaYoutube />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-2xl p-2 rounded-full border-2 border-gray-500 hover:border-blue-500 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-2xl p-2 rounded-full border-2 border-gray-500 hover:border-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-2xl p-2 rounded-full border-2 border-gray-500 hover:border-blue-500 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <a href="#" className="hover:underline font-bold">About</a>
        <a href="#" className="hover:underline font-bold">Terms and Conditions of use</a>
      </div>

      <div className="flex flex-col items-center">
        <p className="pb-4 font-bold">Get The Sakhi App</p>
        <div className="flex space-x-4">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Play Store"
            className="hover:text-blue-500 transition"
          >
            <img
              src="Google_Play_Store_badge_EN.svg"
              alt="Google Play Store"
              className="w-32"
            />
          </a>
          <a
            href="https://www.apple.com/in/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Apple App Store"
            className="hover:text-blue-500 transition"
          >
            <img
              src="App_Store_Badge_EN.svg"
              alt="Apple App Store"
              className="w-32"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
