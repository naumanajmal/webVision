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
    <div className="w-full  mx-auto px-4 flex justify-center items-center  py-10">
      
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