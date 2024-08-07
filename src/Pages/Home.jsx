import React from 'react'
import Navbar from '../Components/NavBar'
import HeroSection from '../Components/HeroSection'
import ServicesComponent from '../Components/ServicesComponent'
import TimeLine from '../Components/Timeline'
import DigitalPioneersHero from '../Components/DigitalPioneersHero'
import UniqueSolutions from '../Components/UniqueSolutions'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ServicesComponent/>
      <DigitalPioneersHero/>
      <UniqueSolutions/>
      <TimeLine/>
    </div>
  )
}

export default Home