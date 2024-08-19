import React from 'react';
import Navbar from '../Components/NavBar';
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';
function ContactUs() {
  
 
    return (
        <div className='flex flex-col items-center gap-20'>
            <Navbar/> 
            <main  className =  "pt-32 flex flex-col items-center">
            <ContactForm/>
            </main>
            <Footer/>

        </div>
    );
}

export default ContactUs;