import './Services.css';

function Services() {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C8.5 2 6 4.5 6 8c0 2 1 3.5 2 4.5V18c0 1.1.9 2 2 2s2-.9 2-2v-5.5c1-1 2-2.5 2-4.5 0-3.5-2.5-6-6-6z"/>
          <path d="M8 8c0-2.2 1.8-4 4-4s4 1.8 4 4"/>
        </svg>
      ),
      title: 'Whitening'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="4" height="16" rx="1"/>
          <path d="M8 8h12M8 12h12M8 16h12"/>
        </svg>
      ),
      title: 'Cleaning'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3c-3.5 0-6 2.5-6 6 0 2.5 1.5 4.5 3 5.5v3.5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-3.5c1.5-1 3-3 3-5.5 0-3.5-2.5-6-6-6z"/>
          <circle cx="9" cy="8" r="1"/>
          <circle cx="15" cy="8" r="1"/>
          <path d="M9 11c.5.5 1.5 1 3 1s2.5-.5 3-1"/>
        </svg>
      ),
      title: 'Cosmetic'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
      title: 'Implants'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 10c0-2.8 2.2-5 5-5s5 2.2 5 5"/>
          <path d="M7 10v8c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-8"/>
          <rect x="9" y="8" width="2" height="8" rx="1"/>
          <rect x="13" y="8" width="2" height="8" rx="1"/>
        </svg>
      ),
      title: 'Braces'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C8.5 2 6 4.5 6 8v4c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V8c0-3.5-2.5-6-6-6z"/>
          <path d="M10 14v6c0 1.1.9 2 2 2s2-.9 2-2v-6"/>
          <line x1="12" y1="8" x2="12" y2="11"/>
        </svg>
      ),
      title: 'Root Canal'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="4"/>
          <path d="M12 12c-4 0-7 2-7 5v3h14v-3c0-3-3-5-7-5z"/>
          <path d="M16 8c0-1.5-.5-2.5-1-3"/>
        </svg>
      ),
      title: 'Pediatric'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Veneers'
    }
  ];

  return (
    <div className="services">
      <div className="services-header">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">Comprehensive dental care for your perfect smile</p>
      </div>
      
      <div className="services-carousel">
        <div className="services-track">
          {/* First set of services */}
          {services.map((service, index) => (
            <div key={`service-1-${index}`} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {services.map((service, index) => (
            <div key={`service-2-${index}`} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
