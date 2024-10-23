// // src/app/api/doctors/route.ts
// import { NextResponse } from 'next/server';

// interface Doctor {
//   id: number;
//   name: string;
//   specialization: string;
//   image: string;
//   rating: number;
// }

// const doctors: Doctor[] = [
//   {
//     id: 1,
//     name: 'Dr. Emily Johnson',
//     specialization: 'Cardiologist',
//     image: '/images/doctor1.jpg',
//     rating: 4,
//   },
//   {
//     id: 2,
//     name: 'Dr. Michael Smith',
//     specialization: 'Dermatologist',
//     image: '/images/doctor2.jpg',
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: 'Dr. Sarah Lee',
//     specialization: 'Pediatrician',
//     image: '/images/doctor3.jpg',
//     rating: 3,
//   },
//   {
//     id: 4,
//     name: 'Dr. Sarah Lee',
//     specialization: 'Pediatrician',
//     image: '/images/doctor3.jpg',
//     rating: 3,
//   },
//   {
//     id: 2,
//     name: 'Dr. Michael Smith',
//     specialization: 'Dermatologist',
//     image: '/images/doctor2.jpg',
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: 'Dr. Sarah Lee',
//     specialization: 'Pediatrician',
//     image: '/images/doctor3.jpg',
//     rating: 3,
//   },
//   {
//     id: 4,
//     name: 'Dr. Sarah Lee',
//     specialization: 'Pediatrician',
//     image: '/images/doctor3.jpg',
//     rating: 3,
//   },
// ];

// export async function GET() {
//   return NextResponse.json(doctors);
// }
