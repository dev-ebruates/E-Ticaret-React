import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCardItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // console.log(cartItems);
  const addToCart = (cartItem) => {
    // setCardItems([...cartItems, product]); 1.yöntem
    setCardItems((prevItems) => [...prevItems, 
      {...cartItem, 
        quantity: cartItem.quantity ? cartItem.quantity : 1,},
    ]); //öncekileri al ona product ı ekle
  };
  const removeFromCart =(itemId) =>{
    const filteredCartItems = cartItems.filter((cartItem)=>{
      return cartItem.id !== itemId;
    })
    setCardItems(filteredCartItems)
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node,
};
