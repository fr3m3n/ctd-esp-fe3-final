import React, { useState, useEffect, useContext } from 'react';
import Card from '../Components/Card';
import { GlobalContext } from "../Components/utils/global.context";

const Favs = () => {
  const [favorites, setFavorites] = useState([]);
  const { state } = useContext(GlobalContext);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className={`favs ${state.theme}`}>
      <h1>Favorite Dentists</h1>
      {favorites.length > 0 ? (
        <div className="card-grid">
          {favorites.map((dentist) => (
            <Card key={dentist.id} name={dentist.name} username={dentist.username} />
          ))}
        </div>
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default Favs;
