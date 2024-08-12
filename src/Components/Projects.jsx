import React from 'react'
import SmallStart from "../assets/small-start.svg"
import LargeStart from "../assets/large-start.svg"
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import Project1 from "../assets/project1.svg"
import Project2 from "../assets/project2.svg"
import Project3 from "../assets/project3.svg"
import Project4 from "../assets/project4.svg"
const ProjectCard = ({ image, category, title, link }) => (
    <Link to={link} className="block  rounded-lg   overflow-hidden hover:shadow-lg transition duration-300">
        <div className="relative">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-md  border-[1px]  border-gray-300" />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition duration-300"></div>
        </div>
        <div className="p-4">
            <p className="text-sm text-purple-600 mb-2">{category}</p>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
    </Link>
);



function Projects() {



    const projects = [
        {
            image: Project1,
            category: 'Websites & Digital Platforms',
            title: 'Spring Labs - Disrupting How Financial Info Is shared.',
            link: '/projects/spring-labs',
        },
        {
            image: Project2,
            category: 'Websites & Digital Platforms',
            title: 'Spring Labs - Disrupting How Financial Info Is shared.',
            link: '/projects/spring-labs-2',
        },
        {
            image: Project3,
            category: 'Websites & Digital Platforms',
            title: 'Spring Labs - Disrupting How Financial Info Is shared.',
            link: '/projects/spring-labs-3',
        },
        {
            image: Project4,
            category: 'Websites & Digital Platforms',
            title: 'Spring Labs - Disrupting How Financial Info Is shared.',
            link: '/projects/spring-labs-4',
        },
    ];

    return (
        <div className='container w-full  md:px-32 px-10 py-16 md:mt-32 mt-10 bg-lightBlurbg'>
     

            <div className=" px-10 pr-16 py-4 relative   w-4/5">
                {/* Top-left star */}
                <h2 className="text-lg md:text-3xl font-bold  text-center">
                    Web Design <span className="text-blue">Projects</span>
                </h2>

                <div className="absolute top-0 left-0 text-purple-600">
                    <img src={LargeStart}></img>
                </div>
                <span className="absolute bottom-1/3 right-0 text-purple-600">
                    <img src={SmallStart}></img>
                </span>
            </div>
            <div>

                <p className="text-md text-gray-600 text-center mb-8 relative">
                    Here are the steps taken to deliver you a outstanding web design project
                    {/* Bottom-right star */}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            <div className="text-center mt-12">
                <Link to="/all-projects" className="inline-block bg-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300">
                    Show all projects →
                </Link>
          
            </div>
        </div>
    )
}

export default Projects


