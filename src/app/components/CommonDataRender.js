import React, { useState } from 'react';

const HealthyLivingComponent = ({ props }) => {
  // State to manage the theme
  const [isNightMode, setIsNightMode] = useState(true);

  // Function to toggle the mode
  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div className={` container ${isNightMode ? 'bg-black text-white' : 'bg-white text-black'} pr-36 pl-16 max-w-full p-4`}>
      {/* Toggle Button */}
      <div className="absolute right-10">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-gray-700 text-white rounded-md shadow-md hover:bg-gray-600"
        >
          {isNightMode ? ' Day Mode' : 'Night Mode'}
        </button>
      </div>

      {/* Main Title and Description */}
      <h1 className="text-5xl font-bold mb-6 text-center">{props.title}</h1>
      <p className="text-center font-medium text-2xl mb-6">{props.description}</p>

      {/* Loop through the main data array */}
      {props.data.map((section, sectionIndex) => (
        <section key={sectionIndex} className="mb-8">
          {/* Section Title */}
          <h2 className="text-2xl flex font-semibold mb-4 text-left">
            <span className="pr-1 text-2xl">{sectionIndex + 1}.</span> {section.title}
          </h2>

          {/* Loop through subsections */}
          {section.subsections.map((subsection, subsectionIndex) => (
            <article key={subsectionIndex} className="mb-6">
              {/* Subsection Heading */}
              <h3 className="flex text-xl font-semibold mb-2 ml-16">
                <span className="pr-1">{sectionIndex + 1}.{subsectionIndex + 1}.</span>{subsection.subheading}
              </h3>
              {/* Subsection Text */}
              <div>
                {subsection.text.map((textItem, textIndex) => (
                  <p key={textIndex} className="mb-2 font-semibold ml-20 text-left w-[90%]">
                    {textItem.text}
                  </p>
                ))}
              </div>
              {/* Subsection Image */}
              {subsection.image && (
                <div className="flex justify-center">
                  <img 
                    src={subsection.image} 
                    alt={subsection.subheading} 
                    className="w-full md:w-1/2 h-auto rounded-lg shadow-lg"
                  />
                </div>
              )}
            </article>
          ))}
        </section>
      ))}
    </div>
  );
};

export default HealthyLivingComponent;
