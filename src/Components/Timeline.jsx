import React from "react";
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
} from "@material-tailwind/react";
import SmallStart from "../assets/small-start.svg"
import LargeStart from "../assets/large-start.svg"
import { FaCircle } from "react-icons/fa";

const timelineData = [
    {
        title: "Introduction Call & Project Discovery",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        step: "Step No#1",
        align: "right",
    },
    {
        title: "Initial Design & Layout",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        step: "Step No#2",
        align: "left",
    },
    {
        title: "Website Design & Feature Implementation",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        step: "Step No#3",
        align: "right",
    },
    {
        title: "Responsive Website Design",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        step: "Step No#4",
        align: "left",
    },
    {
        title: "Final Check & Publishing",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        step: "Step No#5",
        align: "right",
    },
    {
        title: "Technical Support & Troubleshooting",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        step: "Step No#6",
        align: "left",
    },
];

export default function TimeLine() {
    return (
        <div className="w-full  mx-auto px-4 flex flex-col justify-center items-center ">
            <div className=" px-10 pr-16 py-4 relative">
                {/* Top-left star */}
                <h2 className="text-4xl md:text-5xl font-bold  text-center font-MonaBold">
                    Web Design <span className="text-purple-600">Process</span>
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
                </p>
            </div>
            <div class="p-5">
     
                <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
                    <div class="flex md:contents flex-row-reverse">
                        <div
                            class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <h3 class="text-lg font-semibold lg:text-xl font-MonaBold">Understanding Your Vision</h3>
                            <p class="mt-2 leading-6 font-Mona">We start by diving deep into your business needs and goals, ensuring we capture your vision perfectly before moving forward.</p>
                            <span class="absolute text-sm text-indigo-200 -top-5 left-2 whitespace-nowrap font-Mona">Step No#1: Discovery & Planning</span>
                        </div>
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                                </div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                    </div>

                    <div class="flex md:contents">
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300"></div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                        <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                            <h3 class="text-lg font-semibold lg:text-xl font-MonaBold">Crafting the Visual Experience</h3>
                            <p class="mt-2 leading-6 font-Mona">Our team creates a custom design and layout that reflects your brand identity, ensuring a seamless user experience.</p>
                            <span class="absolute text-sm text-indigo-200 -top-5 left-2 whitespace-nowrap font-Mona">Step No#2: Design & Layout</span>
                        </div>
                    </div>

                    <div class="flex md:contents flex-row-reverse">
                        <div
                            class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <h3 class="text-lg font-semibold lg:text-xl font-MonaBold">Bringing Your Ideas to Life</h3>
                            <p class="mt-2 leading-6 font-Mona">We integrate all necessary features and functionalities to ensure your website not only looks good but works flawlessly.</p>
                            <span class="absolute text-sm text-indigo-200 -top-5 left-2 whitespace-nowrap font-Mona">Step No#3: Feature Implementation</span>
                        </div>
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                                </div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                    </div>

                    <div class="flex md:contents">
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300"></div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                        <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                            <h3 class="text-lg font-semibold lg:text-xl font-MonaBold">Optimizing for All Devices</h3>
                            <p class="mt-2 leading-6 font-Mona">Your website is fine-tuned to be fully responsive, providing an optimal viewing experience on any device.</p>
                            <span class="absolute text-sm text-indigo-200 -top-5 left-2 whitespace-nowrap font-Mona">Step No#4: Responsive Design</span>
                        </div>
                    </div>
                    <div class="flex md:contents flex-row-reverse">
                        <div
                            class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <h3 class="text-lg font-semibold lg:text-xl font-MonaBold">Perfecting & Publishing</h3>
                            <p class="mt-2 leading-6 font-Mona">We conduct a thorough review to ensure everything is in order, then launch your site to the world with confidence.</p>
                            <span class="absolute text-sm text-indigo-200 -top-5 left-2 whitespace-nowrap font-Mona">Step No#5: Final Review & Launch</span>
                        </div>
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                                </div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                    </div>

                    <div class="flex md:contents">
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300"></div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                        <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                            <h3 class="text-lg font-semibold lg:text-xl font-MonaBold">Here for You Every Step of the Way</h3>
                            <p class="mt-2 leading-6 font-Mona">Our support doesn't end at launch; we're here to provide technical assistance and ensure your website continues to perform at its best.</p>
                            <span class="absolute text-sm text-indigo-200 -top-5 left-2 whitespace-nowrap font-Mona">Step No#6: Ongoing Support</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}