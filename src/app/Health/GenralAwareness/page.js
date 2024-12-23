'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { data } from '@/APICalls/GenralAwarenessData.js'; // Adjust the path as necessary

const ArticleCard = ({ image, title, content }) => (
  <div className="bg-gray-100 p-4 rounded-lg w-[48%] shadow-md">
    <Image
      src={image}
      alt={title}
      className="w-full mb-2 rounded-lg"
      width={400}
      height={250}
      layout="responsive"
    />
    <p className="text-lg text-gray-800 font-semibold">{title}</p>
    <p className="text-gray-700 mt-2">{content}</p>
  </div>
);

const DiseaseCard = ({ disease, solution}) => (
  <div className="bg-red-50 p-4 rounded-lg mb-4 shadow-sm">
    <h3 className="text-xl text-red-500 font-bold">Disease: {disease}</h3>
    <p className="text-gray-700 mt-2">Solution: {solution}</p>
  </div>
);

const FAQItem = ({ question, answer, isActive,onClick}) => (
  <div className="mb-4">
    <div
      className="flex justify-between items-center bg-gray-200 p-3 rounded cursor-pointer hover:bg-gray-300"
      onClick={onClick}
    >
      <span className="text-lg text-gray-800">{question}</span>
      <span className="text-xl font-bold">{isActive ? '-' : '+'}</span>
    </div>
    {isActive && (
      <div className="bg-gray-100 p-3 border-l-4 border-purple-600 mt-2 rounded">
        {answer}
      </div>
    )}
  </div>
);

const GenralAwarenes = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!data) {
    return <div className="p-6">Data is unavailable. Please check the API call.</div>;
  }

  return (
    <div className="p-6 font-sans">
      {/* Teen Awareness Section */}
      <section className="text-center mb-8">
        <h1 className="text-4xl text-gray-800 mb-2">Genral Awareness</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Understanding your body is the first step toward good health. As a teen, you’re going
          through many physical, emotional, and hormonal changes. It's important to learn about
          how your body works, recognize what's normal, and when to seek help. Self-care, proper
          nutrition, and mental health awareness are key components of maintaining a healthy
          lifestyle. Remember, it’s okay to ask questions and seek advice when needed.
        </p>
      </section>

      {/* Healthy Teen Articles Section */}
      <section className="mb-8">
        <h2 className="text-3xl text-blue-600 mb-4">General Awareness</h2>
        <div className="flex flex-wrap gap-4">
          {data.articles.map((article, index) => (
            <ArticleCard
              key={index}
              image={article.image}
              title={article.title}
              content={article.content}
            />
          ))}
        </div>
      </section>

      {/* Diseases & Solutions Section */}
      <section className="mb-8">
        <h2 className="text-3xl text-red-600 mb-4">Diseases & Solutions</h2>
        {data.diseases.map((disease, index) => (
          <DiseaseCard
            key={index}
            disease={disease.disease}
            solution={disease.solution}
          />
        ))}
      </section>

      {/* Questions & Answers Section */}
      <section className="mb-8">
        <h2 className="text-3xl text-purple-700 mb-4">Frequently Asked Questions</h2>
        {data.questions.map((qna, index) => (
          <FAQItem
            key={index}
            question={qna.question}
            answer={qna.answer}
            isActive={activeIndex === index}
            onClick={() => toggleQuestion(index)}
          />
        ))}
      </section>
    </div>
  );
};

export default GenralAwarenes;
