"use client"
import LocationSearch from "@/components/LocationSearch";
import { FaRegUser } from "react-icons/fa";
import React from "react";
import GoogleTranslator from "@/components/GoogleTranslator";
import Link from "next/link";  // Import Next.js Link for routing

const Header = () => {
  return (
    <div>
      <div className="flex flex-col items-center bg-[#FF6AAB] p-3 shadow-lg w-full">
        <div className="w-full flex justify-between">
          <div className="flex gap-2 lg:gap-4">
            <Link
              href="/"
              className="bg-[#C01761] text-white font-bold hover:cursor-pointer px-6 py-2 rounded-full shadow-lg"
            >
              SAKHI
            </Link>
            <LocationSearch />
          </div>

          <div className="flex space-x-2 rounded-full">
            <Link href="/" className="bg-[#C01761] text-white px-4 py-2 rounded-full text-sm shadow-lg">
              General
            </Link>
            <Link href="/doctors" className="bg-[#C01761] text-white px-4 py-2 rounded-full text-sm shadow-lg">
              Doctors
            </Link>
          </div>
        </div>
      </div>
      <GoogleTranslator />
    </div>
  );
};

export default Header;
