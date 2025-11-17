import './Gallery.css';

function Gallery() {
  const galleryItems = [
    { 
      id: 1, 
      title: 'Modern Reception Area', 
      description: 'Welcoming entrance and waiting lounge',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80'
    },
    { 
      id: 2, 
      title: 'Advanced Treatment Room', 
      description: 'State-of-the-art dental equipment',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80'
    },
    { 
      id: 3, 
      title: 'Professional Team', 
      description: 'Expert dental care providers',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80'
    },
    { 
      id: 4, 
      title: 'Consultation Room', 
      description: 'Comfortable patient discussions',
      image: 'https://images.unsplash.com/photo-1629909615957-be38b9e8e4c4?w=800&q=80'
    }
  ];

  return (
    <div className="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="section-title">Gallery</h2>
          <h3 className="gallery-subtitle">Tour Our Modern Clinic</h3>
          <p className="gallery-description">
            State-of-the-art facilities with a comfortable, welcoming environment.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-image">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="clinic-image"
                />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h4 className="gallery-item-title">{item.title}</h4>
                    <p className="gallery-item-description">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
