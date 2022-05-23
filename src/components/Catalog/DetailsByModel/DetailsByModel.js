import { useParams } from 'react-router-dom';

import useFetch from '../../../hooks/useFecth';
import './DetailsByModel.css';

import DarkHeader from '../../Common/DarkHeader';
import GenCard from './GenCard';
import Loader from '../../Common/Loader';
import Notification from '../../Common/Notification';

const DetailsByModel = () => {
  const { model } = useParams();
  const { data, isLoading, error } = useFetch(model);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <DarkHeader />
      <section id='details'>
        <div className='inner-width'>
          <h1 className='section-title'>Honda {model}</h1>
          <img
            src={`/img/catalog-${model}.jpg`}
            className='about-pic'
            alt={model}
          />
          <div className='about-text'>
            <h2 className='view-message'>
              Choose a generation of Honda {model} from the list below to see
              additional specifications.
            </h2>
            <br />
            {error && <Notification>{error.message}</Notification>}
            {data.generations?.map((generation) => (
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
