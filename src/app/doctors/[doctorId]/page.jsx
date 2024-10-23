'use client'

import axios from 'axios';
import { useParams } from 'next/navigation';
import React from 'react'

const page = () => {
    const params = useParams();
    let doctorId = params?.doctorId;

    
  return (
    <div>
        <span>Hello</span>
    </div>
  )
}

export default page