import React from 'react';
import FrontCard from '@/app/components/FrontCard';
import ImproveYourLifeData from '@/APICalls/ImproveYourLifeData.js';

const ImproveYourLife = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-4">
      {ImproveYourLifeData.map((card, index) => (
        <FrontCard
          key={index}
          imageSrc={card.imageSrc}
          altText={card.altText}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default ImproveYourLife;
