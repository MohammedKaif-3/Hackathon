import React from "react";

const Career = () => {
  const jobs = [
    { title: "Software Engineer", company: "Google" },
    { title: "Data Analyst", company: "Amazon" },
  ];

  return (
    <div>
      <h2>Job Openings</h2>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job.title} - {job.company}</li>
        ))}
      </ul>
    </div>
  );
};

export default Career;
