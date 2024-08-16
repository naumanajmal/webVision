import React from 'react';
import HeroSection from '../Components/CaseStudy/HeroSection';
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';
import Navbar from '../Components/NavBar';
import { useLocation } from 'react-router-dom';
import CaseStudyDescription from '../Components/CaseStudy/CaseStudyDescription';
function CaseStudy() {
    const location = useLocation();
    const { project } = location.state ;
 
    return (
        <div className='flex flex-col items-center gap-20'>
            <Navbar/>
            <HeroSection project = {project}/>
            <CaseStudyDescription project = {project}/>
            {/* <Projects/> */}
            <Footer/>
        </div>
    );
}

export default CaseStudy;