import { useParams } from 'react-router-dom';

import useFetch from '../../../hooks/useFetch';
import { filterToGen } from '../../../helpers/mappers';

import DarkHeader from '../../Common/DarkHeader';
import EngineCard from './EngineCard';
import Loader from '../../Common/Loader';
import Notification from '../../Common/Notification';
import Error from '../../Error';
import NotFound from '../../NotFound/NotFound';

const DetailsByGen = () => {
  const { model, gen } = useParams();
  const { hondata, isLoading, error } = useFetch(model);

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (isLoading || hondata[model]?.generations === undefined) {
    return <Loader />;
  }

  if (!hondata) {
    return <NotFound />;
  }

  const generationData = filterToGen(hondata[model], gen);

  return (
    <>
      <DarkHeader />
      <section className='section-bg'>
        <div className='inner-width'>
          <h1 className='section-title'>{generationData.name}</h1>
          <img
            src={`/img/catalog-${model}.jpg`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/img/noImg.jpg';
            }}
            className='about-pic details-img'
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
