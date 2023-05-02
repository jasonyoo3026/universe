import React, { useState } from "react";

const Signup = () => {
  const [university, setUniversity] = useState("");

  const handleUniversityChange = (event) => {
    setUniversity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your other form fields go here */}
      <label htmlFor="university">University:</label>
      <select
        id="university"
        name="university"
        value={university}
        onChange={handleUniversityChange}
      >
        <option value="">Select a university</option>
        {universities.map((uni) => (
          <option key={uni} value={uni}>
            {uni}
          </option>
        ))}
      </select>
      <button type="submit">Sign up</button>
    </form>
  );
};

export default Signup;
