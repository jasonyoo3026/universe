import React from "react";

const JobList = ({ job }) => {
  return (
    <div>
      <h4>{job.title}</h4>
      <p>{job.description}</p>
      <p>
        <a href={job.redirect_url} target="_blank" rel="noreferrer">
          View Job
        </a>
      </p>
    </div>
  );
};

export default JobList;
