import React from "react";

const Timetable = () => {
  const schedule = [
    { day: "Monday", subject: "Mathematics", time: "10 AM" },
    { day: "Tuesday", subject: "Physics", time: "2 PM" },
  ];

  return (
    <div>
      <h2>Student Timetable</h2>
      <ul>
        {schedule.map((item, index) => (
          <li key={index}>{item.day} - {item.subject} ({item.time})</li>
        ))}
      </ul>
    </div>
  );
};

export default Timetable;
