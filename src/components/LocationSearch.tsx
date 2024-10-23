"use client"

import useGeoLocation from '@/hooks/useGeolocation';
import useLocationStore from '@/store/locationStore';
import axios from 'axios';
import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const LocationSearch: React.FC = () => {

  const location = useGeoLocation()
  const city = useLocationStore((state) => state.city);
  const setCity = useLocationStore((state) => state.setCity);
  console.log("Location:", location);

  useEffect(() => {
    const fetchCityName = async () => {
      
      if (location.loaded && !location.error) {
        const { lat, lng } = location.coordinates;
        // latitude and longitude of Lucknow (for development purpose only)
        // const lat = 26.8496;
        // const lng = 81.0072;

        try {
          const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
          );

          const cityName = response.data.address.city ||
                           response.data.address.county || 
                           response.data.address.state_district ||
                           "City not found";
                           //setting it to district cuz api is sometimes returning city and county but not always. 
          // console.log(response.data.address)
          setCity(cityName);
        //   console.log(cityName)
        } catch (error) {
          console.error("Error fetching city name:", error);
          setCity("City not available");
        }
      }
    };

    fetchCityName();
  }, [location,setCity]);

  const renderLocation = () => {
    if(!location.loaded) {
      return "Loading..."
    }
    if(location.error) {
      return "Location not available"
    }

   return city || "Loading..."

  }

  return (
    <div className="flex items-center border border-pink-500 shadow-lg rounded-full overflow-hidden max-w-full">
      <div className="flex items-center px-4 py-2 bg-gray-100 border-r border-gray-400">
        <FaMapMarkerAlt className="text-gray-600 mr-2" />
        <span className="text-gray-700">{renderLocation()}</span>
      </div>
      <div className="flex items-center flex-grow px-4 py-2 bg-gray-100">
        <FaSearch className="text-gray-600 mr-2" />
        <input
          type="text"
          placeholder="Search for Hospitals, Clinics and more"
          className="w-full focus:outline-none placeholder:text-neutral-700 text-neutral-800 bg-gray-100"
        />
      </div>
    </div>
  );
};

export default LocationSearch;