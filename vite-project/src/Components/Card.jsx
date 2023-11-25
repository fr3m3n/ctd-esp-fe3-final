import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ id, name, username, reloadFavorites }) => {
  const navigate = useNavigate();

  // State to track if the dentist is a favorite
  const [isFavorite, setIsFavorite] = useState(false);

  // Function to check if the current dentist is in the favorites upon component mount and when `id` changes
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some(fav => fav.id === id));
  }, [id]);

  const toggleFavorite = (e) => {
    e.stopPropagation(); // Prevent the navigation from card click
    e.preventDefault(); // Prevent default button behavior

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      // Filter out the current dentist from favorites
      favorites = favorites.filter(fav => fav.id !== id);
    } else {
      // Add the current dentist to favorites
      favorites.push({ id, name, username });
    }
    // Update localStorage and the state
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);

    // Call the reloadFavorites function passed from the parent component
    reloadFavorites();
  };

  return (
    <div className="card" onClick={() => navigate(`/dentist/${id}`)}>
      <div>
        <h3>{name}</h3>
        <p>@{username}</p>
        <p>ID: {id}</p>
      </div>
      <button onClick={toggleFavorite} className="favButton">
        {isFavorite ? 'Remove from favs' : 'Add to favs'}
      </button>
    </div>
  );
};

export default Card;
