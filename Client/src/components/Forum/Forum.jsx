import React from "react";
import { Link } from "react-router-dom";

const Forum = () => {
  const topics = ["Academics", "Events", "Clubs", "Placements"];

  return (
    <div>
      <h2>Discussion Forum</h2>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>
            <Link to={`/forum/${topic.toLowerCase()}`}>{topic}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forum;
