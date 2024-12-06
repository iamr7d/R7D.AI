import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Research from './components/Research';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CreativeWorks from './components/CreativeWorks';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import ChatAssistant from './components/ChatAssistant';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main className="bg-black min-h-screen text-white">
        <section id="header">
          <Header />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="research">
          <Research />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="creative-works">
          <CreativeWorks />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <ChatAssistant />
    </div>
  );
}

export default App;
