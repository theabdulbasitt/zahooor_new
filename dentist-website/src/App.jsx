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
// hello
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src="/logo_1.png" alt="DentalCare Logo" className="logo-image" />
          </div>
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
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/15551234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="whatsapp-icon">
          <path fill="currentColor" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.247 1.408 1.417-5.267-0.316-0.518c-1.318-2.166-2.011-4.652-2.011-7.195 0-7.369 5.996-13.365 13.365-13.365s13.365 5.996 13.365 13.365c0 7.369-5.996 13.365-13.365 13.365z"/>
          <path fill="currentColor" d="M23.404 19.545c-0.294-0.147-1.731-0.854-2-0.951-0.269-0.097-0.465-0.147-0.661 0.147s-0.759 0.951-0.93 1.147c-0.171 0.196-0.342 0.221-0.636 0.074-0.294-0.147-1.241-0.457-2.363-1.458-0.874-0.779-1.464-1.741-1.635-2.035s-0.018-0.452 0.129-0.598c0.132-0.132 0.294-0.342 0.441-0.513s0.196-0.294 0.294-0.49c0.098-0.196 0.049-0.368-0.025-0.515s-0.661-1.593-0.906-2.183c-0.239-0.575-0.482-0.497-0.661-0.506-0.171-0.009-0.367-0.011-0.563-0.011s-0.514 0.074-0.783 0.368c-0.269 0.294-1.026 1.003-1.026 2.447s1.051 2.839 1.198 3.035c0.147 0.196 2.073 3.166 5.023 4.439 0.702 0.303 1.25 0.485 1.677 0.621 0.705 0.224 1.347 0.192 1.854 0.116 0.565-0.084 1.731-0.708 1.975-1.392s0.244-1.27 0.171-1.392c-0.073-0.122-0.269-0.196-0.563-0.343z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
