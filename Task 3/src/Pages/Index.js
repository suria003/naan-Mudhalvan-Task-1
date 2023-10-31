import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from '../Components/Home';

const Index = () => {
  const [userData, setUserData] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // axios.get('your-user-details-api-endpoint').then((response) => {
    //   setUserData(response.data);
    // });
    // axios.get('your-products-api-endpoint').then((response) => {
    //   setProducts(response.data);
    // });

    setUserData({
        name:"SAKTHI KUMAR",
        email:"sakthi123msd@gmail.com",
        phone:"8190986951"
    })

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
  
      setProducts(tempProducts);
  }, []);

  return (
    <div>
      <Home user={userData} products={products} />
    </div>
  );
};

export default Index;
