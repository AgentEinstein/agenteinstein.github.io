import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import StarryBackground from './components/StarryBackground.js';
import AnimatedRoutes from './AnimatedRoutes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <StarryBackground />
        <NavBar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
