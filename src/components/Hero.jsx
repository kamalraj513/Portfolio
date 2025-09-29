import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile from '../assets/profile.jpg'


const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img src={profile} alt=''/>
      <h1><span>I am Kamalraj M Revankar,</span><br/> Full Stack Developer based in India</h1>
      <p><span></span>Java Full Stack Developer skilled in React and advanced Java concepts, building scalable and user-friendly web applications.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchorlink bar' offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className="hero-resume"><a href="https://drive.google.com/file/d/1yphrlKAqNdSZ9I9ulUPWv2-RcCx1Rixy/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">My Resume</a></div>
      </div>
    </div>
  )
}

export default Hero
