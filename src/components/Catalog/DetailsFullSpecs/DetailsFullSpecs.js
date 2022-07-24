import { useParams } from 'react-router-dom';

import './DetailsFullSpecs.css';

import useFetch from '../../../hooks/useFetch';
import { filterToEngine } from '../../../helpers/mappers';

import DarkHeader from '../../Common/DarkHeader';
import GeneralTable from './GeneralTable';
import PerformanceTable from './PerformanceTable';
import EngineTable from './EngineTable';
import WeightTable from './WeightTable';
import DimensionsTable from './DimensionsTable';
import DrivetrainBrakesSuspensionTable from './DrivetrainBrakesWheelsTable';
import QuickRefNav from './QuickRefNav';
import Loader from '../../Common/Loader';
import Error from '../../Error';
import NotFound from '../../NotFound/NotFound';

const DetailsFullSpecs = () => {
  const { model, gen, engine } = useParams();
  const { data, isLoading, error } = useFetch(model);

  if (error) {
    return <Error>{error.message}</Error>;
  }

  if (isLoading || data.generations === undefined) {
    return <Loader />;
  }

  if (!data) {
    return <NotFound/>;
  }

  const engineData = filterToEngine(data, gen, engine);

  return (
    <>
      <DarkHeader />
      <section className='section-bg'>
        <div className='inner-width'>
          <div className='details-content'>
            <div id='side-content'>
              <img
                src={`/img/catalog-${model}.jpg`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/img/noImg.jpg';
                }}
                className='details-pic'
                alt={model}
              />
              <QuickRefNav />
            </div>

            <div className='details-text'>
              <h2>Honda {engineData.generation}</h2>
              <br />
              <h3>
                Engine: <span>{engineData.modification_engine}</span> -{' '}
                <span>{engineData.engine_specs?.engine_model_code}</span> -{' '}
                <span>{engineData.engine_specs?.valvetrain}</span>
              </h3>
              <p>General information</p>
              <GeneralTable data={engineData} />
              <p>Performance specs</p>
              <PerformanceTable data={engineData} />
              <p>Engine specs</p>
              <EngineTable data={engineData} />
              <p>Space, Volume and Weights</p>
              <WeightTable data={engineData} />
              <p>Dimensions</p>
              <DimensionsTable data={engineData} />
              <p>Drivetrain, Brakes and Suspension specs</p>
              <DrivetrainBrakesSuspensionTable data={engineData} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsFullSpecs;
