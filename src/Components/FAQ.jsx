import React, { useState } from 'react';
import SmallStart from "../assets/small-start.svg"
import LargeStart from "../assets/large-start.svg"
const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
    return (
        <div className="mb-4 bg-lightBlurbg rounded-lg shadow-sm">
            <button
                className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                onClick={toggleOpen}
            >
                <span className="font-semibold">{question}</span>
                <span className={`text-blue text-2xl transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}>
                    {isOpen ? (<span className='bg-gray-300 px-2 rounded-md text-blue'>-</span>) : (<span className='bg-blue  text-white px-2 rounded-md' >+</span>)}
                </span>
            </button>
            {isOpen && (
                <div className="p-4 pt-0 text-gray-600 text-xs">
                    {answer}
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqData = [
        {
            question: "How do I make a yearly payment?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        },
        {
            question: "What are the benefits I would get?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            question: "What kind of support do you provide?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            question: "How this technology works?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            question: "Can I transfer my existing website to your hosting service?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            question: "How this technology works?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
    ];

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="container mx-auto px-4 py-16 flex flex-col items-center">
            <div className=" px-10 pr-16 py-4 relative w-3/5">
                {/* Top-left star */}
                <h2 className="text-4xl md:text-3xl font-bold  text-center">
                    Frequently Asked <span className="text-blue">Questions</span>
                </h2>

                <div className="absolute top-0 left-0 text-blue">
                    <img src={LargeStart}></img>
                </div>
                <span className="absolute bottom-1/3 right-0 text-blue">
                    <img src={SmallStart}></img>
                </span>
            </div>
            <div>

                <p className="text-xs text-gray-600 text-center mb-8 relative">
                    Here are the steps taken to deliver you a outstanding web design project
                    {/* Bottom-right star */}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqData.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        toggleOpen={() => toggleQuestion(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQ;