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
  const addToCart = (product) => {
    // setCardItems([...cartItems, product]); 1.yöntem
    setCardItems((prevItems) => [...prevItems, product]); //öncekileri al ona product ı ekle
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
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
