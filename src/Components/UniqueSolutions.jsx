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
      title: 'Custom Solutions',
      description: 'We deliver tailored web designs that perfectly match your brand and business goals.'
    },
    {
      icon: Unlock,
      title: 'Advanced Security',
      description: 'We prioritize your website’s safety with top-tier security measures and regular updates.'
    },
    {
      icon: Security,
      title: 'Innovative Approach',
      description: 'We use the latest tech to ensure your website leads in your industry.'
    },
    {
      icon: Safe,
      title: 'Clear Communication',
      description: 'We keep you informed and supported from start to finish, with open communication.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className='flex flex-row items-center'>
        <div >
      <h2 className="text-3xl md:text-4xl font-MonaBold mb-2">
        <span className="text-blue">Unique Solutions </span> <span>for</span>
        <br />
        Unique Challenges
      </h2>
      <p className="text-gray-600 mb-12 font-Mona">
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
            
            <h3 className="text-base font-MonaSemiBold ">{solution.title}</h3>
            <p className="text-textSecondary text-base font-Mona">{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniqueSolutions;