import React from 'react';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import weatherSelectors from '../../redux/weather/weather-selectors';

export default function Spinner() {
  const isLoading = useSelector(weatherSelectors.isLoading);

  return (
    <Loader
      visible={isLoading}
      type="Watch"
      color="#d3432d"
      secondaryColor="green"
      height={100}
      width={100}
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
      }}
    />
  );
}
