import { Link } from 'react-router-dom';

import './CatalogCard.css';

const CatalogCard = ({ name }) => {
  return (
    <Link to='/carModel' className='catalog-card'>
      <img className='carImage' src={`/img/catalog-${name}.jpg`} alt={name} />
      <h4>{name}</h4>     
    </Link>
  );
};

export default CatalogCard;
