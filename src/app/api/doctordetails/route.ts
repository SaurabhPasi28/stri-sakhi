// src/app/api/doctordetails/routes.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const doctors = [
  {
    id: 1,
    name: 'Dr. Emily Johnson',
    specialization: 'Cardiologist',
    image: '/images/doctor1.jpg',
    rating: 4,
    degrees: ['MBBS', 'MD in Cardiology'],
    certificates: ['Board Certified Cardiologist'],
    awards: ['Best Cardiologist 2022'],
    address: {
      street: '123 Main St',
      pin: '123456',
      city: 'City',
      state: 'State',
      phone: '123-456-7890',
    },
  },
  // Add more doctors as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const doctor = doctors.find((doc) => doc.id === Number(id));
  if (doctor) {
    res.status(200).json(doctor);
  } else {
    res.status(404).json({ message: 'Doctor not found' });
  }
}
