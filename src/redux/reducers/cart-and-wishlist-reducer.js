const cartAndWishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const selectedColor = localStorage.getItem("selectedColor");
      const selectedSize = localStorage.getItem("selectedSize");
      const itemIndexInCart = state.cart.findIndex(
        (item) =>
          item.id === action.payload.id && item.selectedSize === selectedSize
      );
      if (itemIndexInCart === -1) {
        const updatedState = {
          ...state,
          cart: [
            ...state.cart,
            {
              ...action.payload,
              quantity: 1,
              selectedColor: selectedColor,
              selectedSize: selectedSize,
            },
          ],
        };
        localStorage.removeItem("selectedColor");
        localStorage.removeItem("selectedSize");
        return updatedState;
      }
      const updatedState = {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
      localStorage.removeItem("selectedColor");
      localStorage.removeItem("selectedSize");
      return updatedState;

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

export default cartAndWishlistReducer;
