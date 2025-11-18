import './Footer.css';

function Footer() {
  const scrollToSection = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/src/assets/logo_1.png" alt="DentalCare Logo" className="footer-logo-image" />
            </div>
            <p className="footer-tagline">
              Your trusted partner for world-class dental care. We combine advanced 
              technology with personalized treatment for exceptional results.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">📘</a>
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="Twitter">🐦</a>
              <a href="#" className="social-link" aria-label="LinkedIn">💼</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              <button onClick={() => scrollToSection('home')} className="footer-link">Home</button>
              <button onClick={() => scrollToSection('about')} className="footer-link">About Us</button>
              <button onClick={() => scrollToSection('services')} className="footer-link">Services</button>
              <button onClick={() => scrollToSection('cases')} className="footer-link">Cases</button>
              <button onClick={() => scrollToSection('shop')} className="footer-link">Shop</button>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <div className="footer-links">
              <a href="#" className="footer-link">Cosmetic Dentistry</a>
              <a href="#" className="footer-link">Dental Implants</a>
              <a href="#" className="footer-link">Orthodontics</a>
              <a href="#" className="footer-link">Preventive Care</a>
              <a href="#" className="footer-link">Emergency Care</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="footer-contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <div>Downtown SF</div>
                <div>123 Dental Street</div>
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="contact-icon">📞</span>
              <div>+1 (555) 123-4567</div>
            </div>
            <div className="footer-contact-item">
              <span className="contact-icon">✉️</span>
              <div>info@dentalcare.com</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 DentalCare. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
