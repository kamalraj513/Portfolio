import React from 'react'
import './About.css'
import theme_pattern from '../assets/theme_pattern.svg'


const About = () => {
  return (
    <div id="about" className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className="about-sections">
        
        <div className="about-right">
          <div className="about-para">
            <p>Recent Computer Science graduate with hands-on experience in building web applications using Java, JavaScript, React.js, HTML, and CSS. Proficient in developing responsive user interfaces and implementing full-stack solutions.</p>
            <p>Strong foundation in Object-Oriented Programming and Relational Database Management Systems. Skilled in using JDBC, J2EE, Hibernate, Spring, and MySQL for backend development and data handling.</p>
            <p>Known for strong analytical abilities, logical thinking, and effective communication skills. Eager to contribute to real-world projects and continuously improve through learning and collaboration.</p>
          </div>
          <div className="about-skills">
            <div className="about-sks"><p>HTML & CSS</p><hr  id="one"  /><p>90%</p></div>
             <div  className="about-sks"><p>JavaScript</p><hr id="two"/><p>75%</p></div>
              <div  className="about-sks"><p>React Js</p><hr id="three"/><p>70%</p></div>
               <div  className="about-sks"><p>SQL</p><hr id="four"/><p>80%</p></div>
                <div  className="about-sks"><p>Java</p><hr id="five" /><p>95%</p></div>
                 <div  className="about-sks"><p>Advanced Java</p><hr id="six" /><p>70%</p></div>
                  <div className="about-sks"><p>Hibernate</p><hr id="seven"/><p>65%</p></div>
                   <div  className="about-sks"><p>Spring</p><hr id="eight" /><p>60%</p></div>

          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achieve">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
         <div className="about-achieve">
          <h1>250+</h1>
          <p>PROBLEMS SOLVED IN TAI PLATFORM ON JAVA</p>
        </div>
          <hr/>
          <div className="about-achieve">
          <h1>9+</h1>
          <p>CAMPS ATTENDED IN NCC</p>
        </div>
          
      </div>
    </div>
  )
}

export default About
