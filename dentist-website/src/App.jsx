import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Cases from './components/Cases';
import Shop from './components/Shop';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">DentalCare</div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
          </button>
          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>
              About
            </button>
            <button onClick={() => scrollToSection('services')} className={activeSection === 'services' ? 'active' : ''}>
              Services
            </button>
            <button onClick={() => scrollToSection('cases')} className={activeSection === 'cases' ? 'active' : ''}>
              Cases
            </button>
            <button onClick={() => scrollToSection('shop')} className={activeSection === 'shop' ? 'active' : ''}>
              Shop
            </button>
            <button onClick={() => scrollToSection('gallery')} className={activeSection === 'gallery' ? 'active' : ''}>
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>
              Contact
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="cases">
          <Cases />
        </section>
        <section id="shop">
          <Shop />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
