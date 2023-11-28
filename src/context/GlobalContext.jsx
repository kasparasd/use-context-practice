import { createContext, useState } from "react";

export const initialContext = {
  isLogedIn: false,
  updateIsLogedIn: () => {},
};

export const GlobalContext = createContext(initialContext);

export function ContextWrapper(props) {
  const [isLogedIn, setIsLogedIn] = useState(initialContext.isLogedIn);

  function updateIsLogedIn(bool) {
    setIsLogedIn(bool);
  }

  const value = {
    isLogedIn,
    updateIsLogedIn,
  };

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}
