import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token) {
      navigate('/signin');
      return;
    }

    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/signin');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="nav-content">
          <h1 className="logo">🌾 FarmKonnect</h1>
          <div className="nav-right">
            <span className="user-name">Welcome, {user.name}!</span>
            <span className="user-badge">{user.role}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <div className="welcome-section">
          <h2>Welcome to FarmKonnect! 🌱</h2>
          <p>Your AI-Powered Agricultural Marketplace</p>
          
          <div className="user-info-card">
            <h3>Account Information</h3>
            <div className="info-row">
              <span className="info-label">Name:</span>
              <span className="info-value">{user.name}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Email:</span>
              <span className="info-value">{user.email}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Role:</span>
              <span className="info-value">{user.role}</span>
            </div>
            <div className="info-row">
              <span className="info-label">User ID:</span>
              <span className="info-value">{user.id}</span>
            </div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <h4>🛒 Browse Products</h4>
              <p>Explore fresh agricultural products from local farmers</p>
            </div>
            <div className="feature-card">
              <h4>🤖 AI Assistant</h4>
              <p>Get smart recommendations powered by AI</p>
            </div>
            <div className="feature-card">
              <h4>📊 Analytics</h4>
              <p>Track your orders and market trends</p>
            </div>
            <div className="feature-card">
              <h4>💬 Connect</h4>
              <p>Message directly with farmers and buyers</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
