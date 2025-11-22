import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-image">
          <div className="image-placeholder">
            <img src="/zahoor.jpeg" alt="Dr. Zahoor Ahmad" className="profile-photo" />
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10000+</div>
              <div className="stat-label">Happy Patients</div>
            </div>
          </div>
        </div>
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <h3 className="about-subtitle">Transforming Smiles with Precision & Care</h3>
          <p className="about-text">
            With 10+ years of experience, I provide exceptional dental care using the latest 
            technology. My approach combines artistry with science for outstanding results.
          </p>
          <p className="about-text">
            Every patient deserves personalized attention and comfort. I'm committed to 
            helping you achieve optimal oral health and a confident smile.
          </p>
          <div className="credentials">
            <div className="credential-item">
              <span className="credential-icon">🎓</span>
              <span>BDS, RDS (PIMS)</span>
            </div>
            <div className="credential-item">
              <span className="credential-icon">💎</span>
              <span>Cosmetic Dentist (ISB)</span>
            </div>
            <div className="credential-item">
              <span className="credential-icon">🦷</span>
              <span>C-IMPLANT (ISB)</span>
            </div>
            <div className="credential-item">
              <span className="credential-icon">🌍</span>
              <span>C- Promoting Oral Health in Primary Healthcare (WHO)</span>
            </div>
            <div className="credential-item">
              <span className="credential-icon">🏆</span>
              <span>Gold Medalist in Periodontology</span>
            </div>
            <div className="credential-item">
              <span className="credential-icon">⭐</span>
              <span>Registered Member of Pakistan Medical Commission/PMDC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
