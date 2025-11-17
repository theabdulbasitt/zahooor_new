import './Cases.css';

function Cases() {
  const cases = [
    {
      id: 1,
      title: 'Complete Smile Makeover',
      category: 'Cosmetic Dentistry',
      description: 'Full smile transformation with porcelain veneers and professional whitening. Patient achieved natural-looking, bright smile.',
      duration: '3 Weeks',
      procedure: 'Veneers + Whitening',
      age: '32 Years'
    },
    {
      id: 2,
      title: 'Full Arch Dental Implants',
      category: 'Restorative',
      description: 'Complete upper arch restoration using premium dental implants. Patient regained full function and confidence.',
      duration: '6 Months',
      procedure: 'Implant Restoration',
      age: '58 Years'
    },
    {
      id: 3,
      title: 'Invisalign Orthodontics',
      category: 'Orthodontics',
      description: 'Corrected severe crowding and misalignment using clear aligners. No metal braces required.',
      duration: '14 Months',
      procedure: 'Clear Aligners',
      age: '28 Years'
    },
    {
      id: 4,
      title: 'Professional Teeth Whitening',
      category: 'Cosmetic',
      description: 'In-office whitening treatment achieving 8 shades lighter. Safe and effective results in one visit.',
      duration: '1 Hour',
      procedure: 'Laser Whitening',
      age: '35 Years'
    },
    {
      id: 5,
      title: 'Porcelain Veneers',
      category: 'Cosmetic',
      description: 'Custom-designed veneers to correct chips, gaps, and discoloration. Natural and durable results.',
      duration: '2 Weeks',
      procedure: '8 Veneers',
      age: '41 Years'
    },
    {
      id: 6,
      title: 'Full Mouth Reconstruction',
      category: 'Complex Care',
      description: 'Comprehensive treatment combining implants, crowns, and veneers. Complete oral health restoration.',
      duration: '10 Months',
      procedure: 'Multi-Treatment',
      age: '55 Years'
    }
  ];

  return (
    <div className="cases">
      <div className="cases-container">
        <div className="cases-header">
          <h2 className="section-title">Our Cases</h2>
          <h3 className="cases-subtitle">Real Patient Transformations</h3>
          <p className="cases-description">
            Life-changing results showcasing our commitment to excellence and personalized care.
          </p>
        </div>
        <div className="cases-grid">
          {cases.map((caseItem) => (
            <div key={caseItem.id} className="case-card">
              <div className="case-images">
                <div className="case-image-wrapper">
                  <div className="image-placeholder">
                    <span className="placeholder-icon">📷</span>
                    <span className="placeholder-text">Before Photo</span>
                  </div>
                  <span className="image-label before">BEFORE</span>
                </div>
                <div className="case-image-wrapper">
                  <div className="image-placeholder">
                    <span className="placeholder-icon">📷</span>
                    <span className="placeholder-text">After Photo</span>
                  </div>
                  <span className="image-label after">AFTER</span>
                </div>
                <div className="case-divider"></div>
              </div>
              <div className="case-content">
                <div className="case-header">
                  <div className="case-category">{caseItem.category}</div>
                </div>
                <h4 className="case-title">{caseItem.title}</h4>
                <p className="case-description">{caseItem.description}</p>
                <div className="case-details">
                  <div className="case-detail-item">
                    <span className="detail-label">Duration</span>
                    <span className="detail-value">{caseItem.duration}</span>
                  </div>
                  <div className="case-detail-item">
                    <span className="detail-label">Procedure</span>
                    <span className="detail-value">{caseItem.procedure}</span>
                  </div>
                  <div className="case-detail-item">
                    <span className="detail-label">Patient Age</span>
                    <span className="detail-value">{caseItem.age}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cases-cta">
          <h3 className="cta-title">Need Dental Care Products?</h3>
          <p className="cta-description">Check out our premium dental tools and products</p>
          <button className="shop-cta-btn" onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}>
            Visit Our Shop
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cases;
