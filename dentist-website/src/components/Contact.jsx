import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [selectedLocation, setSelectedLocation] = useState('downtown');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  const locations = {
    downtown: {
      name: 'Downtown Location',
      address: '123 Dental Street',
      city: 'San Francisco, CA 94102',
      phone: '+1 (555) 123-4567',
      hours: 'Mon-Fri: 9AM - 6PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977736788845!2d-122.41941492346445!3d37.78825097197595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTransamerica%20Pyramid!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus'
    },
    bayarea: {
      name: 'Bay Area Location',
      address: '456 Medical Plaza',
      city: 'Palo Alto, CA 94301',
      phone: '+1 (555) 987-6543',
      hours: 'Mon-Sat: 8AM - 7PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639407250446!2d-122.14301492347896!3d37.44448997208944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb28416493a7%3A0x3a5d3d5e8d5e5e5e!2sStanford%20University!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus'
    }
  };

  const currentLocation = locations[selectedLocation];

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">Contact Me</h2>
          <h3 className="contact-subtitle">Let's Start Your Journey</h3>
          <p className="contact-description">
            Visit us at either location or schedule your consultation today.
          </p>
        </div>

        <div className="locations-section">
          <h3 className="locations-title">Our Locations</h3>
          <div className="location-tabs">
            <button 
              className={`location-tab ${selectedLocation === 'downtown' ? 'active' : ''}`}
              onClick={() => setSelectedLocation('downtown')}
            >
              📍 Downtown SF
            </button>
            <button 
              className={`location-tab ${selectedLocation === 'bayarea' ? 'active' : ''}`}
              onClick={() => setSelectedLocation('bayarea')}
            >
              📍 Palo Alto
            </button>
          </div>

          <div className="location-content">
            <div className="location-details">
              <h4 className="location-name">{currentLocation.name}</h4>
              <div className="location-info-grid">
                <div className="location-info-item">
                  <div className="info-icon">📍</div>
                  <div>
                    <p className="info-label">Address</p>
                    <p className="info-value">{currentLocation.address}<br />{currentLocation.city}</p>
                  </div>
                </div>
                <div className="location-info-item">
                  <div className="info-icon">📞</div>
                  <div>
                    <p className="info-label">Phone</p>
                    <p className="info-value">{currentLocation.phone}</p>
                  </div>
                </div>
                <div className="location-info-item">
                  <div className="info-icon">🕒</div>
                  <div>
                    <p className="info-label">Hours</p>
                    <p className="info-value">{currentLocation.hours}</p>
                  </div>
                </div>
                <div className="location-info-item">
                  <div className="info-icon">✉️</div>
                  <div>
                    <p className="info-label">Email</p>
                    <p className="info-value">info@dentalcare.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="map-container">
              <iframe
                src={currentLocation.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '20px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${currentLocation.name}`}
              ></iframe>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h3 className="form-title">Schedule Your Appointment</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Choose Clinic Location</option>
                  <option value="downtown">Downtown SF</option>
                  <option value="paloalto">Palo Alto</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input type="date" required />
              </div>
              <div className="form-group">
                <input type="time" required />
              </div>
            </div>
            <div className="form-group">
              <textarea placeholder="Message (Optional)" rows="4"></textarea>
            </div>
            <button type="submit" className="submit-btn">Request Appointment</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
