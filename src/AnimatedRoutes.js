import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import EducationSkills from './components/EducationSkills';
import ExperienceProjects from './components/ExperienceProjects';
import Extracurriculars from './components/Extracurriculars';

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 0.8,
  },
};

const pageTransition = {
  duration: 0.25,
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Hero />
          </motion.div>
        } />
        <Route path="/about" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <About />
          </motion.div>
        } />
        <Route path="/education-skills" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <EducationSkills />
          </motion.div>
        } />
        <Route path="/experience-projects" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <ExperienceProjects />
          </motion.div>
        } />
        <Route path="/extracurriculars" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Extracurriculars />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
