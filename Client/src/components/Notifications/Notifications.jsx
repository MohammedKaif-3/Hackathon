import React from "react";

const Notifications = () => {
  const notifications = [
    "New Exam Schedule Available",
    "Club Meeting at 5 PM",
    "Job Opening: Software Engineer"
  ];

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
