import React from 'react';
import './Popular.css';
import data_product from '../assets/data';
import Item from '../Item/Item';
import { useNavigate } from 'react-router-dom';

export default function Popular() {
  const navigate = useNavigate();

  const handleItemClick = () => {
    window.scrollTo(0, 0);
    navigate('/register');
  };

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => (
          <div key={i} onClick={handleItemClick}>
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
