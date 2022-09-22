import { createContext, useContext, useState } from "react";

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [itemsInWishList, setItemsInWishList] = useState([]);
  return (
    <WishListContext.Provider value={{ itemsInWishList, setItemsInWishList }}>
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => {
  return useContext(WishListContext);
};
