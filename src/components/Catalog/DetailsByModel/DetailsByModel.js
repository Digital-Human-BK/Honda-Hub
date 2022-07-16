import { useParams } from 'react-router-dom';

import './DetailsByModel.css';

import useFetch from '../../../hooks/useFetch';

import DarkHeader from '../../Common/DarkHeader';
import GenCard from './GenCard';
import Loader from '../../Common/Loader';
import Error from '../../Error';
import NotFound from '../../NotFound/NotFound';

const DetailsByModel = () => {
  const { model } = useParams();
  const { data, isLoading, error } = useFetch(model);

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (isLoading) {
    return <Loader />;
  }

  if(!data) {
     return <NotFound/>
  }

  return (
    <>
      <DarkHeader />
      <section id='model-details'>
        <div className='inner-width'>
          <h1 className='section-title'>Honda {model}</h1>
          <img
            src={`/img/catalog-${model}.jpg`}
            onError={(e)=>{e.target.onerror = null; e.target.src='/img/noImg.jpg'}}
            className='about-pic'
            alt={model}
          />
          <div className='about-text'>
            <h2 className='view-message'>
              Choose a generation of Honda {model} from the list below to see
              additional specifications.
            </h2>
            <br />
            {data && data.generations?.map((generation) => (
              <GenCard
                key={generation.id}
                model={model}
                generation={generation}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsByModel;
