import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import { NavbarContainer } from './styles/NavbarStyles';
import { HeroContainer } from './styles/HeroStyles';
import { AboutContainer } from './styles/AboutStyles';
import { ContactContainer } from './styles/ContactStyles';
import { FooterContainer } from './styles/FooterStyles';
import { ProjectsContainer } from './styles/ProjectsStyles'; // Add this line

const App = () => {
  return (
    <Router>
      <div>
        <NavbarContainer>
          <Navbar />
        </NavbarContainer>
        <Routes>
          <Route path="/" element={<HeroContainer><Hero /></HeroContainer>} />
          <Route path="/about" element={<AboutContainer><About /></AboutContainer>} />
          <Route path="/contact" element={<ContactContainer><Contact /></ContactContainer>} />
          <Route path="/projects" element={<ProjectsContainer><Projects /></ProjectsContainer>} /> {/* Add this line */}
        </Routes>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </div>
    </Router>
  );
}

export default App;
