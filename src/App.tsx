import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { ProfessionalProfiles } from './components/ProfessionalProfiles';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <ProfessionalProfiles />
      <Contact />
    </div>
  );
}

export default App;