import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ id, name, username }) => {
  const navigate = useNavigate();

  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    const newFav = { id, name, username };
    if (!favs.some(fav => fav.id === id)) {
      favs.push(newFav);
      localStorage.setItem('favorites', JSON.stringify(favs));
    }
    // Optionally, provide feedback or update state
  };

  return (
    <div className="card" onClick={() => navigate(`/dentist/${id}`)}>
      <div>
        <h3>{name}</h3>
        <p>@{username}</p>
        <p>ID: {id}</p>
      </div>
      <button onClick={(e) => {
        e.stopPropagation(); // Prevent the navigation
        addFav();
      }} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
