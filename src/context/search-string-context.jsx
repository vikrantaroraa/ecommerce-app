import { createContext, useContext, useState } from "react";

export const SearchStringContext = createContext();

export const SearchStringProvider = ({ children }) => {
  const [searchString, setSearchString] = useState("");
  return (
    <SearchStringContext.Provider value={{ searchString, setSearchString }}>
      {children}
    </SearchStringContext.Provider>
  );
};

export const useSearchString = () => {
  return useContext(SearchStringContext);
};
