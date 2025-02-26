import React from "react";
import { Link } from "react-router-dom";

const Clubs = () => {
  const clubs = ["Music Club", "Tech Club", "Sports Club"];

  return (
    <div>
      <h2>University Clubs</h2>
      <ul>
        {clubs.map((club, index) => (
          <li key={index}>
            <Link to={`/clubs/${club.toLowerCase()}`}>{club}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clubs;
