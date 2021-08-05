import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [openNavLinks, setOpenNavLinks] = useState(false);
  return (
    <AppContext.Provider
      value={{
        openNavLinks,
        setOpenNavLinks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
