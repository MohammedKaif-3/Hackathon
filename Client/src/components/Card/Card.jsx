import React from "react";
import "./Card.css"; // Ensure you have a CSS file for styling

const Card = ({ image, title, description, buttonText, onButtonClick }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={onButtonClick}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
