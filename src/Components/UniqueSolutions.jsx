import React from 'react';
import Linear from "../assets/linear-Vector.svg"
import User from "../assets/user-rounded.svg"
import Unlock from "../assets/unlock-circle.svg"
import Security from "../assets/security-safe.svg"
import Safe from "../assets/safe-home.svg"

const UniqueSolutions = () => {
  const solutions = [
    {
      icon: User,
      title: 'Employee Owned',
      description: 'Being employee-owned keeps us focused on the unique needs of our users, and we wouldnt have it any other way.'
    },
    {
      icon: Unlock,
      title: 'Passion for privacy',
      description: 'We believe in everyone right to privacy, and we back that with a strong anti-spam policy and free WHOIS privacy.'
    },
    {
      icon: Security,
      title: 'Commitment to Security',
      description: 'Our many security features include Multi Factor Authentication, auto-enabled sFTP.'
    },
    {
      icon: Safe,
      title: 'Embrace Open Source',
      description: 'We strongly believe in providing open source solutions to our customers whenever possible.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className='flex flex-row items-center'>
        <div >
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        <span className="text-blue">Unique Solutions </span> <span>for</span>
        <br />
        Unique Challenges
      </h2>
      <p className="text-gray-600 mb-12">
        Some of the industries our digital agency specializes in.
      </p>
      </div>
      <img src={Linear}></img>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {solutions.map((solution, index) => (
          <div key={index} className="p-6 rounded-lg bg-lightBlurbg flex flex-col gap-2" >
           <div className=' w-7 rounded-md h-10 relative overflow-visible' style={{backgroundColor:'#E9E6F6'}}>
  <img 
    src={solution.icon} 
    className='absolute top-1/2 left-1/2 transform -translate-y-1/2 w-12 h-12'
    alt={solution.title}
  />
</div>
            
            <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
            <p className="text-gray-600">{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniqueSolutions;