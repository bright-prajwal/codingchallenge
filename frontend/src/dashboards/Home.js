// src/pages/Home.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>Welcome to the Store Rating App</h1>
//       <p>Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to continue.</p>
//     </div>
//   );
// }

// export default Home;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(4.5);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const categories = [
    { id: 1, name: 'Technology', icon: '💻' },
    { id: 2, name: 'Food', icon: '🍔' },
    { id: 3, name: 'Travel', icon: '✈️' },
    { id: 4, name: 'Books', icon: '📚' },
    { id: 5, name: 'Movies', icon: '🎬' },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Alex Johnson',
      position: 'Tech Enthusiast',
      content: 'This platform helped me make informed decisions about tech products.',
      rating: 5,
      image: 'https://placehold.co/100x100?text=AJ'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      position: 'Food Blogger',
      content: 'I rely on honest ratings to recommend restaurants. This site has never steered me wrong.',
      rating: 4,
      image: 'https://placehold.co/100x100?text=MG'
    },
    {
      id: 3,
      name: 'David Kim',
      position: 'Travel Writer',
      content: 'The travel ratings are so comprehensive!',
      rating: 5,
      image: 'https://placehold.co/100x100?text=DK'
    }
  ];

  const steps = [
    { id: 1, title: 'Search', description: 'Find what you want to rate' },
    { id: 2, title: 'Click Rate', description: 'Select the rate button' },
    { id: 3, title: 'Give Stars', description: 'Rate from 1 to 5 stars' },
    { id: 4, title: 'Leave Review', description: 'Add details about your experience' },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  const handleRate = (newRating) => {
    setUserRating(newRating);
    const newAverage = (rating * 100 + newRating * 10) / 110;
    setRating(parseFloat(newAverage.toFixed(1)));
  };

  return (
    <div className="rating-app">
      {/* Routing Message
      <div style={{ padding: '2rem' }}>
        <h1>Welcome to the Store Rating App</h1>
        <p>Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to continue.</p>
      </div> */}

      {/* Header */}
      <header className="app-header">
        <div className="container">
          <div className="logo">
            <img src="https://placehold.co/150x50?text=RateIt" alt="RateIt logo" />
          </div>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Top Rated</a></li>
              <li><a href="#">About</a></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Rate, Review, Repeat</h1>
            <p>Join millions of users sharing their opinions and experiences with products, services, and more.</p>
            <div className="hero-actions">
              <a href="#" className="btn-primary">Start Rating</a>
              <a href="#" className="btn-secondary">Learn More</a>
            </div>
          </div>
          <div className="hero-rating">
            <div className="rating-display">
              <div className="stars">
                {[...Array(5)].map((_, i) => {
                  const ratingValue = i + 1;
                  return (
                    <span
                      key={i}
                      className={`star ${ratingValue <= (hoverRating || userRating) ? 'active' : ''}`}
                      onMouseEnter={() => setHoverRating(ratingValue)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => handleRate(ratingValue)}
                    >
                      ★
                    </span>
                  );
                })}
              </div>
              <div className="rating-value">{rating.toFixed(1)}</div>
              <div className="rating-count">Based on 1,204 reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2>Top Categories</h2>
          <div className="category-tabs">
            <button className={`tab ${activeCategory === 'All' ? 'active' : ''}`} onClick={() => setActiveCategory('All')}>
              All
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                className={`tab ${activeCategory === category.name ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.name)}
              >
                <span className="category-icon">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          <div className="category-content">
            {activeCategory === 'All' ? (
              <div className="all-categories">
                {categories.map(category => (
                  <div key={category.id} className="category-card">
                    <div className="category-icon-large">{category.icon}</div>
                    <h3>{category.name}</h3>
                    <p>Explore top rated items in this category</p>
                    <a href="#" className="btn-link">View All</a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="category-details">
                <h3>Top Rated in {activeCategory}</h3>
                <div className="top-rated-items">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="rated-item">
                      <img src={`https://placehold.co/200x200?text=${activeCategory}+${i + 1}`} alt={`Top rated item in ${activeCategory}`} />
                      <div className="item-info">
                        <h4>{activeCategory} Item {i + 1}</h4>
                        <div className="item-rating">★★★★☆ 4.5</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2>What People Are Saying</h2>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? 'active' : ''}>★</span>
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.position}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for weekly highlights and top reviews</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
