import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Set background image from Unsplash
    const backgroundUrl = 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&h=600&fit=crop';
    setBackgroundImage(backgroundUrl);
  }, []);

  const handleGetStarted = () => {
    navigate('/plants');
  };

  return (
    <div 
      className="home-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="home-content">
        <h1 className="home-title">Paradise Nursery</h1>
        <p className="home-subtitle">Transform Your Space with Beautiful Indoor Plants</p>
        <p className="home-description">
          Discover our curated collection of healthy, vibrant plants perfect for your home or office. 
          Quality plants, expert care tips, and exceptional customer service.
        </p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
