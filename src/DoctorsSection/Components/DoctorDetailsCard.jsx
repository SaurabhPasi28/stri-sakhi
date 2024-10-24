import React from 'react';
import style from '@/Css/scrollbar.module.css'

const DoctorDetailsCard = (doctor) => {
  return (
    <div>
      {/* Inline custom scrollbar styling */}
      <style>{`
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background-color: #FFADD1;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #C01761;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: #FF6AAB;
        }
      `}</style>

      <div className='flex flex-col justify-center items-center bg-[#FFADD1]'>
        <div className="flex flex-col md:flex-row max-w-4xl bg-[#C01761] rounded-lg p-4 text-white mt-8">
          {/* Doctor image and basic info */}
          <div className="md:w-1/3 flex flex-col items-center">
            <img
              src={doctor.picture}
              alt={doctor.name}
              className="w-40 h-40 object-cover rounded-full"
            />
            <h2 className="text-xl font-bold mt-4">{doctor.name}</h2>
            <p className="text-gray-200 text-center">{doctor.specialization}</p>
            <div className="flex items-center mt-2">
              <p className="mr-2">Rating:</p>
              {[...Array(doctor.rating)].map((_, i) => (
                <span key={i} className="text-yellow-500">⭐</span>
              ))}
            </div>
          </div>

          {/* Degrees, Certificates, and Awards */}
          <div className="md:w-2/3 mt-6 md:mt-0 md:ml-6">
            <h3 className="font-semibold text-lg mb-2">Degrees, Certificates and Awards:</h3>
            {/* <div className="flex space-x-2 overflow-x-auto scrollbar-thin scrollbar-thumb-[#C01761] scrollbar-track-[#FFADD1]">
              {doctor.degreesCertificatesAwards.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-pink-400 rounded-lg p-4 min-w-[120px] flex items-center justify-center text-black h-40"
                >
                  {item}
                </div>
              ))}
            </div> */}

            <div className="flex justify-between">
              {/* Address section */}
              {/* <ul className="list-disc pl-5">
                <h3 className="font-semibold text-lg mt-4">Address:</h3>
                <li>Street: {doctor.address.street}</li>
                <li>Pin: {doctor.address.pin}</li>
                <li>City: {doctor.address.city}</li>
                <li>State: {doctor.address.state}</li>
                <li>Phone number: {doctor.address.phone}</li>
              </ul> */}

              {/* Map placeholder */}
              <div className="mt-4">
                <h3 className="font-semibold text-lg">Location:</h3>
                <div className="w-60 h-32 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-gray-700">Map Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
          {/* Book an Appointment Button */}
          <button className="m-5 bg-[#C01761] text-white px-6 py-2 rounded-full hover:bg-pink-400">
            Book an Appointment
          </button>
      </div>
    </div>
  );
};

export default DoctorDetailsCard;
