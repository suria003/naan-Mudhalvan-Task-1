import React, { useState } from 'react';
import './Home.css';

const IndexForm = ({ user, products }) => {
  const [isUserDetailsVisible, setIsUserDetailsVisible] = useState(false);

  const addToCart = (productId) => {
    console.log(`Added product with ID ${productId} to the cart`);
  };

  const toggleUserDetails = () => {
    setIsUserDetailsVisible(!isUserDetailsVisible);
  };

  return (
    <div className="index-container">
      <nav className="navbar">
        <div className="left-section">
          <span className="app-name">EcommerceWebsite</span>
          <input type="text" placeholder="Search products" className="search-box" />
          <button className="search-button">Search</button>
        </div>
        <div className="right-section">
          <div className="user-info" onMouseEnter={toggleUserDetails} onMouseLeave={toggleUserDetails}>
            <span className="username">{user.name}</span>
            {isUserDetailsVisible && (
              <div className="user-details">
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Phone Number: {user.phone}</p>
              </div>
            )}
          </div>
          <button className="cart-button">Cart</button>
        </div>
      </nav>
      <h2>Welcome, {user.name}</h2>
      <div className="products">
        <p>Available Products:</p>
        {products.map((product) => (
          <div key={product.id} className="product">
           <div className="product-info">
              <h3>{product.name}</h3>
              <p>Description: {product.description}</p>
              <p>Price: Rupees {product.price}</p>
            </div>
            <div className="product-image">
              <img src={product.imageSrc} alt={product.name} />
            </div>
            <button onClick={() => addToCart(product.id)} className="add-to-cart-button">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexForm;
