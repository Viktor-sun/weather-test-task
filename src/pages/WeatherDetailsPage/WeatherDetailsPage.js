import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import weatherSelectors from '../../redux/weather/weather-selectors';

export default function WeatherDetailsPage() {
  const citys = useSelector(weatherSelectors.getCitys);
  const params = useParams();

  const weather = citys.find(city => city.id === Number(params.cityId));

  return (
    <div>
      <h1>WeatherDetailsPage</h1>
      <p>{weather.name}</p>
    </div>
  );
}
