import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <>
    <div className="header-container">
      <p>Air Quality</p>
      <div className="header-icons">
        <span>
          <FontAwesomeIcon icon={faMicrophone} />
        </span>
        <span>
          <FontAwesomeIcon icon={faGear} />
        </span>
      </div>
    </div>
  </>
);

export default Header;
