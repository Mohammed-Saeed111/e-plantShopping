import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
import { plants } from '../data/plants';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState(new Set());

  // Get unique categories
  const categories = [...new Set(plants.map(plant => plant.category))];

  const handleAddToCart = (plant) => {
    dispatch(addItem({
      id: plant.id,
      name: plant.name,
      price: plant.price,
      image: plant.image
    }));

    // Disable the button temporarily
    setAddedItems(new Set([...addedItems, plant.id]));
    
    // Re-enable button after 1.5 seconds
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(plant.id);
        return newSet;
      });
    }, 1500);
  };

  return (
    <div className="products-container">
      <div className="products-header">
        <h1>Our Plant Collection</h1>
        <p>Explore our beautiful selection of indoor plants</p>
      </div>

      {categories.map(category => (
        <div key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="products-grid">
            {plants
              .filter(plant => plant.category === category)
              .map(plant => (
                <div key={plant.id} className="product-card">
                  <div className="product-image-wrapper">
                    <img 
                      src={plant.image} 
                      alt={plant.name}
                      className="product-image"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x300?text=' + plant.name;
                      }}
                    />
                  </div>
                  
                  <div className="product-info">
                    <h3 className="product-name">{plant.name}</h3>
                    <p className="product-description">{plant.description}</p>
                    
                    <div className="product-footer">
                      <span className="product-price">${plant.price.toFixed(2)}</span>
                      <button
                        className={`add-to-cart-btn ${addedItems.has(plant.id) ? 'added' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={addedItems.has(plant.id)}
                      >
                        {addedItems.has(plant.id) ? '✓ Added' : '🛒 Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
