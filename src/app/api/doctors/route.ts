// src/app/api/doctors/route.ts
import { NextResponse } from 'next/server';

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  image: string;
  rating: number;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Emily Johnson',
    specialization: 'Cardiologist',
    image: 'https://content.jdmagicbox.com/v2/comp/delhi/l9/011pxx11.xx11.180216200520.b7l9/catalogue/dr-ankita-bali-bhms-dnhe-pg-hom-london-md-scholar-connaught-place-delhi-homeopathic-doctors-o2fj073lyd-250.jpg',
    rating: 4,
  },
  {
    id: 2,
    name: 'Dr. Michael Smith',
    specialization: 'Dermatologist',
    image: 'https://www.felixhospital.com/sites/default/files/2022-11/dr-ritesh-agarwal.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Dr. Sarah Lee',
    specialization: 'Pediatricia',
    image: 'https://www.myhealthhospitals.com/images/doctors/dr-jayanth-reddy.jpg',
    rating: 3,
  },
  {
    id: 4,
    name: 'Dr. Emily Johnson',
    specialization: 'Cardiologist',
    image: 'https://content.jdmagicbox.com/v2/comp/delhi/l9/011pxx11.xx11.180216200520.b7l9/catalogue/dr-ankita-bali-bhms-dnhe-pg-hom-london-md-scholar-connaught-place-delhi-homeopathic-doctors-o2fj073lyd-250.jpg',
    rating: 4,
  },
  {
    id: 5,
    name: 'Dr. Michael Smith',
    specialization: 'Dermatologist',
    image: 'https://www.felixhospital.com/sites/default/files/2022-11/dr-ritesh-agarwal.jpg',
    rating: 5,
  },
  {
    id: 6,
    name: 'Dr. Sarah Lee',
    specialization: 'Pediatrician',
    image: 'https://www.myhealthhospitals.com/images/doctors/dr-jayanth-reddy.jpg',
    rating: 3,
  },
  {
    id: 4,
    name: 'Dr. Emily Johnson',
    specialization: 'Cardiologist',
    image: 'https://content.jdmagicbox.com/v2/comp/delhi/l9/011pxx11.xx11.180216200520.b7l9/catalogue/dr-ankita-bali-bhms-dnhe-pg-hom-london-md-scholar-connaught-place-delhi-homeopathic-doctors-o2fj073lyd-250.jpg',
    rating: 4,
  },
  {
    id: 7,
    name: 'Dr. Sarah Lee',
    specialization: 'Pediatrician',
    image: 'https://www.myhealthhospitals.com/images/doctors/dr-jayanth-reddy.jpg',
    rating: 3,
  },
];

export async function GET() {
  return NextResponse.json(doctors);
}
