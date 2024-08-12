import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import GetTouch1 from "../assets/getTouch1.svg"
import GetTouch2 from "../assets/getTouch2.svg"
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number').required('Phone number is required'),
  message: Yup.string().required('Message is required'),
});

const ContactForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
        <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
        <p className="text-gray-600 mb-8">Our friendly team would love to hear from you.</p>
        
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', phoneNumber: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
             <Form className="space-y-4">
             <div className="flex space-x-4">
               <div className="w-1/2">
                 <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                 <Field name="firstName" type="text" id="firstName" className="w-full p-2 border rounded" />
                 <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
               </div>
               <div className="w-1/2">
                 <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                 <Field name="lastName" type="text" id="lastName" className="w-full p-2 border rounded" />
                 <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
               </div>
             </div>
             <div>
               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
               <Field name="email" type="email" id="email" className="w-full p-2 border rounded" />
               <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
             </div>
             <div>
               <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
               <Field name="phoneNumber" type="tel" id="phoneNumber" className="w-full p-2 border rounded" />
               <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm mt-1" />
             </div>
             <div>
               <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
               <Field name="message" as="textarea" id="message" rows="4" className="w-full p-2 border rounded" />
               <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
             </div>
             <div className="text-sm text-gray-600">
               You agree to our friendly privacy policy.
             </div>
             <button type="submit" disabled={isSubmitting} className="w-full bg-blue text-white p-3 rounded font-semibold hover:bg-purple-700 transition duration-300">
               Send message
             </button>
           </Form>
          )}
        </Formik>
      </div>
      
      {/* Right side - Images */}
 
  <div className="bg-gray-100 rounded-lg p-8 relative flex flex-1 gap-4">
    {/* Container for top image */}
 
      <img 
        src={GetTouch1}
        alt="Collaborative App" 
        className="w-full absolute top-2 left-2 transform "
      />
    
    
    {/* Container for bottom image */}
 
      <img 
        src={GetTouch1}
        alt="App Features" 
        className="w-full absolute bottom-2 right-2 transform  "
      />
  
  </div>
 
      
      {/* Show more button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition duration-300">
          Show more →
        </button>
      </div>
    </div>
  );
};

export default ContactForm;