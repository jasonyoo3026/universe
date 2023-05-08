import React, { useContext } from "react";
import SearchHistoryContext from "../../SearchHistory.js";

const LeftBar = () => {
  const { searchHistory } = useContext(SearchHistoryContext);

  const keywordCounts = searchHistory.reduce((acc, keyword) => {
    acc[keyword] = (acc[keyword] || 0) + 1;
    return acc;
  }, {});

  const sortedKeywords = Object.entries(keywordCounts).sort(
    (a, b) => b[1] - a[1]
  );

  const topKeywords = sortedKeywords.slice(0, 10);

  return (
    <div className="left-bar">
      <h3>Top 10 Searched Keywords</h3>
      <ul>
        {topKeywords.map(([keyword, count], index) => (
          <li key={index}>
            {keyword}: {count} searches
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftBar;
