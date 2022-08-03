import { Link } from 'react-router-dom';

import './GenCard.css';

const GenCard = ({ generation, model }) => {
  return (
    <Link
      to={`/catalog/${model}/${generation.id.replace(/_/g, '-')}`}
      className='sub-model'
      title='Technical specifications, Fuel consumption, Dimensions'
    >
      <h4>
        {generation.name} <i className='fa-solid fa-car'/>
      </h4>
      <p className='prod-years'>
        Produced: {' '}
        {generation.yearsOfProduction.start} -{' '}
        {generation.yearsOfProduction.end || 'Present'}
        <strong>{generation.type}</strong>
      </p>
      <p className='power-info'>
        {generation.power.value &&
          `Power: ${generation.power.value}${generation.power.unit}`}
        {generation.power.min?.value &&
          `Power: from ${generation.power.min?.value} to ${generation.power.max?.value}${generation.power.min?.unit}`}
      </p>
    </Link>
  );
};

export default GenCard;
