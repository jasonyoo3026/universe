import { useState, useEffect } from "react";
import axios from "axios";

const useJobApiRequest = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobData = async () => {
    try {
      const response = await axios.get(
        "https://api.adzuna.com/v1/api/jobs/au/search/1",
        {
          params: {
            app_id: "604e5b41", // replace with your app_id
            app_key: "35598c0643f73d1f4f89f3f3f194ffc5", // replace with your app_key
            results_per_page: 5,
            what: "internship,graduate,entry-level",
            sort_by: "popularity",
          },
        }
      );
      setData(response.data.results);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobData();
  }, []);

  return { data, loading, error };
};

export default useJobApiRequest;
