import React from 'react';
import Navbar from './Navbar'
import Features from './components/features/Features'
import AboutMe from './components/aboutMe/AboutMe'
import Technologies from './components/technologies/Technologies'
import Reveal from './Reveal'
import Parallax1 from './Parallax1'
import Hero from './components/hero/Hero'


function App() {



  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Features />
      <Technologies />
      <Reveal />
      <Parallax1 />
      <Features />

    </>
  );
}

export default App;
