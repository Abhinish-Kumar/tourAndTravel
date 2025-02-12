import  { useState, useEffect } from "react";
import Card from "../Card/Card"; // Assuming Card is correctly imported
import "./TourBanner.css";

// Slideshow component
const Slideshow = () => {
  const images = [
    "https://www.trolleytours.com/wp-content/uploads/2016/07/trolley-tours-of-key-west.jpg",  // Replace with your actual image paths
    "https://thumbs.dreamstime.com/b/city-hall-tours-france-may-hotel-de-ville-built-architect-victor-laloux-jaures-square-128318367.jpg",
    "https://cdn.i-travelled.com/wp-content/uploads/2018/04/tours.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div id="imageBanner">
    
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`slide ${index === currentIndex ? "show" : ""}`}
        />
      ))}
    </div>
  );
};

function TourBanner({ trips }) {
  return (
    <div id="mainPage">
      <Slideshow />  {/* Added Slideshow component here */}

      <h1 className="headings">{trips.adventure.type}</h1>
      <p className="para">{trips.adventure.description}</p>

      <div className="cardContainer">
        {trips.adventure.exampleTours.map((tour, index) => {
          return (
            <Card
              key={index}
              heading={tour.name}
              price={tour.price}
              location={tour.description}
              rating={tour.rating}
              image={tour.image}
              duration={tour.duration}
              activities={tour.activities.join(", ")} // Convert array to string for display
              highlights={tour.highlights.join(", ")} // Convert array to string for display
              groupSize={tour.groupSize}
              difficulty={tour.difficulty}
              ageRange={tour.ageRange}
            />
          );
        })}
      </div>

      <h1>{trips.cultural.type}</h1>
      <p className="para">{trips.cultural.description}</p>

      <div className="cardContainer">
        {trips.cultural.exampleTours.map((tour, index) => {
          return (
            <Card
              key={index}
              heading={tour.name}
              price={tour.price}
              location={tour.description}
              rating={tour.rating}
              image={tour.image}
              duration={tour.duration}
              activities={tour.activities.join(", ")} // Convert array to string for display
              highlights={tour.highlights.join(", ")} // Convert array to string for display
              groupSize={tour.groupSize}
              difficulty={tour.difficulty}
              ageRange={tour.ageRange}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TourBanner;
