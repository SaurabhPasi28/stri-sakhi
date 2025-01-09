import React from 'react';
import FrontCard from '@/app/components/FrontCard.js';
import FrontCardData from '@/APICalls/FrontCardData.js';
const FrontCardContainer = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {FrontCardData.map((card, index) => (
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

export default FrontCardContainer;
