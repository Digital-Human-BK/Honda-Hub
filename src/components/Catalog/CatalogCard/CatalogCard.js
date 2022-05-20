import { Link } from 'react-router-dom';

import './CatalogCard.css';

const CatalogCard = ({ model }) => {
  return (
    <Link to={'/catalog/' + model} className='catalog-card'>
      <img
        className='carImage'
        src={`/img/catalog-${model}.jpg`}
        onError={(e)=>{e.target.onerror = null; e.target.src='/img/noImg.jpg'}}
        alt={model}
      />
      <h4>{model} </h4>
    </Link>
  );
};

export default CatalogCard;
