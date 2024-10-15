import axios from "axios";
import React, { useState, useEffect } from "react";
import { apiBaseUrl } from "../constants/api";

const useFetch = (uri, query) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const executeQuery = async () => {
    if (!uri) {
      setIsLoading(false);
      setError("Error fetching data");
      console.log("Error fetching data");
      return;
    }

    try {
      const response = await axios.get(`${apiBaseUrl}${uri}`, {
        ...query,
      });
      setData(response.data);

      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    executeQuery();
  }, []);

  const refetch = async () => {
    setIsLoading(true);
    executeQuery();
  };

  return { data, error, isLoading, refetch };
};

export default useFetch;
