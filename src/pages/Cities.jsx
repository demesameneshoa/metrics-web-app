import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Hero from '../components/Hero';
import City from '../components/City';

const Cities = () => {
  // const st = useSelector((state) => state.airQuality.cities);
  // console.log(st);
  const cities = useSelector((state) => state.airQuality.cities);
  return (
    <>
      <Header previous="/" heading="Cities" />
      <Hero title="City" />
      <section>
        <div className="cities_wrapper">
          {
            cities.map((city) => (
              <City city={city} key={city} />
            ))
          }
        </div>
      </section>
    </>
  );
};

export default Cities;
