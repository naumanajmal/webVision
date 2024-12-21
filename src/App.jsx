import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CaseStudy from './Pages/CaseStudy';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Portfolio from './Pages/Portfolio';
const App = () => {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case_study" element={<CaseStudy />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>


  )
}

export default App