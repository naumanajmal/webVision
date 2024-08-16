import React from 'react'
import SmallStart from "../assets/small-start.svg"
import LargeStart from "../assets/large-start.svg"
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import Project1 from "../assets/project5.png"
import Project2 from "../assets/project6.png"
import Project3 from "../assets/project3.svg"
import Project7 from "../assets/project7.png"
import Project8 from "../assets/project8.png"
const ProjectCard = ({ image, category, title, link }) => (
    <Link to={link} className="block  rounded-lg   overflow-hidden hover:shadow-lg transition duration-300 ">
        <div className="relative">
            <img src={image} alt={title} className="w-full h-full object-cover rounded-md  border-[1px]  border-gray-300" />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition duration-300"></div>
        </div>
        <div className="p-4">
            <p className="text-sm text-purple-600 mb-2 font-Mona ">{category}</p>
            <h3 className="text-lg font-semibold text-gray-800 font-MonaBold">{title}</h3>
        </div>
    </Link>
);


const SingleProjectCard = () => {

}


function Projects() {



    const firstRowProjects = [
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
        // {
        //     image: Project3,
        //     category: 'Websites & Digital Platforms',
        //     title: 'Spring Labs - Disrupting How Financial Info Is shared.',
        //     link: '/projects/spring-labs-3',
        // },
        // {
        //     image: Project4,
        //     category: 'Websites & Digital Platforms',
        //     title: 'Spring Labs - Disrupting How Financial Info Is shared.',
        //     link: '/projects/spring-labs-4',
        // },
    ];

    const secondRowProjects = [
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
            image: Project2,
            category: 'Websites & Digital Platforms',
            title: 'Spring Labs - Disrupting How Financial Info Is shared.',
            link: '/projects/spring-labs-3',
        },
        // {
        //     image: Project4,
        //     category: 'Websites & Digital Platforms',
        //     title: 'Spring Labs - Disrupting How Financial Info Is shared.',
        //     link: '/projects/spring-labs-4',
        // },
    ];

    return (
        <div className='container w-full  md:px-32 px-10 py-16 md:mt-32 mt-10 flex  flex-col items-center md:space-y-10'>


            <div className=" px-10 pr-16 py-4 relative   lg:w-1/2 md:3/5">
                {/* Top-left star */}
                <h2 className="text-lg md:text-3xl font-bold  text-center font-MonaBold">
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

                <p className="text-md text-gray-600 text-center mb-8 relative font-Mona">
                    Here are the steps taken to deliver you a outstanding web design project
                    {/* Bottom-right star */}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                {firstRowProjects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
                {secondRowProjects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            <Link to={"/projects"} className="block  rounded-md  w-full h-full  overflow-hidden hover:shadow-lg transition duration-300 ">
                <div className="relative " style={{backgroundColor:"#E5E7EB"}}>
                    <img src={Project8} alt={"Websites & Digital Platforms"} className="w-full h-1/2 object-cover rounded-md  border-[1px]  border-gray-300 px-16 pt-12" />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition duration-300"></div>
                </div>
                <div className="p-4">
                    <p className="text-sm text-purple-600 mb-2 font-Mona ">{'Websites & Digital Platforms'}</p>
                    <h3 className="text-lg font-semibold text-gray-800 font-MonaBold">{'Spring Labs - Disrupting How Financial Info Is shared.'}</h3>
                </div>
            </Link>
            <div className="text-center mt-12">
                <Link to="/all-projects" className="inline-block bg-blue text-white px-6 py-3 rounded-full font-MonaBold hover:bg-purple-700 transition duration-300">
                    Show all projects →
                </Link>

            </div>
        </div>
    )
}

export default Projects


