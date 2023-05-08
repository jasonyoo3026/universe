import React, { useState, useMemo } from "react";
import SearchHistoryContext from "../../SearchHistory.js";

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearch = () => {
    setSearchHistory([...searchHistory, searchInput]);
    setSearchInput("");
  };

  const contextValue = useMemo(() => ({ searchHistory }), [searchHistory]);

  return (
    <SearchHistoryContext.Provider value={contextValue}>
      <div className="search-container">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </SearchHistoryContext.Provider>
  );
};

export default SearchPage;
