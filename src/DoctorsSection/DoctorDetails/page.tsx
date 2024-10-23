import React from 'react';
import DoctorDetailsCard from '../Components/DoctorDetailsCard';
import Header from '../Components/Header'

const DoctorDetailPage: React.FC = () => {
  return (
    <div className='w-full'>
      {/* <h1 className="text-3xl font-bold mb-8 text-center">Doctor Details</h1> */}
      <Header/>
      <DoctorDetailsCard />
    </div>
  );
};

export default DoctorDetailPage;
