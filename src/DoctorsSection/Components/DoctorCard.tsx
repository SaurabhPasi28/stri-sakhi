import React from "react";
import Image from "next/image";
import { FaStar, FaUserAlt } from "react-icons/fa";
import Link from "next/link"; // Import Link for routing
import { useRouter } from "next/navigation";
import { FaRegUser } from "react-icons/fa";
import defaultImage from '@/public/defaultImage.jpg'

interface DoctorCardProps {
  doctor: {
    id: number;
    name: string;
    specialization: string;
    picture: string;
    rating: number;
    experience: number;
    location: string;

  };
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const router = useRouter();
  const { id, name, specialization, picture, rating } = doctor;

  const goToDoc = () => {
    router.push(`/doctors/${id}`);
  };

  // Generate stars based on rating
  const stars = Array.from({ length: 5 }, (_, i) => (
    <FaStar key={i} className={i < rating ? "text-yellow-400" : "text-white"} />
  ));

  return (
    <div>
      <div className="w-64 bg-pink-700 p-4 rounded-3xl hover:scale-[101%] duration-300 cursor-pointer" onClick={goToDoc}>
        {
          doctor.picture ? <img src={doctor.picture} className="w-56 h-56 object-cover rounded-3xl" alt="" /> : <img src="/defaultImage.jpg" className="w-56 h-56 object-cover rounded-3xl" alt="" />
        }

        <p className="font-bold text-white text-xl mt-2">{doctor.name}</p>
        <p className="font-semibold text-white italic">Specialization : {doctor.specialization}</p>
        {/* <p className="font-semibold text-white italic">Location : {doctor.location}</p> */}
        <div className="flex gap-1 items-center font-semibold text-white">Rating : {stars}</div>
        
      </div>
    </div>
  );
};

export default DoctorCard;
