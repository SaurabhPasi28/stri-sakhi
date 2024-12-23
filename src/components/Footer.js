import React from 'react';
import { FaTwitter, FaYoutube, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-4 bg-slate-300 border-t border-gray-300 flex-wrap md:justify-between">
      {/* Social Media Links */}
      <div className="flex flex-col items-center">
        <p className="pb-4 font-bold">Follow Sakhi</p>
        <div className="flex space-x-2">
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-4xl p-2 rounded-full border-2 border-gray-500 hover:border-blue-500 transition" />
          </Link>
          <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="text-4xl p-2 rounded-full border-2 border-gray-500 hover:border-blue-500 transition" />
          </Link>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="text-4xl p-2 rounded-full border-2 border-gray-500 hover:border-blue-500 transition" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-4xl p-2 rounded-full border-2 border-gray-500 hover:border-blue-500 transition" />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-4xl p-2 rounded-full border-2 border-gray-500 hover:border-blue-500 transition" />
          </Link>
        </div>
      </div>

      {/* About & Terms Links */}
      <div className="flex flex-col items-center space-y-2">
        <Link href="#" className="hover:underline font-bold">
          About
        </Link>
        <Link href="#" className="hover:underline font-bold">
          Terms and Conditions of use
        </Link>
      </div>

      {/* App Download Links */}
      <div className="flex flex-col items-center">
        <p className="pb-4 font-bold">Get The Sakhi App</p>
        <div className="flex space-x-4">
          <Link href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" aria-label="Google Play Store" className="hover:text-blue-500 transition">
            <Image
              src="https://www.connectedly.org/wp-content/uploads/2023/12/Google-Play.jpg"
              alt="Google Play Store"
              width={128} // Provide width and height
              height={40}
            />
          </Link>
          <Link href="https://www.apple.com/in/app-store/" target="_blank" rel="noopener noreferrer" aria-label="Apple App Store" className="hover:text-blue-500 transition">
            <Image
              src="https://www.connectedly.org/wp-content/uploads/2023/12/OIP.jpg"
              alt="Apple App Store"
              width={128} // Provide width and height
              height={40}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
