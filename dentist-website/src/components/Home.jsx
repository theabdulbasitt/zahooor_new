import { useState } from 'react';
import './Home.css';

function Home() {
  const [showLocations, setShowLocations] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
  };

  const locations = {
    downtown: {
      name: 'Downtown SF',
      address: '123 Dental Street',
      city: 'San Francisco, CA 94102',
      phone: '+1 (555) 123-4567',
      hours: 'Mon-Fri: 9AM - 6PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977736788845!2d-122.41941492346445!3d37.78825097197595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTransamerica%20Pyramid!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus'
    },
    paloalto: {
      name: 'Palo Alto',
      address: '456 Medical Plaza',
      city: 'Palo Alto, CA 94301',
      phone: '+1 (555) 987-6543',
      hours: 'Mon-Sat: 8AM - 7PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639407250446!2d-122.14301492347896!3d37.44448997208944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb28416493a7%3A0x3a5d3d5e8d5e5e5e!2sStanford%20University!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus'
    }
  };

  return (
    <div className="home">
      <div className="home-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Your Smile,<br />
            <span className="gradient-text">Our Mission</span>
          </h1>
          <p className="hero-subtitle">
            World-class dental care with cutting-edge technology and personalized treatment.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">Book Appointment</button>
            <button className="btn-secondary" onClick={() => setShowLocations(true)}>View Locations</button>
          </div>
        </div>
        <div className="hero-form-container">
          <form className="hero-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Schedule Your Visit</h3>
            <p className="form-subtitle">Get a free consultation today</p>
            <div className="form-field">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="form-field">
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <div className="form-field">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-field">
              <input type="date" required />
            </div>
            <div className="form-field">
              <input type="time" required />
            </div>
            <div className="form-field">
              <select required>
                <option value="">Choose Clinic Location</option>
                <option value="downtown">Downtown SF</option>
                <option value="paloalto">Palo Alto</option>
              </select>
            </div>
            <div className="form-field">
              <textarea placeholder="Message (Optional)" rows="3"></textarea>
            </div>
            <button type="submit" className="form-submit">Request Appointment</button>
          </form>
        </div>
      </div>

      {showLocations && (
        <div className="locations-modal" onClick={() => setShowLocations(false)}>
          <div className="locations-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="locations-modal-close" onClick={() => setShowLocations(false)}>✕</button>
            <h3 className="locations-modal-title">Our Locations</h3>
            <div className="locations-grid">
              {Object.values(locations).map((location, index) => (
                <div key={index} className="location-card">
                  <h4 className="location-name">{location.name}</h4>
                  <div className="location-details">
                    <div className="location-detail">
                      <span className="detail-icon">📍</span>
                      <div>
                        <p>{location.address}</p>
                        <p>{location.city}</p>
                      </div>
                    </div>
                    <div className="location-detail">
                      <span className="detail-icon">📞</span>
                      <p>{location.phone}</p>
                    </div>
                    <div className="location-detail">
                      <span className="detail-icon">🕒</span>
                      <p>{location.hours}</p>
                    </div>
                  </div>
                  <div className="location-map">
                    <iframe
                      src={location.mapUrl}
                      width="100%"
                      height="250"
                      style={{ border: 0, borderRadius: '12px' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${location.name}`}
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
