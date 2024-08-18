import React from 'react';
import Navbar from '../Components/NavBar';
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';
function Portfolio() {
  
 
    return (
        <div className='flex flex-col items-center gap-10'>
            <Navbar/> 
            <main  className =  "pt-10">
            <Projects/>
            </main>
            <Footer/>
        </div>
    );
}

export default Portfolio;