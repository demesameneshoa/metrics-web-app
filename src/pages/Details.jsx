import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import { fetchAirQuality } from '../redux/AQSlice';
import Hero from '../components/Hero';

const Details = () => {
  const location = useLocation();
  const { city } = location.state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAirQuality(city.city));
  }, [dispatch]);
  const airquality = useSelector((state) => state.airQuality.airquality);
  return (
    <>
      <Header previous="/cities" heading="Cities" />
      <Hero title="Details" />
      <section>
        <div className="cities_wrapper">
          City Name :
          {city.city}
          <br />
          CO Concentration :
          {airquality.CO.concentration}
          <br />
          CO aqi :
          {airquality.CO.aqi}
        </div>
      </section>
    </>
  );
};

export default Details;
