import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from './utils/global.context';

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={state.theme}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Highlights</Link>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
