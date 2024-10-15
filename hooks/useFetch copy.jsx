import axios from "axios";
import React, { useState } from "react";

const useFetch = async (uri, method, query) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const executeQuery = async () => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        console.log("action called");
      }, 2000);
      //   if (method === "post") {
      //     const response = await axios.post(uri, query);
      //     console.log(response.data);
      //   } else if (method === "get") {
      //     const response = await axios.post(uri, query);
      //     console.log(response.data);
      //   }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  //   useEffect(() => {
  //     setIsLoading(true);
  //     executeQuery();
  //   }, []);

  return { data, error, isLoading, executeQuery };
};

export default useFetch;
