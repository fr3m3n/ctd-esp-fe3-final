import React from 'react';

function Card({ username, password }) {
  return (
    <div>
      <h3>Login</h3>
      <p>User: {username}</p>
      <p>Password: {password}</p>
    </div>
  );
}

export default Card;
