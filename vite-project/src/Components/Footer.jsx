import React, { useContext } from 'react';
import { GlobalContext } from './utils/global.context'; 

const Footer = () => {
  const { state } = useContext(GlobalContext);

  // Define a variable to hold the path to your image
  const logoPath = '../../images/DH.png'; 

  // Define a variable for dynamic styles based on the theme
  const logoStyle = {
    width: '200px', // Adjust the size as needed
    filter: state.theme === 'dark' ? 'invert(100%)' : 'none', // Invert colors for dark mode
    margin: '0 auto', // Center the logo
    display: 'block' // Ensure the logo is a block element to center it correctly
  };

  return (
    <footer>
      <p>Powered by</p>
      <img src={logoPath} alt='DH logo' style={logoStyle} />
    </footer>
  );
};

export default Footer;
