import React from "react";

const Alumni = () => {
  const alumniList = [
    { name: "John Doe", position: "CEO at XYZ" },
    { name: "Jane Smith", position: "Data Scientist at Meta" },
  ];

  return (
    <div>
      <h2>Alumni Network</h2>
      <ul>
        {alumniList.map((alumni, index) => (
          <li key={index}>{alumni.name} - {alumni.position}</li>
        ))}
      </ul>
    </div>
  );
};

export default Alumni;
