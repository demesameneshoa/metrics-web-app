import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const City = ({ city }) => (
  <Link to="/details" state={{ city: { city } }}>
    <p>
      City Name :
      {city}
    </p>
  </Link>
);

City.propTypes = {
  city: PropTypes.string.isRequired,
};
export default City;
