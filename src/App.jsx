import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
        <Navbar></Navbar>
       
          <div id="home" ><Hero/></div>
          <div id="about"><About/></div> 
          <div id="education"><Education/></div>
          <div id="projects"><MyWork/></div>
          <div id="contact"><Contact/></div>

        
        <Footer></Footer>
    </>
  );
};

export default App;
