import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from "../Components/utils/global.context";

const Detail = () => {
  const [dentist, setDentist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = useParams();
  const { state } = useContext(GlobalContext);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Dentist not found');
        }
        return response.json();
      })
      .then((data) => {
        setDentist(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={`detail ${state.theme}`}>
      <h1>Detail: {dentist.name}</h1>
      <p>Email: {dentist.email}</p>
      <p>Phone: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
    </div>
  );
};

export default Detail;
