import React from 'react'
import SmallStart from "../assets/small-start.svg"
import LargeStart from "../assets/large-start.svg"
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import Project1 from "../assets/project5.png"
import Project2 from "../assets/project6.png"
import Project3 from "../assets/project3.svg"
import Project7 from "../assets/project7.png"
import Project8 from "../assets/project8.png"
import CaseStudyData from './CaseStudy/Data';
const ProjectCard = ({ project }) => {
    return (
        <Link to={"/case_study"} state={{ project: project }} className="block  rounded-lg      overflow-hidden hover:shadow-lg transition duration-300 ">
            <div className="relative">
                <img src={project.picture} alt={project.title} className="w-full h-full object-cover rounded-md  border-[1px]  border-gray-300" />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition duration-300"></div>
            </div>
            <div className="p-4">
                <p className="text-sm text-purple-600 mb-2 font-Mona ">{"Website Design And Development"}</p>
                <h3 className="text-lg font-semibold text-gray-800 font-MonaBold">{project.mission}</h3>
            </div>
        </Link>
    )
};





function Projects() {


    return (
        <div className='container w-full  md:px-32 px-10 py-5 md:mt-10 mt-5 flex  flex-col items-center space-y-5 md:space-y-10'>

            <div className='px-10 pr-16 py-4 relative   lg:w-3/5 md:3/5 space-y-4'>
                <div className="">
                    {/* Top-left star */}
                    <h2 className="text-3xl  md:text-5xl font-bold  text-center font-MonaBold">
                        Web Design <span className="text-blue">Projects</span>
                    </h2>
                    <div className="absolute top-0 left-0 text-purple-600">
                        <img src={LargeStart}></img>
                    </div>
                    <span className="absolute bottom-1/3 right-0 text-purple-600">
                        <img src={SmallStart}></img>
                    </span>
                </div>


                <p className="text-md text-gray-600 text-center mb-8 relative font-Mona">
                    Here are the projects that we have worked on
                    {/* Bottom-right star */}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                {CaseStudyData.slice(3, 5).map((project, index) => (

                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
                {CaseStudyData.slice(0, 3).map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>


        </div>
    )
}

export default Projects


