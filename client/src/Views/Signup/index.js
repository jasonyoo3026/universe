import React, { useState, useEffect } from "react";
import axios from "axios";

const Signup = () => {
  const [university, setUniversity] = useState("");
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get("/api/universities");
        setUniversities(response.data);
      } catch (error) {
        console.error("Error fetching universities:", error);
      }
    };

    fetchUniversities();
  }, []);

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
          <option key={uni._id} value={uni.name}>
            {uni.name}
          </option>
        ))}
      </select>
      <button type="submit">Sign up</button>
    </form>
  );
};

export default Signup;
