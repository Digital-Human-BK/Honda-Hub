import { useState, useEffect } from 'react';
import { modelUrl, options } from '../util/api';

const useFetch = (id) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null)
      try {
        const response = await fetch(modelUrl + id, options);
        const jsonData = await response.json();
        if(jsonData.msg) {
          console.error(jsonData.msg);
          throw new Error('Something went wrong. Please try again later.');
        }
        setData(jsonData.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return { data, isLoading, error };
};

export default useFetch;
