import React, { createContext, useState, useContext, useEffect } from 'react';
import products from '../Api/products'; // Ensure your data structure has 'id' for each item
import { useLocation, useNavigate } from 'react-router-dom';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const addToCart = (item) => {
      setCart(prevCart => {
          const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
          if (existingItem) {
              return prevCart.map(cartItem => 
                  cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
              );
          }
          return [...prevCart, { ...item, quantity: item.quantity }];
      });
  };
const increment = (id) => {
  setCart(prevCart => prevCart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  ));
};

const decrement = (id) => {
  setCart(prevCart => prevCart.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
  ));
};
const getTotalItems = () => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};
const removeFromCart = (itemId) => {
  setCart(prevCart => prevCart.filter(item => item.id !== itemId));
};

useEffect(() => {
  window.scrollTo(0, 0); // Scroll to the top of the page
}, [location]); 

return (
  <CartContext.Provider value={{ cart, addToCart, products, setCart, decrement,increment,getTotalItems,removeFromCart }}>
      {children}
  </CartContext.Provider>
);
}

export const useCart = () => useContext(CartContext);
