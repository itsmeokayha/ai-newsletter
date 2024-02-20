import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Archive from './components/Archive';
import IssuePage from './components/IssuePage'; // Make sure to import IssuePage
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <ParticlesBackground />
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/archive/:issueId" element={<IssuePage />} /> {/* Dynamic route for individual issues */}
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
