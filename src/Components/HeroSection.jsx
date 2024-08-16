import React from 'react';
import Hero from "../assets/Hero.png"
import { IoPlayCircle } from "react-icons/io5";

const HeroSection = () => {
  return (
    <div className="mx-auto px-4  py-10 flex flex-col md:flex-row justify-between items-center">
      {/* Left side content */}
      <div className="md:w-3/4 mb-8  md:mb-0 space-y-10 flex flex-col items-center md:items-start">
        <div className='space-y-1'>
        <h1 className="text-5xl lg:text-7xl font-bold font-MonaBold ">
          Secure <span className="text-blue  ">Digital</span> 
        </h1>
        <h1 className="text-5xl lg:text-7xl font-bold mb-4 font-MonaBold">Transformation</h1>
        </div>
        
        <div className="flex items-center mb-6">
          <button className="bg-blue text-white px-6 py-2 rounded-md mr-4 font-Mona">
            Discover Now
          </button>
         
        </div>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center font-Mona">
            <svg className="w-4 h-4 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Brand Management by Internetivo
          </li>
          <li className="flex items-center font-Mona">
            <svg className="w-4 h-4 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            30-Days Money Back Guarantee
          </li>
        </ul>
        <div className="flex flex-wrap gap-5 lg:w-1/2  px-12 md:px-0 ">
        
          <span className="px-6 py-2 bg-yellow text-gray-900 rounded-full text-sm font-Mona">Web Design</span>
          <span className="px-6 py-2 bg-blue text-white rounded-full text-sm font-Mona">Web Development</span>
          <span className="px-6 py-2 bg-black text-white rounded-full text-sm font-Mona ">Ui/Ux</span>
      
          <span className="px-6 py-2 bg-black text-white rounded-full text-sm font-Mona">SEO Optimization</span>
          
       
        </div>
      </div>
      
      {/* Right side image */}
      <div className="">
          <img src={Hero} alt="Woman in white shirt" className="h-0 w-0 md:h-full md:w-full" />
      </div>
    </div>
  );
};

export default HeroSection;