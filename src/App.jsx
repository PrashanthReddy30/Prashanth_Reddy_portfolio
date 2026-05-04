import React from 'react';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import MovieWall from './components/MovieWall';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen font-sans">
      <Navbar />
      <div className="fixed inset-0 pointer-events-none z-0">
        <ParticleBackground />
      </div>
      
      <main className="relative z-10 flex flex-col items-center pt-24">
        <div id="home" className="w-full"><Hero /></div>
        <div id="about" className="w-full"><About /></div>
        <div id="movies" className="w-full"><MovieWall /></div>
        <div id="journey" className="w-full"><Timeline /></div>
        <div id="skills" className="w-full"><Skills /></div>
        <div id="education" className="w-full"><Education /></div>
        <Contact />
      </main>
    </div>
  );
}

export default App;
