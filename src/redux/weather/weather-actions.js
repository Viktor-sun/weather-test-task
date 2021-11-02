import { createAction } from '@reduxjs/toolkit';

const citysRequest = createAction('weather/citysRequest');
const citysSuccess = createAction('weather/citysSuccess');
const citysError = createAction('weather/citysError');

const refreshCityRequest = createAction('weather/refreshCityRequest');
const refreshCitySuccess = createAction('weather/refreshCitySuccess');
const refreshCityError = createAction('weather/refreshCityError');

const delCity = createAction('weather/delCity');

// eslint-disable-next-line
export default {
  citysRequest,
  citysSuccess,
  citysError,
  refreshCityRequest,
  refreshCitySuccess,
  refreshCityError,
  delCity,
};
