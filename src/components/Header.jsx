import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <span>
    <FontAwesomeIcon icon={faMicrophone} />
    <FontAwesomeIcon icon={faGear} />
  </span>
);

export default Header;
