import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-image">
          <div className="image-placeholder">
            <div className="placeholder-icon">👨‍⚕️</div>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Happy Patients</div>
            </div>
          </div>
        </div>
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <h3 className="about-subtitle">Transforming Smiles with Precision & Care</h3>
          <p className="about-text">
            With 15+ years of experience, I provide exceptional dental care using the latest 
            technology. My approach combines artistry with science for outstanding results.
          </p>
          <p className="about-text">
            Every patient deserves personalized attention and comfort. I'm committed to 
            helping you achieve optimal oral health and a confident smile.
          </p>
          <div className="credentials">
            <div className="credential-item">
              <span className="credential-icon">🎓</span>
              <span>DDS, Harvard School of Dental Medicine</span>
            </div>
            <div className="credential-item">
              <span className="credential-icon">🏆</span>
              <span>Board Certified Specialist</span>
            </div>
            <div className="credential-item">
              <span className="credential-icon">⭐</span>
              <span>Member, American Dental Association</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
