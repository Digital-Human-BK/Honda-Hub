import './Catalog.css';
import CatalogCard from './CatalogCard';

const models = [
  { name: 'NSX' },
  { name: 's2000' },
  { name: 'Integra' },
  { name: 'Civic' },
  { name: 'Accord' },
  { name: 'Prelude' },
];

const Catalog = () => {
  return (
    <>
      <div className='dark-head'></div>
      <section id='catalog'>
        <div className='inner-width'>
          <h1 className='catalog-title'>FAMOUS MODELS</h1>
          <div className='catalog-cars'>
            {models.map((carModel) => (
              <CatalogCard key={carModel.name} {...carModel} />
            ))}
          </div>
          <button>See More</button>
        </div>
      </section>
    </>
  );
};

export default Catalog;
