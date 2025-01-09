'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { data } from '@/APICalls/MentalAwarenessData.js'; // Adjust the path as necessary

const MentalAwareness = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-6 font-sans">
      {/* Mental Awareness Section */}
      <section className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Mental Awareness</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Understanding your body is the first step toward good health. As a teen, you’re going through many physical, emotional, and hormonal changes. It's important to learn about how your body works, recognize what's normal, and when to seek help. Self-care, proper nutrition, and mental health awareness are key components of maintaining a healthy lifestyle. Remember, it’s okay to ask questions and seek advice when needed.
        </p>
      </section>

      {/* Mental Articles Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Mental Health Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.articles.map((article, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative w-full h-56">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h3>
                <p className="text-gray-600">{article.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Diseases & Solutions Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Diseases & Solutions</h2>
        {data.diseases.map((disease, index) => (
          <div key={index} className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-bold text-red-700">Disease: {disease.disease}</h3>
            <p className="text-gray-700">Solution: {disease.solution}</p>
          </div>
        ))}
      </section>

      {/* Questions & Answers Section */}
      <section>
        <h2 className="text-3xl font-semibold text-purple-700 mb-4">Frequently Asked Questions</h2>
        {data.questions.map((qna, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center bg-blue-100 p-4 cursor-pointer rounded-lg hover:bg-blue-200"
              onClick={() => toggleQuestion(index)}
            >
              <span className="text-lg font-medium text-gray-800">{qna.question}</span>
              <span className="text-2xl font-bold text-gray-800">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className="bg-gray-50 p-4 rounded-b-lg border-l-4 border-purple-600">
                <p className="text-gray-700">{qna.answer}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default MentalAwareness;
