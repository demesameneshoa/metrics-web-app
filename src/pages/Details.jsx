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
  const status = useSelector((state) => state.airQuality.status);
  const overallAqi = Number(airquality.overall_aqi);
  let aqiRank;
  if (overallAqi < 50) {
    aqiRank = 'Good';
  } else if (overallAqi < 100) {
    aqiRank = 'Moderate';
  } else if (overallAqi < 150) {
    aqiRank = 'Unhealthy for sensitive groups';
  } else if (overallAqi < 200) {
    aqiRank = 'Unhealthy';
  } else if (overallAqi < 300) {
    aqiRank = 'Very Unhealthy';
  } else {
    aqiRank = 'Hazardous';
  }
  if (status === 'loading') {
    return (
      <>
        <Header previous="/cities" heading="Cities" />
        <Hero title="Details" />
        <div>
          loading...
        </div>
      </>
    );
  }
  return (
    <>
      <Header previous="/cities" heading="Cities" />
      <Hero title="Details" />
      <section>
        <div className="details_wrapper">
          <div>
            <h3>
              City Name :
              {city.city}
            </h3>
            <h5>
              Overall AQI :
              {airquality.overall_aqi}
            </h5>
            <h5>
              Overall AQI Level :
              {aqiRank}
            </h5>
          </div>
          <div>
            <ul className="aqi_details">
              <li>
                CO Concentration:
                {airquality.CO.concentration}
              </li>
              <li>
                CO aqi:
                {airquality.CO.aqi}
              </li>
              <li>
                NO2 Concentration:
                {airquality.NO2.concentration}
              </li>
              <li>
                NO2 aqi:
                {airquality.NO2.aqi}
              </li>
              <li>
                O3 Concentration:
                {airquality.O3.concentration}
              </li>
              <li>
                O3 aqi:
                {airquality.O3.aqi}
              </li>
              <li>
                SO2 Concentration:
                {airquality.SO2.concentration}
              </li>
              <li>
                SO2 aqi:
                {airquality.SO2.aqi}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
