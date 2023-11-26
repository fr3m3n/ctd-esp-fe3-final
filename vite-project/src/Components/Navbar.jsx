import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from './utils/global.context';

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  // Determine the button text based on the current theme
  const themeButtonContent = state.theme === 'light' ? '🌙' : '☀️';
  const themeButtonLabel = state.theme === 'light' ? 'Dark Mode' : 'Light Mode';

  return (
    <nav className={`navbar ${state.theme}`}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      <button onClick={toggleTheme} className="theme-button" aria-label="Toggle Theme">
        {themeButtonContent} {themeButtonLabel}
      </button>
    </nav>
  );
};

export default Navbar;
