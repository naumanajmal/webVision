import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import GetTouch1 from "../assets/getTouch1.svg";
import GetTouch2 from "../assets/getTouch2.svg";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true); // Set submitting to true when starting
    
    fetch('https://khushiikids.herokuapp.com/contact/', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Form submitted successfully:', data);
        setIsSubmitted(true);
        alert('Thank you! Your message has been sent.');
        resetForm();
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
        alert('Sorry, there was an error sending your message. Please try again.');
      })
      .finally(() => {
        setSubmitting(false); // Ensure submitting is set to false regardless of outcome
      });
  };

  return (
    <div className="mx-auto px-4 flex flex-col lg:flex-row items-center">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
        <h2 className="text-3xl font-bold mb-4 font-MonaBold">Get in touch</h2>
        <p className="text-gray-600 mb-8 font-Mona">Our friendly team would love to hear from you.</p>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', phoneNumber: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <div className="w-full sm:w-1/2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1 font-MonaBold">First name</label>
                  <Field 
                    name="firstName" 
                    type="text" 
                    id="firstName" 
                    className="w-full p-3 border rounded font-Mona focus:ring-2 focus:ring-blue focus:border-transparent" 
                  />
                  <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1 font-Mona" />
                </div>
                <div className="w-full sm:w-1/2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1 font-MonaBold">Last name</label>
                  <Field 
                    name="lastName" 
                    type="text" 
                    id="lastName" 
                    className="w-full p-3 border rounded font-Mona focus:ring-2 focus:ring-blue focus:border-transparent" 
                  />
                  <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1 font-Mona" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-MonaBold">Email</label>
                <Field name="email" type="email" id="email" className="w-full p-3 border rounded font-Mona focus:ring-2 focus:ring-blue focus:border-transparent" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1 font-Mona" />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1 font-MonaBold">Phone number</label>
                <Field name="phoneNumber" type="tel" id="phoneNumber" className="w-full p-3 border rounded font-Mona focus:ring-2 focus:ring-blue focus:border-transparent" />
                <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm mt-1 font-Mona" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-MonaBold">Message</label>
                <Field name="message" as="textarea" id="message" rows="4" className="w-full p-3 border rounded font-Mona focus:ring-2 focus:ring-blue focus:border-transparent" />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1 font-Mona" />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className={`w-full p-3 rounded font-MonaBold transition duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue text-white hover:bg-blue/90'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      
      {/* Right side - Images */}
      <div className="rounded-lg p-8 flex-1 space-y-4 hidden md:block md:overflow-hidden ">
        <img 
          src={GetTouch2}
          alt="Collaborative App" 
          className="md:h-full"
        />
        <img 
          src={GetTouch1}
          alt="App Features" 
          className="md:h-full"
        />
      </div>
    </div>
  );
};

export default ContactForm;
