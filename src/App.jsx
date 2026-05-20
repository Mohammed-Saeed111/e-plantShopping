import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import AboutUs from './components/AboutUs';
import CartItem from './components/CartItem';
import './App.css';

function LandingPage() {
  const navigate = useNavigate();
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
    navigate('/plants');
  };

  return (
    <div
      className="background-image"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url("https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&h=600&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '2rem'
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 700 }}>
        Welcome to Paradise Nursery
      </h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '600px' }}>
        Transform Your Space with Beautiful Indoor Plants
      </p>
      <button
        onClick={handleGetStarted}
        style={{
          padding: '1rem 2.5rem',
          fontSize: '1.1rem',
          background: '#a4d65e',
          color: '#2d5016',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 700
        }}
      >
        Get Started
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;

