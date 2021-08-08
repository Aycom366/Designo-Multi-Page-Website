import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [locate, setLocate] = useState({});
  const [isContactPage, setisContactPage] = useState(false);

  useEffect(() => {
    sliceName(locate);
  }, [locate]);

  //getting pageName slicing the "/"
  const sliceName = (location) => {
    const pathname = location.pathname;
    if (!pathname) return;
    else {
      const pageName = pathname.slice(1);
      if (pageName === 'contact') {
        setisContactPage(true);
      } else {
        setisContactPage(false);
      }
    }
  };

  const [openNavLinks, setOpenNavLinks] = useState(false);
  return (
    <AppContext.Provider
      value={{
        openNavLinks,
        setOpenNavLinks,
        locate,
        setLocate,
        isContactPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
