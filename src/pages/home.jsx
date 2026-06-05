import React from 'react'
import HeroSection from '../components/home/HeroSection.jsx'
import ServiceSection from '../components/home/ServiceSection.jsx'  
import About from '../components/home/About.jsx'
import Project from '../components/home/Project.jsx'

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <About />
      <Project />
    </div>
  )
}

export default Home