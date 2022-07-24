import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

import './QuickRefNav.css';

const QuickRefNav = () => {
  const location = useLocation();

  return (
    <aside className='quick-ref'>
      <p>
        Quick reference <i className="fa-solid fa-circle-chevron-down"/>
      </p>
      <ul>
        <li>
          <HashLink to={location.pathname + '#general-specs'}>
            <i className="fa-solid fa-chevron-right"/> General
            information
          </HashLink>
        </li>
        <li>
          <HashLink to={location.pathname + '#performance-specs'}>
            <i className="fa-solid fa-chevron-right"/> Performance specs
          </HashLink>
        </li>
        <li>
          <HashLink to={location.pathname + '#engine-specs'}>
            <i className="fa-solid fa-chevron-right"/> Engine Specs
          </HashLink>
        </li>
        <li>
          <HashLink to={location.pathname + '#weight-specs'}>
            <i className="fa-solid fa-chevron-right"/> Space, Volume and
            Weights
          </HashLink>
        </li>
        <li>
          <HashLink to={location.pathname + '#dimensions-specs'}>
            <i className="fa-solid fa-chevron-right"/> Dimensions
          </HashLink>
        </li>
        <li>
          <HashLink to={location.pathname + '#dbs-specs'}>
            <i className="fa-solid fa-chevron-right"/> Drivetrain,
            Brakes and Suspension specs
          </HashLink>
        </li>
      </ul>
    </aside>
  );
};

export default QuickRefNav;
