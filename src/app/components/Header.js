"use client"
import LocationSearch from "@/app/components/LocationSearch";
import React from "react";
import GoogleTranslator from "@/app/components/GoogleTranslator";
import Link from "next/link";  // Import Next.js Link for routing

const Header = () => {
  return (
    <div>
      <div className="flex flex-col items-center bg-[#FF6AAB] p-1 py-3 sm:p-3 shadow-lg w-full">
        <div className="w-full flex justify-between position">
          <div className="flex gap-2 lg:gap-4">
            <Link
              href="/"
              className="bg-[#C01761] text-white sm:font-bold hover:cursor-pointer px-2 py-2 rounded-full shadow-lg"
            >
              Stri-Sakhi
            </Link>
            <LocationSearch />
          </div>

          <GoogleTranslator />
          {/* <div className="flex space-x-2 rounded-full">
            <Link href="/" className="bg-[#C01761] text-white px-4 py-2 rounded-full text-sm shadow-lg">
              General
            </Link>
            <Link href="/doctors" className="bg-[#C01761] text-white px-4 py-2 rounded-full text-sm shadow-lg">
              Doctors
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
