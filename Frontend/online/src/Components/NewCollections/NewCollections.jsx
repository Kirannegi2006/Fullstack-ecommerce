import React from 'react';
import './NewCollections.css';
import new_collection from '../assets/new_collections';
import Item from '../Item/Item';
import { useNavigate } from 'react-router-dom';

export default function NewCollections() {
  const navigate = useNavigate();

  const handleItemClick = () => {
    window.scrollTo(0, 0);
    navigate('/register');
  };

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className='collections'>
        {new_collection.map((item, i) => (
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
