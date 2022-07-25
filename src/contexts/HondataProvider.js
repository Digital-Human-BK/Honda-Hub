import { useState, createContext } from 'react';

export const HondataContext = createContext();

export const HondataProvider = ({ children }) => {
  const [hondata, setHondata] = useState({});

  const onFetch = (newData) => {
    setHondata(newData);
  };

  return (
    <HondataContext.Provider value={{ hondata, onFetch }}>
      {children}
    </HondataContext.Provider>
  );
};
