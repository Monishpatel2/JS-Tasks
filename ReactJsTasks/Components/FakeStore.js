import React, { useEffect, useState } from 'react';
import '../FakeStore.css';

const FakeStore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="product-grid">
      <h1>Fake Store</h1>
      <div className="grid-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <button className="buy-button">Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FakeStore;
