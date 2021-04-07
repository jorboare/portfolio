import React from 'react';
import Navbar from './components/layout/navbar/Navbar'
import Features from './components/pages/myCode/MyCode'
import AboutMe from './components/pages/aboutMe/AboutMe'
import Technologies from './components/pages/technologies/Technologies'
import Projects from './components/pages/projects/Projects'
import Contact from './components/pages/contact/contact'
import Hero from './components/pages/hero/Hero'


function App() {



  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Features />
      <Technologies />
      <Projects />
      <Contact />

    </>
  );
}

export default App;
