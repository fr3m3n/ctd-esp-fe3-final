import React, { useState, useContext } from 'react';
import { GlobalContext } from "../Components/utils/global.context";

const Contact = () => {
  const { state } = useContext(GlobalContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const validateForm = () => {
    if (name.length <= 5) {
      setMessage('Name must be longer than 5 characters.');
      return false;
    }
    if (!email.includes('@')) {
      setMessage('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setMessage(`Thank you ${name}, we will contact you via email soon.`);
      // Perform additional submission tasks
    }
  };

  return (
    <div className={`contact ${state.theme}`}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Contact;
