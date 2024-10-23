import React from 'react';
// import healthyLivingData from '@/APICalls/HealthyTeen'; // Adjust the path as necessary

const HealthyLivingComponent = ({props}) => {
  // props=healthyLivingData;
  return (
    <div className="container mx-auto p-4">
      {/* Main Title and Description */}
      <h1 className="text-3xl font-bold mb-6 text-center">{props.title}</h1>
      <p className="text-center mb-6">{props.description}</p>

      {/* Loop through the main data array */}
      {props.data.map((section, sectionIndex) => (
        <section key={sectionIndex} className="mb-8">
          {/* Section Title */}
          <h2 className="text-2xl flex  font-semibold mb-4 text-left"><h2 className='pr-1'>{sectionIndex+1 }.</h2> { section.title}</h2>

          {/* Loop through subsections */}
          {section.subsections.map((subsection, subsectionIndex) => (
            <article key={subsectionIndex} className="mb-6">
              {/* Subsection Heading */}
              <h3 className="text-xl  font-semibold mb-2"><h3 className='pr-1'>{sectionIndex+1 }.{subsectionIndex+1}. </h3>{subsection.subheading}</h3>

              {/* Subsection Text */}
              {subsection.text.map((textItem, textIndex) => (
                <p key={textIndex} className="mb-2 text-left">{textItem.text}</p>
              ))}

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
