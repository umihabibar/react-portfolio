import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import HeroImg2 from '../Components/HeroImg2'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT." text="I am a Software Developer"/>
      <Footer/>
    </div>
  )
}

export default About