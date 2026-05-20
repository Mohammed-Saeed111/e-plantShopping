import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-header">
          <h1>About Paradise Nursery</h1>
          <p className="tagline">Bringing Nature Into Your Home</p>
        </div>

        <div className="about-sections">
          <section className="about-section">
            <div className="section-icon">🌱</div>
            <h2>Our Mission</h2>
            <p>
              At Paradise Nursery, we believe that every home deserves a touch of nature. 
              Our mission is to provide the highest quality indoor plants with expert guidance 
              to help you create your own personal paradise at home.
            </p>
          </section>

          <section className="about-section">
            <div className="section-icon">🌿</div>
            <h2>Quality Guarantee</h2>
            <p>
              We source our plants from trusted growers who share our commitment to excellence. 
              Every plant is carefully inspected and nurtured before it reaches your home to ensure 
              it arrives healthy and vibrant.
            </p>
          </section>

          <section className="about-section">
            <div className="section-icon">💚</div>
            <h2>Customer Care</h2>
            <p>
              Your satisfaction is our priority. We provide detailed care instructions with each 
              plant and are always available to answer any questions about plant care and maintenance.
            </p>
          </section>

          <section className="about-section">
            <div className="section-icon">🌍</div>
            <h2>Sustainability</h2>
            <p>
              We are committed to environmental responsibility. Our packaging is eco-friendly, 
              and we promote sustainable gardening practices to help preserve our planet for future generations.
            </p>
          </section>
        </div>

        <div className="about-features">
          <h2>Why Choose Paradise Nursery?</h2>
          <ul className="features-list">
            <li>✨ Premium quality plants from trusted sources</li>
            <li>📦 Free shipping on all orders over $50</li>
            <li>📚 Comprehensive care guides included with each plant</li>
            <li>💬 Expert customer support for all your plant questions</li>
            <li>🌱 Eco-friendly and sustainable packaging</li>
            <li>🔄 Plant replacement guarantee within 14 days</li>
            <li>🎁 Special discounts for bulk orders</li>
            <li>👥 Community of plant lovers and tips</li>
          </ul>
        </div>

        <div className="about-contact">
          <h2>Get In Touch</h2>
          <p>Have questions? We'd love to help!</p>
          <div className="contact-info">
            <p>📧 Email: <strong>hello@paradisenursery.com</strong></p>
            <p>📞 Phone: <strong>1-800-PLANTS-1</strong></p>
            <p>🕐 Hours: Mon-Fri 9AM-6PM EST</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
