import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import EducationSkills from './components/EducationSkills';
import ExperienceProjects from './components/ExperienceProjects';
import Extracurriculars from './components/Extracurriculars';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/about" component={About} />
          <Route path="/education-skills" component={EducationSkills} />
          <Route path="/experience-projects" component={ExperienceProjects} />
          <Route path="/extracurriculars" component={Extracurriculars} />
          <Route path="/contact" component={Footer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
