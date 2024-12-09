'use client'
import React from 'react';
import HealthyLivingComponent from '@/components/CommonDataRender';
import HealthyLivingData from '@/APICalls/HealthyTeen.jsx'
import useLocationStore from '@/store/locationStore';

const App = () => {
  const city = useLocationStore((state) => state.city);
  console.log("-----------------------",city);
  return (
    <div className="w-full">
      <HealthyLivingComponent props={HealthyLivingData} />
    </div>
  );
};

export default App;
