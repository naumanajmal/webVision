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
import SmallStart  from "../assets/small-start.svg"
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
                <h2 className="text-4xl md:text-3xl font-bold  text-center">
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

                <p className="text-md text-gray-600 text-center mb-8 relative">
                    Here are the steps taken to deliver you a outstanding web design project
                    {/* Bottom-right star */}
                </p>
            </div>
            <Timeline className="flex  max-w-4xl">
                {timelineData.map((item, index) => (
                    <TimelineItem key={index} className={`flex justify-end`}>
                        {index !== timelineData.length - 1 && <TimelineConnector />}
                        <div className={`w-1/2 pr-8 bg-`}>
                            <TimelineHeader >
                                <TimelineIcon className="p-3 bg-blue">
                                    <FaCircle className="h-2 w-2 text-white" />
                                </TimelineIcon>
                                <Typography variant="h6" color="blue-gray" className="text-lg font-semibold text-blue">
                                    {item.title}
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography color="gray" className="font-normal text-gray-600 text-sm">
                                    {item.description}
                                </Typography>

                            </TimelineBody>
                        </div>
                    </TimelineItem>
                ))}
            </Timeline>

        </div>
    );
}