import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./CartForm.css"

const CartForm = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const [shippingAddress, setShippingAddress] = useState('');
    const navigate = useNavigate();

      useEffect(() => {
        // axios.get('your-cart-products-api-endpoint').then((response) => {
        //   setCartProducts(response.data);
        // });

        const tempProducts = [
            {
              id: 1,
              name: 'Product 1',
              description: 'Description of Product 1.',
              price: 19.99,
            },
            {
              id: 2,
              name: 'Product 2',
              description: 'Description of Product 2.',
              price: 24.99,
            },
          ];
      
          setCartProducts(tempProducts);
      }, []);

    const handleProceedToBuy = () => {
        navigate('/shipping');
    };

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            <div className="cart-products">
                {cartProducts.map((product) => (
                    <div key={product.id} className="cart-product">
                        <img src={product.imageSrc} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Price: Rupees {product.price}</p>
                    </div>
                ))}
            </div>
            <button onClick={handleProceedToBuy}>Proceed to Buy</button>
        </div>
    );
};

export default CartForm;
