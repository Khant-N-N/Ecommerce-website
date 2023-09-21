import { useCallback, useEffect, useState } from "react";

const useFetchData = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProduct] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        // Handle non-200 status codes here
        throw new Error("Request failed with status: " + response.status);
      }
      const data = await response.json();
      setProduct(data.products);
      setLoading(false);
    } catch (error) {
      console.log("error in fetch data", error.message);
      setError(error.message);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  return { loading, products, error };
};

export default useFetchData;
