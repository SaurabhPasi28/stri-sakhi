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
  experience: number;
  location: string;
  
}

const Doctors: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  
  useEffect(() => {
    const fetchDoctors = async () => {
      console.log("fetchDoctors---------**********8")
      try {
        const res = await axios.get(`${BACKEND_URL}/doctors/all/` , { params:{ location: "Una"}});
        
        console.log("This is responst printing: ", res.data.data)
        setDoctors(res.data.data)
        
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchDoctors();
  },[]);

  return (
    <div className="container max-w-full mb-10 py-6 px-10">
      {/* Heading Section */}
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">Doctors</h1>


      {/* Doctor Cards Section */}
      <div className="flex flex-wrap gap-14">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
