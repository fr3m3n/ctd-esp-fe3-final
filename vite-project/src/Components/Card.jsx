import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import doctorImage from '../../images/doctor.jpg'; // Adjust the path if necessary

const Card = ({ id, name, username, reloadFavorites }) => {
  const navigate = useNavigate();
  
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some(fav => fav.id === id));
  }, [id]);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      favorites = favorites.filter(fav => fav.id !== id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(false);
      alert(`${name} has been removed from favorites.`); // Alert user of removal
    } else {
      favorites.push({ id, name, username });
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
      alert(`${name} has been added to favorites.`); // Alert user of addition
    }

    if (reloadFavorites && typeof reloadFavorites === 'function') {
      reloadFavorites();
    }
  };

  return (
    <div className="card" onClick={() => navigate(`/dentist/${id}`)}>
      <img src={doctorImage} alt="Doctor" style={{ width: '100px', borderRadius: '50%' }} />
      <div>
        <h3>{name}</h3>
        <p>@{username}</p>
        <p>ID: {id}</p>
      </div>
      <button onClick={toggleFavorite} className="favButton">
        {isFavorite ? '❌' : '⭐'}
      </button>
    </div>
  );
};

export default Card;
