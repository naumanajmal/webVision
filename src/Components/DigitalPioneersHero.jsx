import React from 'react';
import Team from "../assets/team.png"
const DigitalPioneersHero = () => {
  return (
    <div className="bg-blue text-white md:mt-20 mt-6">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 flex flex-col items-center lg:items-start md:gap-8 gap-3">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Digital Pioneers Ready to Illuminate Your Path
          </h1>
          <p className="mb-6 text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
          <button className="bg-white text-blue font-semibold py-2 px-6 rounded-full hover:bg-purple-100 transition duration-300">
            Get Started Now
          </button>
        </div>
        <div className="lg:w-2/5 relative">
          <img 
            src={Team}
            alt="Team meeting" 
            className=" shadow-lg"
          />
          <div className="absolute -bottom-4 -left-4 bg-white text-blue py-2 px-4 rounded-full shadow-md">
            14+ years in industry
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalPioneersHero;