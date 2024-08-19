import React from 'react';
import Navbar from '../Components/NavBar';
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';
import Main from '../Components/AboutUs/Main';
import UniqueSolutions from '../Components/UniqueSolutions';
function AboutUs() {


    return (
        <div className='flex flex-col items-center gap-20 pt-10'>
            <Navbar />
            <main className="pt-10">
                <UniqueSolutions />
                <Main />
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
}

export default AboutUs;