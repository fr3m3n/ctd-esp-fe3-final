import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { GlobalProvider } from './Components/utils/global.context'; // Import GlobalProvider
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider> 
        <App />
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
