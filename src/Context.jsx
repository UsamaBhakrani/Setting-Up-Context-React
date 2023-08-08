import { createContext, useContext } from "react";

const NavContext = createContext();

const Context = ({ children }) => {
  const value = {
    name: "Usama",
    age: 28,
  };
  return (
    <NavContext.Provider value={{ value }}>{children}</NavContext.Provider>
  );
};

export const useNavContext = () => {
  return useContext(NavContext);
};

export default Context;
