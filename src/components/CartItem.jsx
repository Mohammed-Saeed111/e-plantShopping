import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectCartItems,
  selectCartTotalPrice,
  removeItem,
  updateQuantity,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} from '../features/cart/cartSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleIncrement = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrement = (item) => {
    if (item.quantity <= 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(decreaseQuantity(item.id));
    }
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: Number(quantity) }));
  };

  const handleContinueShopping = () => {
    navigate('/plants');
  };

  const handleCheckout = () => {
    alert('🎉 Coming Soon!\n\nCheckout functionality will be available soon. Thank you for shopping at Paradise Nursery!');
  };

  const containerStyle = {
    maxWidth: '900px',
    margin: '2rem auto',
    padding: '0 1.5rem'
  };

  const titleStyle = {
    fontSize: '2rem',
    color: '#2d5016',
    marginBottom: '1.5rem',
    fontWeight: 700
  };

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    background: '#fff',
    borderRadius: '12px',
    padding: '1rem 1.5rem',
    marginBottom: '1rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    flexWrap: 'wrap'
  };

  const imgStyle = {
    width: '90px',
    height: '90px',
    objectFit: 'cover',
    borderRadius: '8px',
    flexShrink: 0
  };

  const infoStyle = {
    flex: 1
  };

  const nameStyle = {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#2d5016',
    marginBottom: '0.25rem'
  };

  const priceStyle = {
    color: '#4a7c59',
    fontWeight: 600
  };

  const qtyWrapStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const qtyBtnStyle = {
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    border: '2px solid #2d5016',
    background: 'white',
    color: '#2d5016',
    fontSize: '1.2rem',
    cursor: 'pointer',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const deleteBtnStyle = {
    background: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '0.9rem'
  };

  const summaryStyle = {
    background: '#2d5016',
    color: 'white',
    borderRadius: '12px',
    padding: '1.5rem 2rem',
    marginTop: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem'
  };

  const totalStyle = {
    fontSize: '1.5rem',
    fontWeight: 700
  };

  const btnGroupStyle = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  };

  const continueBtnStyle = {
    padding: '0.75rem 1.5rem',
    border: '2px solid white',
    background: 'transparent',
    color: 'white',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '1rem'
  };

  const checkoutBtnStyle = {
    padding: '0.75rem 1.5rem',
    background: '#a4d65e',
    color: '#2d5016',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 700,
    fontSize: '1rem'
  };

  if (cartItems.length === 0) {
    return (
      <div style={{ ...containerStyle, textAlign: 'center', marginTop: '5rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🛒</div>
        <h2 style={{ color: '#2d5016', marginBottom: '1rem' }}>Your Cart is Empty</h2>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          Start shopping and add some beautiful plants!
        </p>
        <button style={checkoutBtnStyle} onClick={handleContinueShopping}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>🛒 Shopping Cart</h1>

      {cartItems.map(item => (
        <div key={item.id} style={itemStyle}>
          <img
            src={item.image}
            alt={item.name}
            style={imgStyle}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/90x90?text=Plant';
            }}
          />

          <div style={infoStyle}>
            <p style={nameStyle}>{item.name}</p>
            <p style={priceStyle}>Unit Price: ${item.price.toFixed(2)}</p>
            <p style={{ color: '#888', fontSize: '0.95rem' }}>
              Item Total: <strong style={{ color: '#2d5016' }}>${(item.price * item.quantity).toFixed(2)}</strong>
            </p>
          </div>

          {/* Quantity Controls */}
          <div style={qtyWrapStyle}>
            <button style={qtyBtnStyle} onClick={() => handleDecrement(item)}>−</button>
            <span style={{ fontSize: '1.1rem', fontWeight: 700, minWidth: '2rem', textAlign: 'center' }}>
              {item.quantity}
            </span>
            <button style={qtyBtnStyle} onClick={() => handleIncrement(item.id)}>+</button>
          </div>

          {/* Delete Button */}
          <button style={deleteBtnStyle} onClick={() => handleRemoveItem(item.id)}>
            🗑️ Delete
          </button>
        </div>
      ))}

      {/* Total Amount Summary */}
      <div style={summaryStyle}>
        <div>
          <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.25rem' }}>Total Amount</p>
          <p style={totalStyle}>${totalPrice}</p>
        </div>
        <div style={btnGroupStyle}>
          <button style={continueBtnStyle} onClick={handleContinueShopping}>
            Continue Shopping
          </button>
          <button style={checkoutBtnStyle} onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
