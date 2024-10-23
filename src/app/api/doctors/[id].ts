import { NextApiRequest, NextApiResponse } from 'next';

// Example doctor data (you can replace this with actual data or fetch from a database)
const doctors = [
  {
    id: '1',
    name: 'Dr. John Doe',
    specialization: 'Cardiology',
    image: '/images/doctor1.jpg',
    degrees: ['MBBS', 'MD - Cardiology'],
    certificates: ['Certified Cardiologist', 'Heart Specialist Award'],
    awards: ['/images/award1.jpg', '/images/award2.jpg'],
    address: {
      street: '123 Heart Lane',
      pin: '123456',
      city: 'New York',
      state: 'NY',
      phone: '123-456-7890',
      mapUrl: 'https://maps.google.com/?q=New+York'
    }
  },
  // Add more doctor data here
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  // Find the doctor by ID
  const doctor = doctors.find((doc) => doc.id === id);

  if (doctor) {
    res.status(200).json(doctor);
  } else {
    res.status(404).json({ message: 'Doctor not found' });
  }
}
