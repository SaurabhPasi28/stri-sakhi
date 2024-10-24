'use client'

import BACKEND_URL from '@/store/constants';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import DoctorCard2 from '@/components/DoctorCard2'

const page = () => {
    const params = useParams();
    let doctorId = params?.doctorId;
    const [doctor, setDoctor] = useState({})
    useEffect(()=>{
      const fetchDocDetail = async () =>{
        const response = await axios.get(`${BACKEND_URL}/doctors/${doctorId}`)
        if(response.status === 200){
          setDoctor(response.data)
        }
      }
      fetchDocDetail();
    },[])

    console.log(doctor)
    
  return (
    <div>
        <DoctorCard2 doctor={doctor} />
    </div>
  )
}

export default page