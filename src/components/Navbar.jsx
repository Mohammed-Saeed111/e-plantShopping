import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartTotalCount } from '../features/cart/cartSlice';
import './Navbar.css';

const Navbar = () => {
  const cartCount = useSelector(selectCartTotalCount);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">🌿</span>
          Paradise Nursery
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/plants" className="nav-link">Plants</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About Us</Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link cart-link">
              🛒 Cart
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
