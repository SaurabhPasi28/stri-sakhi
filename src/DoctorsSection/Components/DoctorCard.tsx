import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link"; // Import Link for routing
import { useRouter } from "next/navigation";
import { FaRegUser } from "react-icons/fa";

interface DoctorCardProps {
  doctor: {
    id: number;
    name: string;
    specialization: string;
    picture: string;
    rating: number;
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
    <div
      className="bg-[#C01761] shadow-md rounded-lg p-4 max-w-xs text-center transform transition-all duration-300 hover:scale-105 hover:border-2 hover:border-blue-500 cursor-pointer w-60"
      onClick={goToDoc}
    >
      {/* Doctor Image */}
      <div className="w-full h-48 relative">
        {picture ? (
          <Image
            src={picture}
            alt={`Picture of ${name}`}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        ) : (
          <FaRegUser className="mx-auto" size={100}/>
        )}
      </div>

      {/* Doctor Name */}
      <h3 className="mt-4 text-xl font-semibold">{name}</h3>

      {/* Specialization */}
      <p className="text-white">{specialization}</p>

      {/* Rating Section */}
      <div className="flex justify-center items-center mt-4">{stars}</div>
    </div>
  );
};

export default DoctorCard;
