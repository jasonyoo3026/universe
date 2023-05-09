import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TOP_KEYWORDS } from "../../utils/queries";

const LeftBar = () => {
  const { loading, error, data } = useQuery(GET_TOP_KEYWORDS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const topKeywords = data.getTopKeywords;

  return (
    <div className="left-bar">
      <h3>Top 10 Searched Keywords</h3>
      <ul>
        {topKeywords.map(({ keyword, count }, index) => (
          <li key={index}>
            {keyword}: {count} searches
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftBar;
