import React from 'react';
import Man from "../assets/happy_man.png"
import Vector from "../assets/Vector.png"
import Server from "../assets/server.svg"
import Mobile from "../assets/mobile.svg"
import Cloud from "../assets/cloud-computing.svg"
import Pen from "../assets/pen-tool.svg"
const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-lightBlurbg p-6 rounded-lg  flex flex-col  ">
      <h2 className='bg-white p-3 rounded-full w-12'>
        <img src={icon}></img>
      </h2>
    <h3 className="text-xl font-MonaBold mt-4 mb-2 text-blue ">{title}</h3>
    <p className="text-gray-600 mb-4 text-sm font-Mona">{description}</p>
    {/* <button className=" hover:text-purple-800 bg-blue rounded-full text-white w-8 p-1">
       → 
    </button> */}
  </div>
);

const ServicesComponent = () => {
  const services = [
    { icon: Pen, title: 'Website Design', description: 'We craft beautiful and responsive websites tailored to your brand. Our design process ensures a user-friendly experience, making your website stand out in the digital landscape.' },
    { icon: Mobile, title: 'Website Development', description: 'We build robust and scalable websites using the latest technologies. Whether you need a simple informational site or a complex web application, our development team has you covered.' },
    { icon: Cloud, title: 'Website Maintenance', description: 'Keep your website running smoothly with our ongoing maintenance and support services. We ensure your site stays updated, secure, and functioning optimally at all times.' },
    { icon: Server, title: 'SEO Optimization', description: 'Boost your website’s visibility with our SEO optimization services. We employ the latest techniques to improve your search engine rankings and drive more organic traffic to your site.' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-10 md:mt-20">
      <div className="flex flex-col lg:flex-row ">
        <div className=" text-white bg-blue p-8 rounded-lg mb-8 lg:mb-0 lg:w-1/2 lg:mr-8 relative">
          <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-MonaBold w-1/2 md:w-full">What are we offering?</h2>
          
          <img src={Vector} alt="vector" className="rounded-lg  h-20 -rotate-90 lg:rotate-0 pl-10 lg:pl-0" />
       
       
          </div>
          
          <img src={Man} alt="Man with laptop" className="rounded-lg absolute right-0 bottom-0 lg:left-0 h-full lg:h-auto " />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:w-3/5 ">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;