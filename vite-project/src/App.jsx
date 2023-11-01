import React, { useState, useEffect } from 'react';
import Card from './Components/Card';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Check form validity on every input change
  useEffect(() => {
    const validateUser = username.length >= 3 && !username.startsWith(' ');
    const validatePassword = password.length >= 6;
    setIsFormValid(validateUser && validatePassword);

    setUserError(validateUser ? '' : 'El usuario debe tener al menos 3 caracteres y no comenzar con un espacio.');
    setPasswordError(validatePassword ? '' : 'La contraseña debe tener al menos 6 caracteres.');
  }, [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setShowCard(true);
    }
  };

  // Add some styles to center the form
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh' // This assumes the parent of this component has a defined height
  };

  return (
    <div style={formStyle}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <input 
          id="username"
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Usuario" 
        />
        {userError && <p>{userError}</p>}

        <label htmlFor="password"></label>
        <input 
          id="password"
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Contraseña" 
        />
        {passwordError && <p>{passwordError}</p>}

        <button type="submit" disabled={!isFormValid}>Submit</button>
      </form>

      {showCard && <Card username={username} password={password} />}
    </div>
  );
}

export default App;
