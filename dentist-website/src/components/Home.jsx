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
      name: 'D.Capital Dental Clinic',
      address: 'Shop#6, Ground Floor, Jahangir Multiplex, Adjacent to Main gate Qaide Azam International Hospital',
      city: 'Main Peshawar GT Road, Golramor, Islamabad',
      phone: '03120158027 / 03244277067',
      hours: 'Evening: 4PM - 11PM | Morning: 11AM - 3PM (On Call)',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.2536043331997!2d72.9727111!3d33.624665799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df97000196a363%3A0xb706578acbb6dda2!2sD.Capital%20Dental%20Clinic!5e0!3m2!1sen!2s!4v1763560492623!5m2!1sen!2s'
    },
    paloalto: {
      name: 'ZA Dental Clinic',
      address: '1st Floor, Islamabad Plaza, Main Fateh Jhang Road',
      city: 'Near Post Office, Ternol, Islamabad',
      phone: '03120158027',
      hours: '9AM (Sobh) to 6PM (Sham)',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.434178226035!2d72.9080329!3d33.645910199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df97f1b0966283%3A0x29d999823ac0b1e1!2sZA%20Dental%20Clinic!5e0!3m2!1sen!2s!4v1763560523348!5m2!1sen!2s'
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
                <option value="dcapital">D.Capital Dental Clinic</option>
                <option value="za">ZA Dental Clinic</option>
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
