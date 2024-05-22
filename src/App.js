import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import EducationSkills from './components/EducationSkills';
import ExperienceProjects from './components/ExperienceProjects';
import Extracurriculars from './components/Extracurriculars';
import Footer from './components/Footer';
import StarryBackground from './components/StarryBackground.js';
import './App.css';

function App() {
  
  return (
    <Router>
      <div className="App">
      <StarryBackground />
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/education-skills" element={<EducationSkills />} />
            <Route path="/experience-projects" element={<ExperienceProjects />} />
            <Route path="/extracurriculars" element={<Extracurriculars />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
