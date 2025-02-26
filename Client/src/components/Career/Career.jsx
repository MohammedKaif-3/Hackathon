import React, { useState, useEffect } from "react";
import "./Career.css";

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("https://www.arbeitnow.com/api/job-board-api");
        const data = await response.json();
        console.log("Fetched Jobs:", data); // Debugging
        setJobs(data.data || []); // Extract job listings
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Filter jobs based on the search query (case insensitive)
  const filteredJobs = jobs.filter((job) =>
    `${job.title} ${job.company_name} ${job.location}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="career-container">
      <h2>Job Openings</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by job title, company, or location..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      {loading ? (
        <p>Loading jobs...</p>
      ) : filteredJobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <ul className="job-list">
          {filteredJobs.map((job, index) => (
            <li key={index} className="job-item">
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company_name || "N/A"}</p>
              <p><strong>Location:</strong> {job.location || "Remote"}</p>
              <a href={job.url} target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Career;
