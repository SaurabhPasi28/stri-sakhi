import React from 'react';
import Homecard from './Homecard';
import cardDataArray from '@/APICalls/CardData.jsx';

function CardsBox() {
  return (
    <>
      <div className="flex justify-center py-4 text-4xl text-blue-600 mb-4">
        <h1>Resources for Every Stage of Life</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {cardDataArray.map((card, index) => (
          <Homecard
            key={index}
            title={card.title}
            imageUrl={card.imageUrl}
            description={card.description}
            linkUrl={card.linkUrl}
          />
        ))}
      </div>
    </>
  );
}

export default CardsBox;
