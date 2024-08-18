import React from 'react'
import Navbar from '../Components/NavBar'
import HeroSection from '../Components/HeroSection'
import ServicesComponent from '../Components/ServicesComponent'
import TimeLine from '../Components/Timeline'
import DigitalPioneersHero from '../Components/DigitalPioneersHero'
import UniqueSolutions from '../Components/UniqueSolutions'
import Projects from '../Components/Projects'
import FAQ from '../Components/FAQ'
import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <div className='  '>
      <Navbar/>
      <main  className =  "pt-10  flex flex-col items-center">
      <HeroSection/>
      <ServicesComponent/>
      <DigitalPioneersHero/>
      <UniqueSolutions/>
      <TimeLine/>
      <Projects/>
      <FAQ/>
      <ContactForm/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home