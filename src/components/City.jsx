import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const City = ({ city }) => (
  <Link to="/details" state={{ city: { city } }} style={{ textDecoration: 'none', color: 'white' }}>
    <p className="cityname">
      City Name: &nbsp; &nbsp;
      {city}
    </p>
  </Link>
);

City.propTypes = {
  city: PropTypes.string.isRequired,
};
export default City;
