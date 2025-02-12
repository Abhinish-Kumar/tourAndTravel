import './Card.css';
import { useState } from "react";

const Card = ({
  heading,
  price,
  location,
  rating,
  image,
  duration,
  activities,
  highlights,
  groupSize,
  difficulty,
  ageRange,
}) => {
  const [flag, setFlag] = useState(false); // Initial state to toggle overlay

  // Toggle the flag state
  function update() {
    setFlag(prevFlag => !prevFlag);
  }

  return (
    <div className="tour-card">
      {/* Main Image */}
      <img 
        className="tour-card__image" 
        src={image || "https://cdn.tourradar.com/s3/tour/1500x800/238487_6381080aad83a.jpg"} 
        alt={heading || "Tour Image"} 
      />

      <div className="tour-card__content">
        {/* Title */}
        <h2 className="tour-card__title">{heading}</h2>

        {/* Price */}
        <p className="tour-card__price">{price}</p>

        {/* Duration */}
        <p className="tour-card__duration">{duration}</p>

        {/* Rating */}
        <p className="tour-card__rating">Rating: {rating}⭐</p>

        {/* Group Size */}
        <p className="tour-card__group-size"><strong>Group Size:</strong> {groupSize}</p>

        {/* Difficulty */}
        <p className="tour-card__difficulty"><strong>Difficulty:</strong> {difficulty}</p>

        {/* Age Range */}
        <p className="tour-card__age-range"><strong>Age Range:</strong> {ageRange}</p>
      </div>

      {/* Button to toggle overlay */}
      <button onClick={update}>View Details</button>

      {/* Overlay Box */}
      {flag && (
        <div className="overLayBox">
          <button onClick={update}>Close Overlay</button>
          <div>
          

{/* Displaying all the props inside the overlay */}

<img 
  src={image || "https://cdn.tourradar.com/s3/tour/1500x800/238487_6381080aad83a.jpg"} 
  alt={heading || "Tour Image"} 
  style={{ width: '100%', height: 'auto' }}
/>
 <h2>{heading}</h2>

<p><strong>Rating:</strong> {rating}⭐</p>
<p style={{color:"green"}}><strong >Price:</strong> {price}</p>
<p><strong>Location:</strong> {location}</p>
<p><strong>Duration:</strong> {duration}</p>
<p><strong>Activities:</strong> {activities}</p>
<p><strong>Highlights:</strong> {highlights}</p>
<p><strong>Group Size:</strong> {groupSize}</p>
<p><strong>Difficulty:</strong> {difficulty}</p>
<p><strong>Age Range:</strong> {ageRange}</p>
          </div>
         
        </div>
      )}
    </div>
  );
};

export default Card;
