
import React from 'react'
import '../component.css';
import IntroImage from '../assets/sabri-tuzcu-wunVFNvqhfE-unsplash.jpg'
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img src={IntroImage} className='into-img' alt="IntroImg"/>
        </div>
        <div className='content'>
            <p>HI, I'M A FREELANCER.</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/project" className="btn">Project</Link>
                <Link to="/project" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>

  )
}

export default HeroImg