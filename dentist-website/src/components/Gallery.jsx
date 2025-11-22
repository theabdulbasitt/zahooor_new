import { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { 
      id: 1, 
      title: 'Our Clinic', 
      description: 'Modern dental care facility',
      image: '/1.jpeg'
    },
    { 
      id: 2, 
      title: 'Our Clinic', 
      description: 'Professional treatment environment',
      image: '/2.jpeg'
    },
    { 
      id: 3, 
      title: 'Our Clinic', 
      description: 'State-of-the-art equipment',
      image: '/3.jpeg'
    },
    { 
      id: 4, 
      title: 'Our Clinic', 
      description: 'Comfortable patient care',
      image: '/4.jpeg'
    },
    { 
      id: 5, 
      title: 'Our Clinic', 
      description: 'Advanced dental technology',
      image: '/5.jpeg'
    },
    { 
      id: 6, 
      title: 'Our Clinic', 
      description: 'Welcoming atmosphere',
      image: '/6.jpeg'
    },
    { 
      id: 7, 
      title: 'Our Clinic', 
      description: 'Expert dental care',
      image: '/7.jpeg'
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
            <div key={item.id} className="gallery-item" onClick={() => setSelectedImage(item)}>
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

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>✕</button>
            <img src={selectedImage.image} alt={selectedImage.title} className="modal-image" />
            <div className="modal-info">
              <h3 className="modal-title">{selectedImage.title}</h3>
              <p className="modal-description">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
