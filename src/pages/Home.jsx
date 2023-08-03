import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Country from '../components/Countries';
import { fetchAirQualityC } from '../redux/AQSlice';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const countries = useSelector((state) => state.airQuality.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    countries.forEach((country) => {
      dispatch(fetchAirQualityC(country.name));
    });
  }, [dispatch, countries]);

  const filteredCountries = countries.filter(
    (country) => country.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <div className="App">
        <Header previous=" " />
        <Hero title="" searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="countries">
          {filteredCountries.map((country, index) => (
            <Country
              key={country.name}
              name={country.name}
              vector={country.map}
              cities={country.cities}
              airquality={country.airquality}
              isOdd={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
