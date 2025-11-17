import './Home.css';

function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
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
            <button className="btn-secondary">Learn More</button>
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
    </div>
  );
}

export default Home;
