import './Shop.css';

function Shop() {
  const products = [
    {
      id: 1,
      name: 'Electric Toothbrush Pro',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&q=80',
      description: 'Advanced sonic technology for superior cleaning',
      category: 'Oral Care'
    },
    {
      id: 2,
      name: 'Teeth Whitening Kit',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=500&q=80',
      description: 'Professional-grade whitening at home',
      category: 'Whitening'
    },
    {
      id: 3,
      name: 'Water Flosser',
      price: 69.99,
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&q=80',
      description: 'Deep clean between teeth and gums',
      category: 'Oral Care'
    },
    {
      id: 4,
      name: 'Dental Care Bundle',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&q=80',
      description: 'Complete oral hygiene solution',
      category: 'Bundles'
    },
    {
      id: 5,
      name: 'Night Guard',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&q=80',
      description: 'Custom-fit protection for teeth grinding',
      category: 'Protection'
    },
    {
      id: 6,
      name: 'Fluoride Mouthwash',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1629909615957-be38b9e8e4c4?w=500&q=80',
      description: 'Strengthens enamel and freshens breath',
      category: 'Oral Care'
    }
  ];

  const handleAddToCart = (product) => {
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div className="shop">
      <div className="shop-container">
        <div className="shop-header">
          <h2 className="section-title">Shop</h2>
          <h3 className="shop-subtitle">Premium Dental Products</h3>
          <p className="shop-description">
            Professional-grade dental care products recommended by our experts.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <span className="product-category">{product.category}</span>
              </div>
              <div className="product-info">
                <h4 className="product-name">{product.name}</h4>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">${product.price}</span>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
