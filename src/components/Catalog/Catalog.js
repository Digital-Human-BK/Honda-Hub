import { useState } from 'react';

import './Catalog.css';

import CatalogCard from './CatalogCard';
import Button from '../Common/Button';
import { getAllModels } from '../../services/catalogService';
import LoadingSpinner from '../Common/LoadingSpinner';

const defaultModels = ['NSX', 'S2000', 'Integra', 'Civic', 'Accord', 'Prelude'];

const Catalog = () => {
  const [models, setModels] = useState(defaultModels);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAllModels = async () => {
    try {
      setIsLoading(true);
      const modelsData = await getAllModels();
      
      if (modelsData.data.length === 0) {
        throw new Error('Could not load data. Please try again later');
      }

      const newData = [
        ...new Set([...defaultModels, ...modelsData.data[0].models]),
      ];
      setModels(newData);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className='dark-head'></div>
      <section id='catalog'>
        <div className='inner-width'>
          <h1 className='catalog-title'>FAMOUS MODELS</h1>
          <div className='catalog-cars'>
            {models.map((carModel) => (
              <CatalogCard key={carModel} name={carModel} />
            ))}
          </div>
          {isLoading && <LoadingSpinner/>}
          {error && <h4 className='catalog-err'>{error}</h4>}
          <Button value={'See All'} disabled={isLoading} handler={fetchAllModels} />
        </div>
      </section>
    </>
  );
};

export default Catalog;
