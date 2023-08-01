import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Cities = () => {
  // const st = useSelector((state) => state.airQuality.cities);
  // console.log(st);
  const cities = useSelector((state) => state.airQuality.cities);
  console.log(cities);
  cities.map((city) => (
    console.log(city)
  ));
  return (
    <>
      <Header previous=" " heading="Cities" />
      <Hero title="City" />
      <section>
        <div className="cities_wrapper">
          {
            cities.map((city) => (
              <Link to="/details" key={city}>
                <p key={city}>
                  City Name :
                  {city}
                </p>
              </Link>
            ))
          }
        </div>
      </section>
    </>
  );
};

export default Cities;
