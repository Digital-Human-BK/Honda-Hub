import { useState, useEffect, useContext } from 'react';

import { modelUrl, options } from '../api/carApi';
import { HondataContext } from '../contexts/HondataProvider';

const useFetch = (model) => {
  const { hondata, onFetch } = useContext(HondataContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (hondata[model]) {
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(modelUrl + model, options);
        if (response.status === 429) {
          const errResponse = await response.json();
          console.error(errResponse.message);
          throw new Error(
            'Too Many Requests! Limit 5 per minute or 100 per month. Please try again later.'
          );
        }

        const jsonData = await response.json();
        if (jsonData.msg) {
          console.error(jsonData.msg);
          throw new Error(jsonData.msg);
        }

        onFetch({ ...hondata, [model]: jsonData.data });
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [model, hondata, onFetch]);

  return { hondata, isLoading, error };
};

export default useFetch;
