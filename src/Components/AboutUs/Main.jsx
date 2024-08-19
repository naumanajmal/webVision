import React from 'react';
import MainImage from '../../assets/hands.png'
import { FaArrowRight } from "react-icons/fa6";

const Main = () => {
  return (
    <div className="container mx-auto px-4 py-12 w-full">
     <h2 className="text-sm font-semibold text-gray-600 mb-2">— About Us</h2>
      <div className="flex flex-col md:flex-row gap-5 w-full">
      
        <div className='flex-1'>
          <h1 className="text-4xl font-bold mb-6 font-MonaBold">
            We deliver comprehensive, efficient, and scalable technology solutions tailored to meet the unique needs your businesses.
          </h1>
          <div className="relative">
            <img
              src={MainImage}
              alt="Team collaboration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="space-y-6 md:w-1/3">
          <div className="bg-indigo-600 text-white p-6 rounded-lg h-1/2 space-y-6">
            <div>
            <h3 className="text-xl font-semibold mb-1 font-MonaBold">Our Ambition</h3>
            <p className="mb-4 font-Mona">
              To be recognized as a global leader in IT solutions, continuously pushing the boundaries of technology to create innovative, sustainable, and transformative digital experiences. We aim to set new standards in the IT industry, fostering a culture of excellence and creativity that inspires progress and growth.
            </p>
            </div>
            {/* <button className="font-MonaBold w-full border-[1px] border-white   p-1 pl-4   rounded-full flex items-center justify-between text-sm font-semibold  hover:text-indigo-800 transition duration-300">
              <span>Learn More</span>
              <div className='p-3 items-center justify-center  rounded-full bg-white'>
              <FaArrowRight color = {"black"}/>

              </div>
            </button> */}
          </div>
          <div className="bg-lightBlurbg p-6 rounded-lg h-1/2 space-y-6">
            <div>
            <h3 className="text-xl font-semibold mb-1 font-MonaBold">Our Mission</h3>
            <p className="mb-4 font-Mona">
              Our mission is to empower businesses through transformative IT solutions. We are committed to developing state-of-the-art technology services that enhance operational efficiency, ensure security, and drive growth.
            </p>
            </div>
            {/* <button className="font-MonaBold w-full border-[1px] border-black   p-1 pl-4   rounded-full flex items-center justify-between text-sm font-semibold  hover:text-indigo-800 transition duration-300">
              <span>Learn More</span>
              <div className='p-3 items-center justify-center  rounded-full bg-white'>
              <FaArrowRight />

              </div>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;