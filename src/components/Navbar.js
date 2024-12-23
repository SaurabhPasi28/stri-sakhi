// 'use client'
// import React, { useState } from 'react';
// import LoginPopup from './LoginPopup';
// import LocationSearch from './LocationSearch';

// const Navbar = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const togglePopup = () => {
//     setIsPopupOpen(!isPopupOpen);
//   };

//   return (
//     <>
//       <nav className="flex justify-between items-center py-3 px-8 bg-pink-400/80 shadow-md h-16 font-roboto">
//         <LocationSearch />
//         <a className="flex items-center" href="/">
//           {/* <img src="logo.png" alt="Sakhi Logo" className="w-11 h-11 mr-3" /> */}
//           <span className="text-2xl font-bold text-gray-800">Sakhi</span>
//         </a>
//         <div className="flex items-center ">
//           <button
//             className="mr-6 px-5 py-2 bg-blue-500 text-white rounded-full font-bold transition duration-300 ease-in-out hover:bg-blue-700"
//             onClick={togglePopup}
//           >
//             Login
//           </button>
//           <select className="px-4 py-2 rounded-full border border-blue-500 bg-gray-100 text-gray-800 cursor-pointer focus:outline-none focus:border-blue-700">
//             <option value="en">English</option>
//             <option value="hi">Hindi</option>
//           </select>
//         </div>
//       </nav>
//       <LoginPopup isOpen={isPopupOpen} onClose={togglePopup} />
//     </>
//   );
// };

// export default Navbar;
