import React, { useEffect, useState } from 'react';
import axios from 'axios';

const List = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://cs464p564-frontend-api.vercel.app/api/countries')
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching countries:', err);
        setError('Failed to load countries');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Countries of South America</h1>
      <ul>
        {countries.map((country, index) => (
          <p key={index}>
            <img
              crossorigin="anonymous"
              src={country.flag_png}
              alt={country.flag_alt || 'Flag not available'}
              style={{ width: '150px', height: 'auto', marginLeft: '20px' }}
            />
            <strong>{country.name}</strong>
            {country.population ? (
              <p>Population: {country.population}</p>
            ) : (
              <p>Population data not available</p>
            )}
            {/* Additional country information can be included here */}
          </p>
        ))}
      </ul>
    </div>
  );
};

export default List;
