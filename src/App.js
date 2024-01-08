import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { NavbarContainer } from './styles/NavbarStyles'; // Adjust the path accordingly
import { HeroContainer } from './styles/HeroStyles'; // Adjust the path accordingly
import { AboutContainer } from './styles/AboutStyles'; // Adjust the path accordingly
import { ContactContainer } from './styles/ContactStyles'; // Adjust the path accordingly
import { FooterContainer } from './styles/FooterStyles'; // Adjust the path accordingly

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
        </Routes>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </div>
    </Router>
  );
}

export default App;
