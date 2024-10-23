import React from 'react';

const LoginPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <button className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition duration-300 mb-4">
          Login with Gmail
        </button>
        <hr className="mb-4" />
        <form className="space-y-4 w-full">
          <label className="block">
            <span className="text-gray-700">Full Name:</span>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </label>
          <label className="block">
            <span className="text-gray-700">Email or Phone Number:</span>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </label>
          <label className="block">
            <span className="text-gray-700">Date of Birth:</span>
            <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </label>
          <button type="submit" className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition duration-300">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
