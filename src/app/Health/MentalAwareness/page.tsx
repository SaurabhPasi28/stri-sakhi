'use client'
import React, { useState } from 'react';
import { data } from '@/APICalls/MentalAwarenessData.jsx'; // Adjust the path as necessary

const MentalAwareness = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-6">
      {/* Mental Awareness Section */}
      <section className="mb-8 flex">
        <h1 className="text-3xl font-bold mb-4">Mental Awareness</h1>
        <p className="text-lg">
          Understanding your body is the first step toward good health. As a teen, you’re going through many physical, emotional, and hormonal changes. It's important to learn about how your body works, recognize what's normal, and when to seek help. Self-care, proper nutrition, and mental health awareness are key components of maintaining a healthy lifestyle. Remember, it’s okay to ask questions and seek advice when needed.
        </p>
      </section>

      {/* Mental Articles Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Mental</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.articles.map((article, index) => (
            <div key={index} className="p-4 bg-white shadow rounded-lg">
              <img src={article.image} alt={article.title} className="w-full h-45 object-cover rounded-t-lg mb-4" />
              <p className="text-xl font-semibold mb-2">{article.title}</p>
              <p className="text-base">{article.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Diseases & Solutions Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Diseases & Solutions</h2>
        {data.diseases.map((disease, index) => (
          <div key={index} className="p-4 mb-4 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Disease: {disease.disease}</h3>
            <p className="text-base">Solution: {disease.solution}</p>
          </div>
        ))}
      </section>

      {/* Questions & Answers Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        {data.questions.map((qna, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center bg-blue-100 p-4 cursor-pointer rounded-lg"
              onClick={() => toggleQuestion(index)}
            >
              <span className="text-lg font-medium">{qna.question}</span>
              <span className="text-2xl font-bold">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="bg-gray-50 p-4 rounded-b-lg">
                <p className="text-base">{qna.answer}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default MentalAwareness;
