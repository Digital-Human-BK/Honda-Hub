import { useState } from 'react';

import { getAllModels } from '../../services/catalogService';

import './Catalog.css';
import CatalogCard from './CatalogCard';
import Button from '../Common/Button';
import LoadingModal from '../Common/LoadingModal';
import DarkHeader from '../Common/DarkHeader';
import Notification from '../Common/Notification';

const defaultModels = ['NSX', 'S2000', 'Integra', 'Civic', 'Accord', 'Prelude'];

const Catalog = () => {
  const [models, setModels] = useState(defaultModels);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAllModels = async () => {
    try {
      setIsLoading(true);
      const modelsData = await getAllModels();

      const allModels = [
        ...new Set([...defaultModels, ...modelsData.models]),
      ];
      setModels(allModels);
    } catch (err) {
      setError(err.message);
      setTimeout(() => {
        setError(null);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <DarkHeader />
      <section className='section-bg'>
        <div className='inner-width'>
          <h1 className='section-title'>Models</h1>
          <div className='catalog-cars'>
            {models.map((carModel) => (
              <CatalogCard key={carModel} model={carModel} />
            ))}
          </div>
          {isLoading && <LoadingModal />}
          {error && <Notification>{error}</Notification>}
          <Button
            value={'All Models'}
            disabled={isLoading}
            handler={fetchAllModels}
          />
        </div>
      </section>
    </>
  );
};

export default Catalog;
