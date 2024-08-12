import React from 'react';
import HeroSection from '../Components/CaseStudy/HeroSection';
import PerformanceEvaluationComponent from "../Components/CaseStudy/PerformanceEvaluationComponent"
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';
import Navbar from '../Components/NavBar';
function CaseStudy() {
    return (
        <div className='flex flex-col items-center gap-10'>
            <Navbar/>
            <HeroSection/>
            <PerformanceEvaluationComponent/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default CaseStudy;