import { createContext, useContext, useState } from "react";

export const SidebarFilterContext = createContext();

export const SidebarFilterProvider = ({ children }) => {
  const [showSidebarFilter, setShowSidebarFilter] = useState(false);

  return (
    <SidebarFilterContext.Provider
      value={{ showSidebarFilter, setShowSidebarFilter }}
    >
      {children}
    </SidebarFilterContext.Provider>
  );
};

export const useSidebarFilter = () => {
  return useContext(SidebarFilterContext);
};
