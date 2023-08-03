import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCities, fetchAirQualityC } from '../redux/AQSlice';

const Country = ({
  name, vector, cities, isOdd,
}) => {
  const CountryDiv = styled.div`
  &::before {
    background: url('${(props) => props.vector}') no-repeat;
    content: '';
    position: absolute;
    background-size: contain;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.4;
    background-color: ${(props) => (props.isOdd ? '#4369b2' : '#445e8f')};
  }
`;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getCities(cities));
  };
  useEffect(() => {
    dispatch(fetchAirQualityC(name));
  }, [dispatch, name]);

  const airquality = useSelector((state) => state.airQuality.countriesAirQuality[name]);
  console.log(vector);
  // console.log(airquality.overall_aqi);
  return (
    <Link to="/cities" onClick={handleClick} className="country-wrapper" style={{ textDecoration: 'none', color: 'white' }}>
      <CountryDiv vector={vector} isOdd={isOdd} className="country">
        <h3>{name}</h3>
        <span>
          Overall AQI:
          {airquality ? airquality.overall_aqi : 'Loading...'}
        </span>
      </CountryDiv>
    </Link>
  );
};

Country.propTypes = {
  isOdd: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  vector: PropTypes.string.isRequired,
  cities: PropTypes.instanceOf(Array).isRequired,
};

export default Country;
