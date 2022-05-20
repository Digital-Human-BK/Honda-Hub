import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

import './QuickRefNav.css';

const QuickRefNav = () => {
  const location = useLocation();

  return (
    <aside className='quick-ref'>
      <p>
        Quick reference <i className="fa-solid fa-circle-chevron-down"></i>
      </p>
      <ul>
        <li>
          <HashLink to={location.pathname + '#general-specs'}>
            <i className="fa-solid fa-chevron-right"></i> General
            information
          </HashLink>
        </li>
        <li>
          <HashLink to={location.pathname + '#performance-specs'}>
            <i className="fa-solid fa-chevron-right"></i> Performance specs
          </HashLink>
        </li>
        <li>
          <HashLink to={location.pathname + '#engine-specs'}>
            <i className="fa-solid fa-chevron-right"></i> Engine Specs
          </HashLink>
        </li>
        <li>
          <HashLink to={location.pathname + '#weight-specs'}>
            <i className="fa-solid fa-chevron-right"></i> Space, Volume and
            Weights
          </HashLink>
        </li>
        <li>
          <HashLink to={location.pathname + '#dimensions-specs'}>
            <i className="fa-solid fa-chevron-right"></i> Dimensions
          </HashLink>
        </li>
        <li>
          <HashLink to={location.pathname + '#dbs-specs'}>
            <i className="fa-solid fa-chevron-right"></i> Drivetrain,
            Brakes and Suspension specs
          </HashLink>
        </li>
      </ul>
    </aside>
  );
};

export default QuickRefNav;
