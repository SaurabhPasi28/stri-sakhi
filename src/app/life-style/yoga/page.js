'use client';
import React, { useState } from 'react';
import { data } from '@/APICalls/YogaData.js';

const Yoga = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isNightMode, setIsNightMode] = useState(true);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div className={`min-h-screen ${isNightMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Toggle Button */}
      <div className="absolute right-10 top-40">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-gray-700 text-white rounded-md shadow-md hover:bg-gray-600 transition-all"
        >
          {isNightMode ? 'Day Mode' : 'Night Mode'}
        </button>
      </div>

      <div className="p-6 space-y-8">
        {/* Yoga Awareness Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Yoga</h1>
          <p className="text-lg leading-relaxed">
            Understanding your body is the first step toward good health. As a teen, you’re going through many physical,
            emotional, and hormonal changes. It's important to learn about how your body works, recognize what's normal,
            and when to seek help.
          </p>
        </section>

        {/* Yoga Articles Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Yoga Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.articles.map((article, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 ${
                  isNightMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
                }`}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                  onError={(e) => (e.target.src = '/fallback-image.jpg')} // Replace with fallback image
                />
                <p className="font-semibold text-lg mb-2">{article.title}</p>
                <p className="text-sm">{article.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Diseases & Solutions Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Diseases & Solutions</h2>
          {data.diseases.map((disease, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-md mb-4 ${
                isNightMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
              }`}
            >
              <h3 className="text-xl font-semibold">Disease: {disease.disease}</h3>
              <p className="mt-2">Solution: {disease.solution}</p>
            </div>
          ))}
        </section>

        {/* Questions & Answers Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          {data.questions.map((qna, index) => (
            <div key={index} className="mb-4">
              <div
                className={`flex justify-between items-center p-4 rounded-lg cursor-pointer ${
                  isNightMode ? 'bg-blue-800' : 'bg-blue-100'
                }`}
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-lg font-semibold">{qna.question}</span>
                <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div
                  className={`mt-2 p-4 rounded-lg shadow-inner ${
                    isNightMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-black'
                  }`}
                >
                  {qna.answer}
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Yoga;
