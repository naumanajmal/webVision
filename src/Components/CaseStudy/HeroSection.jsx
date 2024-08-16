import React from 'react';
import StudyCase from "../../assets/study_case.png";

function HeroSection({project}) {
    
    return (
        <div className='container mx-auto py-8 mb-10 lg:mb-44 md:mb-32'>
            <div className="flex justify-center items-center">
                <div className="relative bg-lightBlurbg rounded-lg w-full md:w-5/6 p-4 md:p-6 text-center flex flex-col gap-6 md:gap-10 items-center">
                    <div className='w-full md:w-2/3 lg:w-3/5'>
                        <h2 className="text-lg md:text-xl font-semibold text-blue font-MonaBold">
                            {project.title}
                        </h2>
                    </div>
                    <div className="relative w-full">
                        <img
                            className="relative mx-auto w-full sm:w-4/5 md:w-2/3 -mb-[20%] sm:-mb-[25%] md:-mb-[30%] rounded-md"
                            src={project.picture}
                            alt="Teamwork"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;