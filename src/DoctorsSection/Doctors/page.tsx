// src/app/DoctorSection/Doctors/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import DoctorCard from '../Components/DoctorCard'; // Adjust path as needed
import Header from '../Components/Header'

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  image: string;
  rating: number;
  link: string; // Include a link field
}

const Doctors: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch('/api/doctors');
        if (!res.ok) {
          throw new Error('Failed to fetch doctors');
        }
        const data = await res.json();

        // Map data to include links
        const updatedDoctors = data.map((doctor: Doctor) => ({
          ...doctor,
          link: `/doctors/${doctor.id}`, // Creating a link using doctor ID
        }));

        setDoctors(updatedDoctors);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="container max-w-full mb-10">
      {/* <Header/> */}
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
