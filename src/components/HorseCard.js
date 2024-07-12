import React from 'react';
import { Link } from 'react-router-dom';

const HorseCard = ({ horse }) => (
  <div className="horse-card">
    <img src={horse.image} alt={horse.name} />
    <h2>{horse.name}</h2>
    <Link to={`/book/${horse.name}`}>
      <button>Book Now</button>
    </Link>
  </div>
);

export default HorseCard;
