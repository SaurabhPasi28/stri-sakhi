import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

const DoctorCard2 = ({ doctor }) => {
  const [isOpen, setOpen] = useState(false);
  const [openImg, setImg] = useState("");
  const openBig = (i) =>{
    setImg(i);
    setOpen(!isOpen);
  }
  return (
    <div className="">
      {isOpen && 
        <div className="w-full h-[100vh] absolute top-0 text-white z-50 flex items-center justify-center">
          <div className="bg-black w-full h-full absolute top-0 opacity-50"></div>
          
          <img className="relative h-[90vh] bg-white" src={openImg}>
          </img>
          <button className="absolute right-10 top-5" onClick={openBig}><IoIosCloseCircle size={50} /></button>

        </div>
      }


      <div className="w-[60vw] mx-auto my-10 rounded-3xl bg-pink-700 flex">
        <div className="p-6 flex flex-col w-[32%]">
          <img
            src={doctor.picture}
            alt={doctor.name}
            className="w-52 h-56 mb-4 object-cover rounded-lg"
          />
          <h2 className="text-xl font-bold text-white">{doctor.name}</h2>
          <h2 className="italic font-semibold text-blue-200">Clinic : {doctor.clinic_name}</h2>
          <p className="text-gray-50 font-semibold">
            Specialization : {doctor.specialization}
          </p>
          <p className="text-gray-50 font-semibold">
            Experience : {doctor.experience}+ years
          </p>
          <div className="flex items-center mt-2">
            <p className="mr-2 text-gray-50 font-semibold">Rating:</p>
            {/* {[...Array(doctor.rating)].map((_, i) => (
              <span key={i} className="text-yellow-500">
                ⭐
              </span>
            ))} */}

            {Array.from({ length: 5 }, (_, i) => (
              <FaStar key={i} className={i < doctor.rating ? "text-yellow-400" : "text-white"} />
            ))}
            
          </div>
        </div>

        <div className="w-[68%] py-6 flex flex-col">
          <div>
            <h3 className="font-bold text-white text-xl mb-2"> 
              Degrees, Certificates and Awards
            </h3>
            <div className="flex space-x-2 overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#FFADD1]">
              <img src={doctor.qualification_doc} onClick={()=>(openBig(doctor.qualification_doc))} className="w-36 h-40 mb-4 object-cover rounded-lg hover:cursor-pointer hover:opacity-90 duration-100" alt="" />
              <img src={doctor.identity_doc} onClick={()=>(openBig(doctor.identity_doc))}  className="w-36 h-40 mb-4 object-cover rounded-lg hover:cursor-pointer hover:opacity-90 duration-100" alt="" />
              <img src={doctor.degree_filename} onClick={()=>(openBig(doctor.degree_filename))}  className="w-36 h-40 mb-4 object-cover rounded-lg hover:cursor-pointer hover:opacity-90 duration-100" alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <div>
              <div className="flex gap-4">
                <h3 className="font-bold text-white text-xl">Address</h3>
                <a target="blank" href={doctor.mapLink} className="bg-white text-neutral-700 font-bold rounded-full shadow-lg w-fit py-1 px-3 hover:scale-[105%] duration-300 flex items-center">
                  <IoLocation size={20} className="mr-1" /> Map
                </a>
              </div>
              <p className="italic font-semibold text-white">{doctor.location}</p>
            </div>

              
            </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard2;
