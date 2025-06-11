import React, { useContext, useEffect, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

export default function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);

  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOption, setSortOption] = useState("default");

  // Filter and sort whenever products or sort option changes
  useEffect(() => {
    let filtered = all_product.filter(item => item.category === props.category);

    switch (sortOption) {
      case "low-to-high":
        filtered.sort((a, b) => a.new_price - b.new_price);
        break;
      case "high-to-low":
        filtered.sort((a, b) => b.new_price - a.new_price);
        break;
      case "a-z":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "z-a":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    setSortedProducts(filtered);
  }, [all_product, props.category, sortOption]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="shop-category">
      <img className="shop-category-banner" src={props.banner} alt="Category Banner" />

      <div className="shop-category-header">
        <p>
          <span>Showing 1-12</span> out of {sortedProducts.length} products
        </p>
        <div className="shop-category-sort">
          Sort by:
          <select onChange={handleSortChange} value={sortOption}>
            <option value="default">Default</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
            <option value="a-z">Name: A-Z</option>
            <option value="z-a">Name: Z-A</option>
          </select>
        </div>
      </div>

      <div className="shop-category-products">
        {sortedProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      {/* <div className='shopcategory-loadmore'>
        Explore More
      </div> */}
    </div>
  );
}
