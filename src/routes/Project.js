import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import HeroImg2 from '../Components/HeroImg2'
import PricingCart from '../Components/PricingCart'
import WorkCart from '../Components/WorkCart'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works"/>
      <WorkCart/>
      <PricingCart/>
      <Footer/>
    </div>
  )
}

export default Project;