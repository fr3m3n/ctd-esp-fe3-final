import React, { createContext, useReducer, useMemo } from 'react';

const initialState = {
  theme: 'light', // Default theme
  users: [] // Data fetched from the API
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      // Toggle between 'light' and 'dark' themes
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'SET_USERS':
      // Set the users data
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

// Create the context
export const GlobalContext = createContext(initialState);

// Create the provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Memoize the context value to optimize performance
  const providerValue = useMemo(() => ({ state, dispatch }), [state]);

  // Provide the state and dispatch to the context
  return (
    <GlobalContext.Provider value={providerValue}>
      {children}
    </GlobalContext.Provider>
  );
};
