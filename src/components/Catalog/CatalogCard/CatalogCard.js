import { Link } from 'react-router-dom';

import './CatalogCard.css';

const CatalogCard = ({ model }) => {
  return (
    <Link to={'/catalog/' + model} className='catalog-card'>
      <img
        className='catalog-card__img'
        src={`/img/catalog-${model}.jpg`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/img/noImg.jpg';
        }}
        alt={model}
      />
      <div className='card-info'>
        <h4>{model}</h4>
        <p>
          More details <i className='fa-solid fa-angle-right' />
        </p>
      </div>
    </Link>
  );
};

export default CatalogCard;
