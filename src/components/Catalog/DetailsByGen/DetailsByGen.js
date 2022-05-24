import { useParams } from 'react-router-dom';

import useFetch from '../../../hooks/useFecth';
import { filterToGen } from '../../../helpers/dataTransform';
import './DetailsByGen.css';

import DarkHeader from '../../Common/DarkHeader';
import EngineCard from './EngineCard';
import Loader from '../../Common/Loader';
import Notification from '../../Common/Notification';

const DetailsByGen = () => {
  const { model, gen } = useParams();
  const { data, isLoading, error } = useFetch(model);

  if (isLoading || data.generations === undefined) {
    return <Loader />;
  }
  const generationData = filterToGen(data, gen);

  return (
    <>
      <DarkHeader />
      <section id='genr-details'>
        <div className='inner-width'>
          <h1 className='section-title'>{generationData.name}</h1>
          <img
            src={`/img/catalog-${model}.jpg`}
            className='about-pic'
            alt={model}
          />
          <div className='about-text'>
            <h2 className='view-message'>
              Choose engine modification from the list below to see the full
              specifications.
            </h2>
            <br />
            {error && <Notification>{error.message}</Notification>}
            {generationData.engines?.map((engine) => (
              <EngineCard
                key={engine.id}
                engine={engine}
                model={model}
                gen={gen}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsByGen;
