import React, { useState, useEffect, useContext } from 'react';
import Card from '../Components/Card';
import { GlobalContext } from "../Components/utils/global.context";

const Favs = () => {
  const [favorites, setFavorites] = useState([]);
  const { state } = useContext(GlobalContext);

  // Function to reload favorites from local storage and update state
  const reloadFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  };

  useEffect(() => {
    // Set up an event listener for local storage changes
    window.addEventListener('storage', reloadFavorites);

    // Initial load of favorites
    reloadFavorites();

    // Clean up the event listener when the component is unmounted
    return () => window.removeEventListener('storage', reloadFavorites);
  }, []);

  return (
    <div className={`favs ${state.theme}`}>
      <h1>Favorite Dentists</h1>
      {favorites.length > 0 ? (
        <div className="card-grid">
          {favorites.map((dentist) => (
            // Pass reloadFavorites to Card so it can trigger a reload on toggle
            // Make sure to pass the 'id' prop to the Card component
            <Card 
              key={dentist.id} 
              id={dentist.id} 
              name={dentist.name} 
              username={dentist.username} 
              reloadFavorites={reloadFavorites} 
            />
          ))}
        </div>
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default Favs;
