import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMicrophone, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = ({ previous }) => {
  let prevIcon;
  if (previous === ' ') {
    prevIcon = 'Air Quality';
  } else prevIcon = faLessThan;
  return (
    <>
      <div className="header-container">
        <Link to={previous}>
          <FontAwesomeIcon icon={prevIcon} />
        </Link>
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
};

Header.propTypes = {
  previous: PropTypes.string.isRequired,
};

export default Header;
