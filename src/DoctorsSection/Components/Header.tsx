import LocationSearch from "@/components/LocationSearch";
import { FaRegUser } from "react-icons/fa";
import React from "react";
import GoogleTranslator from "@/components/GoogleTranslator";

const Header: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col  items-center bg-[#FF6AAB] p-3 shadow-lg w-full">
        <div className="w-full flex justify-between">
          <div className="flex gap-2 lg:gap-4">
            <a
              href="/"
              className="bg-[#C01761]  text-white font-bold hover:cursor-pointer px-6 py-2 rounded-full shadow-lg"
            >
              SAKHI
            </a>
            <LocationSearch />
          </div>

          <div className="flex space-x-2  rounded-full">
            <a href="/" className="bg-[#C01761] text-white px-4 py-2 rounded-full text-sm shadow-lg">
              General
            </a>
            <a href="/doctors" className=" bg-[#C01761] text-white px-4 py-2 rounded-full text-sm shadow-lg">
              Doctors
            </a>
            <a href="" className="p-2 bg-[#C01761] rounded-full text-2xl text-white">
            <FaRegUser />
            </a>
          </div>
        </div>
      </div>
          <GoogleTranslator />
    </div>
  );
};

export default Header;
