import './Contact.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
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
    bayarea: {
      name: 'ZA Dental Clinic',
      address: '1st Floor, Islamabad Plaza, Main Fateh Jhang Road',
      city: 'Near Post Office, Ternol, Islamabad',
      phone: '03120158027',
      hours: '9AM (Sobh) to 6PM (Sham)',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.434178226035!2d72.9080329!3d33.645910199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df97f1b0966283%3A0x29d999823ac0b1e1!2sZA%20Dental%20Clinic!5e0!3m2!1sen!2s!4v1763560523348!5m2!1sen!2s'
    }
  };

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
          
          <div className="locations-grid">
            {/* Downtown Location Card */}
            <div className="location-card">
              <div className="location-details">
                <h4 className="location-name">{locations.downtown.name}</h4>
                <div className="location-info-grid">
                  <div className="location-info-item">
                    <div className="info-icon">📍</div>
                    <div>
                      <p className="info-label">Address</p>
                      <p className="info-value">{locations.downtown.address}<br />{locations.downtown.city}</p>
                    </div>
                  </div>
                  <div className="location-info-item">
                    <div className="info-icon">📞</div>
                    <div>
                      <p className="info-label">Phone</p>
                      <p className="info-value">{locations.downtown.phone}</p>
                    </div>
                  </div>
                  <div className="location-info-item">
                    <div className="info-icon">🕒</div>
                    <div>
                      <p className="info-label">Hours</p>
                      <p className="info-value">{locations.downtown.hours}</p>
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
                  src={locations.downtown.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '20px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${locations.downtown.name}`}
                ></iframe>
              </div>
            </div>

            {/* Bay Area Location Card */}
            <div className="location-card">
              <div className="location-details">
                <h4 className="location-name">{locations.bayarea.name}</h4>
                <div className="location-info-grid">
                  <div className="location-info-item">
                    <div className="info-icon">📍</div>
                    <div>
                      <p className="info-label">Address</p>
                      <p className="info-value">{locations.bayarea.address}<br />{locations.bayarea.city}</p>
                    </div>
                  </div>
                  <div className="location-info-item">
                    <div className="info-icon">📞</div>
                    <div>
                      <p className="info-label">Phone</p>
                      <p className="info-value">{locations.bayarea.phone}</p>
                    </div>
                  </div>
                  <div className="location-info-item">
                    <div className="info-icon">🕒</div>
                    <div>
                      <p className="info-label">Hours</p>
                      <p className="info-value">{locations.bayarea.hours}</p>
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
                  src={locations.bayarea.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '20px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${locations.bayarea.name}`}
                ></iframe>
              </div>
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
                  <option value="dcapital">D.Capital Dental Clinic</option>
                  <option value="za">ZA Dental Clinic</option>
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
