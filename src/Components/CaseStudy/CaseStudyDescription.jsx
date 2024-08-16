import React from 'react';

const CaseStudyDescription = ({ project }) => {
  return (
    <div className="bg-lightBlurbg font-sans p-8">

      <div className="container mx-auto flex flex-wrap">
        {/* Left Column */}
        <div className="w-full md:w-1/2 p-4 flex flex-col">
          <div className="flex-grow">
            <h2 className="text-xl font-semibold font-MonaBold">Overview</h2>
            <p className='ml-4 font-Mona'>{project.overview}</p>

            <h2 className="text-xl font-semibold mt-4 font-MonaBold">Objectives</h2>
            <ul className="list-disc list-inside ml-4">
              {project.objectives.map((obj, index) => (
                <li key={index} className='font-Mona'>
                  <strong className='font-MonaBold'>{obj.title}:</strong> {obj.description}
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mt-4 font-MonaBold">Process</h2>
            <ul className="list-disc list-inside ml-4 ">
            {project.process.map((step, index) => (
             
                <li key={index} className='font-Mona'>
                <strong className='font-MonaBold' >{step.title}:</strong> {step.description}
              </li>
           

             
            ))}
               </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 p-4 flex flex-col">
          <div className="flex-grow">
            <h2 className="text-xl font-semibold mt-4 md:mt-0 font-MonaBold">Results</h2>
            <p className='ml-4 font-Mona'>{project.results}</p>

            <h2 className="text-xl font-semibold mt-4 font-MonaBold">Conclusion</h2>
            <p className='ml-4 font-Mona'>{project.conclusion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDescription;
