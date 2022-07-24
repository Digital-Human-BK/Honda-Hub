import { Link } from 'react-router-dom';

const EngineCard = ({ engine, model, gen }) => {
  return (
    <Link
      to={`/catalog/${model}/${gen}/${engine.id}`}
      className='sub-model'
      title='Full techical specs of a model with certain engine modification'
    >
      <h4>{engine.modification_engine} <i className='fa-solid fa-gauge-high'/></h4>
      <p className='prod-years'>
        Produced: {engine.general_information?.start_of_production} -{' '}
        {engine.general_information?.end_of_production || 'Present'}
        <strong>{engine.engine_specs?.engine_model_code}</strong>
        <strong>{engine.engine_specs?.valvetrain}</strong>
      </p>
      <hr />
    </Link>
  );
};

export default EngineCard;
