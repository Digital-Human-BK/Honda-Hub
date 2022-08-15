import { useState, useEffect, useContext } from 'react';

import { HondataContext } from '../contexts/HondataProvider';
import { getModel } from '../services/catalogService';

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
        const jsonData = await getModel(model);

        if (jsonData.msg) {
          console.error(jsonData.msg);
          throw new Error(jsonData.msg);
        }

        onFetch({ ...hondata, [model]: jsonData });
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
