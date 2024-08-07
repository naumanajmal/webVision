import React from 'react';
import Hero from "../assets/Hero.png"
import { IoPlayCircle } from "react-icons/io5";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
      {/* Left side content */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Secure <span className="text-blue">Digital</span> Transformation
        </h1>
        <div className="flex items-center mb-6">
          <button className="bg-blue text-white px-6 py-2 rounded-md mr-4">
            Discover Now
          </button>
          <button className="flex items-center text-gray-700 gap-2">
          <IoPlayCircle  size={45} color='#5840BA'/>

            <span className="mr-2 text-xs">Watch Video</span>
          
          </button>
        </div>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Brand Management by Internetivo
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            30-Days Money Back Guarantee
          </li>
        </ul>
        <div className="flex flex-wrap gap-5">
          <span className="px-6 py-2 bg-black text-white rounded-full text-sm ">Marketing</span>
          <span className="px-6 py-2 bg-yellow text-gray-900 rounded-full text-sm">Web Design</span>
          <span className="px-6 py-2 bg-blue text-white rounded-full text-sm">Mobile Apps</span>
          <span className="px-6 py-2 bg-blue text-white rounded-full text-sm">Security</span>
          <span className="px-6 py-2 bg-black text-white rounded-full text-sm">Servers</span>
        </div>
      </div>
      
      {/* Right side image */}
      <div className="md:w-1/2 relative">
        <div className="relative z-10">
          <img src={Hero} alt="Woman in white shirt" className="w-full h-auto " />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;