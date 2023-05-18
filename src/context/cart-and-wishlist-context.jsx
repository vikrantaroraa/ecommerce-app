import { createContext, useContext, useReducer } from "react";
import cartAndWishlistReducer from "src/redux/reducers/cart-and-wishlist-reducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartAndWishlistReducer, {
    cart: [],
    wishlist: [],
  });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
