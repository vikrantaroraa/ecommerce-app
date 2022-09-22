import { createContext, useContext, useState } from "react";
import { ProductCardProps } from "../components/ProductCard/ProductCard.interface";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  return (
    <CartContext.Provider value={{ itemsInCart, setItemsInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
