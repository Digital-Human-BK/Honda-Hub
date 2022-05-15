import { Link } from 'react-router-dom';

import './CatalogCard.css';

const CatalogCard = ({ name }) => {
  return (
    <Link to={'/catalog/' + name} className='catalog-card'>
      <img
        className='carImage'
        src={`/img/catalog-${name}.jpg`}
        onError={(e)=>{e.target.onerror = null; e.target.src='/img/noImg.jpg'}}
        alt={name}
      />
      <h4>{name}</h4>
    </Link>
  );
};

export default CatalogCard;
