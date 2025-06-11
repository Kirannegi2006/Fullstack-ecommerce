import React, { createContext, useState } from 'react';
import all_product from '../Components/assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[all_product[index].id] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId, size) => {
    setCartItems((prev) => {
      const prevQty = prev[itemId]?.quantity || 0;
      return {
        ...prev,
        [itemId]: {
          quantity: prevQty + 1,
          size: size,
        },
      };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[itemId];
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId]?.quantity > 0) {
        const itemInfo = all_product.find(product => product.id === Number(itemId));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[itemId].quantity;
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const itemId in cartItems) {
      const cartItem = cartItems[itemId];
      if (cartItem && cartItem.quantity > 0) {
        totalItem += cartItem.quantity;
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
