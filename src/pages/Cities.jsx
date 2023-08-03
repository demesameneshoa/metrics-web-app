import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Hero from '../components/Hero';
import City from '../components/City';

const Cities = ({ country }) => {
  const cities = useSelector((state) => state.airQuality.cities);
  console.log(country);
  return (
    <>
      <Header previous="/" heading="Cities" />
      <Hero title="Cities" />
      <section>
        <div className="cities_wrapper">
          <ul>
            {
            cities.map((city) => (
              <li key={city}>
                <City city={city} />
              </li>
            ))
          }

          </ul>

        </div>
      </section>
    </>
  );
};

Cities.propTypes = {
  country: PropTypes.string.isRequired,
};

export default Cities;
