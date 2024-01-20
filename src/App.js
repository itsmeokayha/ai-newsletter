import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground'; // Import ParticlesBackground
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <ParticlesBackground /> {/* Add ParticlesBackground */}
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


