import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
    }
  };

  return (
    <div className="landing-page">
      <header className="hero">
        <div className="hero-content">
          <h1 className="title">Welcome to Best and Best</h1>
          <p className="subtitle">
            Your one-stop shop for top-tier products and services.
          </p>
          <button className="cta-button">Explore Now</button>
        </div>
      </header>

      <section className="features">
        <div className="feature-item">
          <h2>Top Quality</h2>
          <p>Only the best products selected for you.</p>
        </div>
        <div className="feature-item">
          <h2>Fast Delivery</h2>
          <p>Get your orders delivered at lightning speed.</p>
        </div>
        <div className="feature-item">
          <h2>24/7 Support</h2>
          <p>We’re always here to help you, no matter the time.</p>
        </div>
      </section>

      <section className="newsletter">
        <h2>Stay Updated</h2>
        <p>Join our mailing list to get the latest news and offers.</p>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
        {isSubscribed && <p>Thank you for subscribing!</p>}
      </section>

      <footer>
        <p>&copy; 2025 Best and Best. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
