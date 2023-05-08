import React from "react";
import { useJobApiRequest } from "../../requests/useJobApiReq";
import { JobList } from "../../components/Joblist";

const RightBar = () => {
  const { data, loading, error } = useJobApiRequest();

  if (loading) return null;

  return (
    <>
      <aside className="sidebar-container right">
        <h3 style={{ paddingLeft: "3rem" }}>Top 5 Internships/Graduate Jobs</h3>
        <div style={{ color: "black" }}>
          {data &&
            data.map((job) => <JobList key={job.id} job={job} />)}
        </div>
        {error && <div id="error">{error}</div>}
      </aside>
    </>
  );
};

export default RightBar;
