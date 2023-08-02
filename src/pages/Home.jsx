import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Country from '../components/Countries';

const Home = () => {
  const countries = useSelector((state) => state.airQuality.countries);
  return (
    <>
      <div className="App">
        <Header previous=" " />
        <Hero />
        <div className="countries">
          { countries.map((country) => (
            <Country
              key={country.name}
              number={country.cities.length}
              name={country.name}
              vector={country.map}
              cities={country.cities}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
