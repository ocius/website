import React, { useReducer } from 'react';

const NavContext = React.createContext({
  leftNavIsOpen: false,
  switcherIsOpen: false
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'open':
      return { ...state, [action.nav]: true };
    case 'close':
      return { ...state, [action.nav]: false };
    default:
      return { ...state, [action.nav]: !state[action.nav] };
  }
};
export const NavContextProvider = ({ children }) => {
  const [{ leftNavIsOpen, switcherIsOpen }, dispatch] = useReducer(reducer, {
    leftNavIsOpen: false,
    switcherIsOpen: false
  });

  const toggleNavState = (nav, type) => {
    dispatch({ nav, type });
  };

  return (
    <NavContext.Provider
      value={{
        leftNavIsOpen,
        switcherIsOpen,
        toggleNavState
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;
