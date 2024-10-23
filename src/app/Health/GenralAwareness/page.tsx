'use client'
import React, { useState } from 'react';
import { data } from '@/APICalls/GenralAwarenessData.jsx'; // Adjust the path as necessary

const GenralAwarenes = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-6 font-sans">
      {/* Teen Awareness Section */}
      <section className="text-center mb-8">
        <h1 className="text-4xl text-gray-800 mb-2">Genral Awareness</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Understanding your body is the first step toward good health. As a teen, you’re going through many physical, emotional, and hormonal changes. It's important to learn about how your body works, recognize what's normal, and when to seek help. Self-care, proper nutrition, and mental health awareness are key components of maintaining a healthy lifestyle. Remember, it’s okay to ask questions and seek advice when needed.
        </p>
      </section>

      {/* Healthy Teen Articles Section */}
      <section className="mb-8">
        <h2 className="text-3xl text-blue-600 mb-4">Genral Awareness</h2>
        <div className="flex flex-wrap gap-4">
          {data.articles.map((article, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg w-[48%]">
              <img src={article.image} alt={article.title} className="w-full mb-2 rounded-lg" />
              <p className="text-lg text-gray-800 font-semibold">{article.title}</p>
              <p className="text-gray-700">{article.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Diseases & Solutions Section */}
      <section className="mb-8">
        <h2 className="text-3xl text-red-600 mb-4">Diseases & Solutions</h2>
        {data.diseases.map((disease, index) => (
          <div key={index} className="bg-red-50 p-4 rounded-lg mb-4">
            <h3 className="text-xl text-red-500 font-bold">Disease: {disease.disease}</h3>
            <p className="text-gray-700">Solution: {disease.solution}</p>
          </div>
        ))}
      </section>

      {/* Questions & Answers Section */}
      <section className="mb-8">
        <h2 className="text-3xl text-purple-700 mb-4">Frequently Asked Questions</h2>
        {data.questions.map((qna, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center bg-gray-200 p-3 rounded cursor-pointer hover:bg-gray-300"
              onClick={() => toggleQuestion(index)}
            >
              <span className="text-lg text-gray-800">{qna.question}</span>
              <span className="text-xl font-bold">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="bg-gray-100 p-3 border-l-4 border-purple-600 mt-2 rounded">
                {qna.answer}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default GenralAwarenes;
