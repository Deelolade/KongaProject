import React, { createContext, useState, useContext,useEffect } from 'react';
import data from '../Api/products'
import { useLocation,useNavigate } from 'react-router-dom';

const CartContext = createContext();

export const CartProvider =({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCounter, setCartCounter] = useState(1);
  const [counterValue, setCounterValue] = useState(0);
  
  const addToCart = (item) => {
    setCart((prevcart)=>[...prevcart, item]);
  };
  const increment = () => {
    setCartCounter(prev => prev + 1);
  };
  const decrement = () => {
    setCartCounter(prev => Math.max(prev - 1, 1)); 
  };
  const navigate = useNavigate();
  const handleAddToCart = () => {
    setCounterValue(prev => prev + cartCounter);
    navigate('/shoppingcart');
};
const location = useLocation();
useEffect(() => {
  setCartCounter(1); 
}, [location]);

useEffect(() => {
  window.scrollTo(0, 0); // Scroll to the top of the page
}, [location]); 

  return (
    <CartContext.Provider value={{ cart, addToCart,data,setCart,cartCounter,counterValue,increment,decrement,handleAddToCart}}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart =()=>   useContext(CartContext);

