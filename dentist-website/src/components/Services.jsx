import './Services.css';

function Services() {
  const services = [
    {
      id: 1,
      icon: '✨',
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with veneers, whitening, and bonding',
      features: ['Teeth Whitening', 'Porcelain Veneers', 'Smile Makeovers']
    },
    {
      id: 2,
      icon: '🦷',
      title: 'Dental Implants',
      description: 'Permanent solution for missing teeth with natural results',
      features: ['Single Implants', 'Full Arch Restoration', 'Implant Crowns']
    },
    {
      id: 3,
      icon: '😁',
      title: 'Orthodontics',
      description: 'Straighten your teeth with modern alignment solutions',
      features: ['Invisalign', 'Clear Aligners', 'Retainers']
    },
    {
      id: 4,
      icon: '🛡️',
      title: 'Preventive Care',
      description: 'Maintain optimal oral health with regular checkups',
      features: ['Cleanings', 'Exams', 'X-Rays']
    },
    {
      id: 5,
      icon: '👑',
      title: 'Crowns & Bridges',
      description: 'Restore damaged teeth with custom crowns',
      features: ['Porcelain Crowns', 'Dental Bridges', 'Same-Day Crowns']
    },
    {
      id: 6,
      icon: '🩺',
      title: 'Root Canal',
      description: 'Save infected teeth with gentle treatment',
      features: ['Endodontic Therapy', 'Pain Relief', 'Tooth Preservation']
    },
    {
      id: 7,
      icon: '💎',
      title: 'Teeth Whitening',
      description: 'Professional whitening for a brighter smile',
      features: ['In-Office Whitening', 'Take-Home Kits', 'Laser Whitening']
    },
    {
      id: 8,
      icon: '🦴',
      title: 'Oral Surgery',
      description: 'Expert surgical procedures and extractions',
      features: ['Wisdom Teeth', 'Extractions', 'Bone Grafting']
    }
  ];

  return (
    <div className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">Our Services</h2>
          <h3 className="services-subtitle">Comprehensive Dental Care</h3>
          <p className="services-description">
            Full range of dental services using the latest technology and techniques.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
