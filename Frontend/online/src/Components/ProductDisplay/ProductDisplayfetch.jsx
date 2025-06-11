import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductDisplay.css';

export default function ProductDisplay() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products", error));
  }, []);

  return (
    <div className="productdisplay">
      {products.map(product => (
        <div key={product.id} className="productdisplay-card">
          <img src={product.image} alt={product.name} />
          <h1>{product.name}</h1>
          <p>Category: {product.category}</p>
          <p><del>${product.oldPrice}</del> <b>${product.newPrice}</b></p>
        </div>
      ))}
    </div>
  );
}
