import LocationSearch from "@/components/LocationSearch";
import React from "react";

const Header: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col  items-center bg-[#FF6AAB] p-4 shadow-lg w-full">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
