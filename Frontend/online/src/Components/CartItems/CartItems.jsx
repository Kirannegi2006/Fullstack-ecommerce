import React, { useState, useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';

export default function CartItems() {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

 
  const [promoCode, setPromoCode] = useState('');
  const [isPromoCodeValid, setIsPromoCodeValid] = useState(null); // To track promo code validity
  
 
  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  
  const handlePromoCodeSubmit = () => {
   
    if (promoCode === 'DISCOUNT10') {
      setIsPromoCodeValid(true);
      alert("Promo code applied successfully!");
    } else {
      setIsPromoCodeValid(false);
      alert("Invalid promo code.");
    }
  };

 
const handleProceedToCheckout = () => {
  if (getTotalCartAmount() > 0) {
    alert("Proceeding to checkout...");
  } else {
    alert("Your cart is empty. Please add some items before checkout.");
  }
};


  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
    {all_product.map((e) => {
  const item = cartItems[e.id];
  if (item && item.quantity > 0) {
    return (
      <div key={e.id}>
        <div className="cartitems-format-main">
          <img src={e.image} alt="" className='carticon-product-icon' />
          <p>{e.name}</p>
          <p>${e.new_price}</p>
          <button className='cartitems-quantity'>{item.quantity}</button>
          <p>${e.new_price * item.quantity}</p>
          <img src={remove_icon} onClick={() => { removeFromCart(e.id); }} alt="" />
          <p>{item.size}</p> {/* Show size here */}
        </div>
        <hr />
      </div>
    );
  }
  return null;
})}


      <div className="cartitems-down">
        <div className="cartiems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Fee</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
         <button onClick={handleProceedToCheckout}>
  PROCEED TO CHECKOUT
</button>
        </div>

        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-prombox">
            <input
              type="text"
              placeholder='Promo code'
              value={promoCode}
              onChange={handlePromoCodeChange}
            />
            <button onClick={handlePromoCodeSubmit}>Submit</button>
          </div>
          {isPromoCodeValid === false && <p style={{ color: 'red' }}>Invalid promo code.</p>}
          {isPromoCodeValid === true && <p style={{ color: 'green' }}>Promo code applied successfully!</p>}
        </div>
      </div>
    </div>
  );
}
