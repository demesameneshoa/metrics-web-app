import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMicrophone, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = ({ previous }) => {
  let prevIcon;
  if (previous === ' ') {
    prevIcon = 'Air Quality';
  } else prevIcon = faChevronLeft;
  return (
    <>
      <div className="header-container">
        <Link to={previous} style={{ textDecoration: 'none', color: 'white' }}>
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
