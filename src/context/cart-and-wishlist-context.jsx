import { createContext, useContext, useReducer } from "react";

// const productList = [
//   {
//     id: 1,
//     name: "kala chasma",
//     price: 1000,
//     quantity: 0,
//   },

//   {
//     id: 2,
//     name: "laal chhadi",
//     price: 500,
//     quantity: 0,
//   },

//   {
//     id: 3,
//     name: "jalebi",
//     price: 50,
//     quantity: 0,
//   },

//   {
//     id: 4,
//     name: "japani joota",
//     price: 10000,
//     quantity: 0,
//   },
// ];

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

const cartAndWishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemIndexInCart = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndexInCart === -1) {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "ADD_TO_WISHLIST":
      const itemIndexInWishlist = state.wishlist.findIndex(
        (item) => item.id === action.payload.id
      );
      return {
        ...state,
        wishlist:
          itemIndexInWishlist === -1
            ? [...state.wishlist, action.payload]
            : [...state.wishlist],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
      };

    case "MOVE_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case "MOVE_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
        wishlist: state.wishlist.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return { state };
  }
};
