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
                <span className="font-MonaSemiBold">{question}</span>
                <span className={`text-blue text-2xl transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}>
                    {isOpen ? (<span className='bg-gray-300 px-2 rounded-md text-blue'>-</span>) : (<span className='bg-blue  text-white px-2 rounded-md' >+</span>)}
                </span>
            </button>
            {isOpen && (
                <div className="p-4 pt-0 text-gray-600 text-xs font-Mona">
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
            question: "How long does it take to design and develop a website?",
            answer: "The timeline for designing and developing a website depends on the complexity and scope of the project. On average, it can take 4 to 8 weeks from the initial consultation to the launch."
        },
        {
            question: "What is your process for designing a website?",
            answer: "Our process involves understanding your business goals, target audience, and brand identity. We start with a consultation, followed by wireframing, design mockups, development, and finally, testing and deployment."
        },
        {
            question: "Do you offer custom website designs or use templates?",
            answer: "We specialize in custom website designs tailored to your brand and business needs. However, if you're looking for a quicker and more budget-friendly option, we can also work with premium templates."
        },
        {
            question: "Can you help with website maintenance after it's launched?",
            answer: "Yes, we offer ongoing website maintenance services to ensure your site remains secure, up-to-date, and optimized for performance. This includes regular updates, backups, and technical support."
        },
        {
            question: "Will my website be mobile-friendly?",
            answer: "Absolutely. All our websites are designed to be fully responsive, ensuring they look and function perfectly on all devices, including desktops, tablets, and smartphones."
        },
        {
            question: "Can you redesign my existing website?",
            answer: "Yes, we can redesign your existing website to improve its functionality, user experience, and visual appeal. Our goal is to make sure your website reflects your brand and meets modern web standards."
        },
        {
            question: "Do you provide SEO services?",
            answer: "Yes, we include basic SEO optimization in our website development packages. We can also offer advanced SEO services to help your site rank higher in search engine results and drive more traffic."
        },
        {
            question: "What platforms do you use for website development?",
            answer: "We work with a variety of platforms, including WordPress, Shopify, and custom-built solutions using technologies like React, Angular, and Django. We'll recommend the best platform based on your specific needs."
        },
    ];
    

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="container mx-auto px-4 py-16 flex flex-col items-center">
            <div className=" px-10 pr-16 py-4 relative md:w-1/2">
                {/* Top-left star */}
                <h2 className="text-4xl md:text-3xl font-bold  text-center font-MonaBold">
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

                <p className="text-xs text-gray-600 text-center mb-8 relative font-Mona">
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