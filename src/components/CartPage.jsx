import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { 
  selectCartItems, 
  selectCartTotalPrice, 
  removeItem, 
  increaseQuantity, 
  decreaseQuantity,
  clearCart 
} from '../features/cart/cartSlice';
import './CartPage.css';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleCheckout = () => {
    alert('🎉 Coming Soon!\n\nCheckout functionality will be available soon. Thank you for your interest in Paradise Nursery!');
  };

  const handleContinueShopping = () => {
    navigate('/plants');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your Cart is Empty</h2>
          <p>Start shopping and add some beautiful plants to your cart!</p>
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-content">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <p>Review and manage your items</p>
        </div>

        <div className="cart-items-section">
          <div className="cart-items-list">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/100x100?text=' + item.name;
                    }}
                  />
                </div>

                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="unit-price">Unit Price: <strong>${item.price.toFixed(2)}</strong></p>
                  <p className="item-total">Item Total: <strong>${(item.price * item.quantity).toFixed(2)}</strong></p>
                </div>

                <div className="cart-item-quantity">
                  <button 
                    className="qty-btn"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    −
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button 
                    className="qty-btn"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>

                <button 
                  className="delete-btn"
                  onClick={() => handleRemoveItem(item.id)}
                  title="Delete item"
                >
                  🗑️ Delete
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-header">
              <h2>Order Summary</h2>
            </div>

            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="summary-row">
                <span>Tax</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total">
                <span>Total Amount</span>
                <span className="total-amount">${totalPrice}</span>
              </div>
            </div>

            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>

            <button className="continue-shopping-btn" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
