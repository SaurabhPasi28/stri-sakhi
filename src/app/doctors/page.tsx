// src/app/DoctorSection/Doctors/page.tsx
'use client';

import DoctorCard from '@/DoctorsSection/Components/DoctorCard';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BACKEND_URL from '@/store/constants'


interface Doctor {
  id: number;
  name: string;
  specialization: string;
  picture: string;
  rating: number;
  
}

const Doctors: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  
  useEffect(() => {
    const fetchDoctors = async () => {
      console.log("fetchDoctors---------**********8")
      try {
        const res = await axios.get(`${BACKEND_URL}/doctors/all/`);
        
        console.log("This is responst printing: ", res.data.data)
        setDoctors(res.data.data)
        
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchDoctors();
  },[]);

  return (
    <div className="container max-w-full mb-10">
      {/* Heading Section */}
      <div className="m-10 ml-20">
        <h1 className="text-3xl font-bold text-gray-800 text-left ">Doctors :- </h1>
      </div>

      {/* Doctor Cards Section */}
      <div className="flex flex-wrap justify-center gap-14">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
