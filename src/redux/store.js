import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weather/weather-reducer';

const store = configureStore({
  reducer: {
    citysWeather: weatherReducer,
  },
});

export default store;
