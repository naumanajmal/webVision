import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CaseStudy from './Pages/CaseStudy';

const App = () => {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case_study" element={<CaseStudy />} />
      </Routes>
    </Router>


  )
}

export default App