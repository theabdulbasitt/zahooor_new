import { useState } from 'react';
import './Cases.css';

function Cases() {
  const [selectedCase, setSelectedCase] = useState(null);

  const cases = [
    {
      id: 1,
      title: 'Complete Smile Makeover',
      category: 'Cosmetic Dentistry',
      description: 'Full smile transformation with porcelain veneers and professional whitening. Patient achieved natural-looking, bright smile.',
      fullDescription: 'This comprehensive smile makeover involved a combination of porcelain veneers and professional whitening treatment. The patient came to us with discolored and slightly misaligned teeth. After a thorough consultation and treatment planning, we designed custom veneers that perfectly matched the patient\'s facial features and desired aesthetic. The result was a stunning, natural-looking smile that boosted the patient\'s confidence significantly.',
      duration: '3 Weeks',
      procedure: 'Veneers + Whitening',
      age: '32 Years',
      treatmentSteps: ['Initial Consultation', 'Teeth Preparation', 'Temporary Veneers', 'Custom Veneer Fabrication', 'Final Placement', 'Professional Whitening']
    },
    {
      id: 2,
      title: 'Full Arch Dental Implants',
      category: 'Restorative',
      description: 'Complete upper arch restoration using premium dental implants. Patient regained full function and confidence.',
      fullDescription: 'This complex case involved replacing an entire upper arch with dental implants. The patient had been struggling with failing teeth and poor oral health for years. Using advanced 3D imaging and surgical planning, we placed multiple implants to support a fixed prosthetic arch. The patient now enjoys full chewing function and a beautiful, natural-looking smile that has transformed their quality of life.',
      duration: '6 Months',
      procedure: 'Implant Restoration',
      age: '58 Years',
      treatmentSteps: ['Comprehensive Evaluation', '3D CT Scan', 'Implant Placement Surgery', 'Healing Period', 'Abutment Placement', 'Final Prosthetic Delivery']
    },
    {
      id: 3,
      title: 'Invisalign Orthodontics',
      category: 'Orthodontics',
      description: 'Corrected severe crowding and misalignment using clear aligners. No metal braces required.',
      fullDescription: 'This orthodontic case addressed severe crowding and bite issues using Invisalign clear aligners. The patient wanted to straighten their teeth without the appearance of traditional metal braces. Through careful treatment planning and a series of custom aligners, we gradually moved the teeth into their ideal positions. The patient was thrilled with the discreet treatment process and the final results.',
      duration: '14 Months',
      procedure: 'Clear Aligners',
      age: '28 Years',
      treatmentSteps: ['Digital Scan', 'Treatment Planning', 'Custom Aligner Fabrication', 'Progress Monitoring', 'Refinement Aligners', 'Retention Phase']
    },
    {
      id: 4,
      title: 'Professional Teeth Whitening',
      category: 'Cosmetic',
      description: 'In-office whitening treatment achieving 8 shades lighter. Safe and effective results in one visit.',
      fullDescription: 'This professional whitening treatment delivered dramatic results in just one appointment. The patient had years of staining from coffee and tea consumption. Using our advanced laser whitening system, we safely lightened their teeth by 8 shades while protecting the gums and tooth enamel. The patient left our office with a brilliantly white smile and received detailed instructions for maintaining their results.',
      duration: '1 Hour',
      procedure: 'Laser Whitening',
      age: '35 Years',
      treatmentSteps: ['Shade Assessment', 'Gum Protection', 'Whitening Gel Application', 'Laser Activation', 'Multiple Cycles', 'Final Results & Care Instructions']
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
            <div key={caseItem.id} className="case-card" onClick={() => setSelectedCase(caseItem)}>
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
      </div>

      {selectedCase && (
        <div className="case-modal" onClick={() => setSelectedCase(null)}>
          <div className="case-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="case-modal-close" onClick={() => setSelectedCase(null)}>✕</button>
            
            <div className="case-modal-images">
              <div className="modal-image-wrapper">
                <div className="image-placeholder">
                  <span className="placeholder-icon">📷</span>
                  <span className="placeholder-text">Before Photo</span>
                </div>
                <span className="image-label before">BEFORE</span>
              </div>
              <div className="modal-image-wrapper">
                <div className="image-placeholder">
                  <span className="placeholder-icon">📷</span>
                  <span className="placeholder-text">After Photo</span>
                </div>
                <span className="image-label after">AFTER</span>
              </div>
            </div>

            <div className="case-modal-info">
              <div className="case-category">{selectedCase.category}</div>
              <h3 className="case-modal-title">{selectedCase.title}</h3>
              <p className="case-modal-description">{selectedCase.fullDescription}</p>
              
              <div className="case-modal-details">
                <div className="modal-detail-item">
                  <span className="detail-label">Duration</span>
                  <span className="detail-value">{selectedCase.duration}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="detail-label">Procedure</span>
                  <span className="detail-value">{selectedCase.procedure}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="detail-label">Patient Age</span>
                  <span className="detail-value">{selectedCase.age}</span>
                </div>
              </div>

              <div className="treatment-steps">
                <h4 className="steps-title">Treatment Steps</h4>
                <ol className="steps-list">
                  {selectedCase.treatmentSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cases;
