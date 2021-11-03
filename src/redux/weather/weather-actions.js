import { createAction } from '@reduxjs/toolkit';

const citysRequest = createAction('weather/citysRequest');
const citysSuccess = createAction('weather/citysSuccess');
const citysError = createAction('weather/citysError');

const refreshCityRequest = createAction('weather/refreshCityRequest');
const refreshCitySuccess = createAction('weather/refreshCitySuccess');
const refreshCityError = createAction('weather/refreshCityError');

const delCity = createAction('weather/delCity');

const addCityId = createAction('weather/addCityId');
const delCityId = createAction('weather/delCityId');

const getCurrentCityRequest = createAction('weather/getCurrentCityRequest');
const getCurrentCitySuccess = createAction('weather/getCurrentCitySuccess');
const getCurrentCityError = createAction('weather/getCurrentCityError');

// eslint-disable-next-line
export default {
  citysRequest,
  citysSuccess,
  citysError,
  refreshCityRequest,
  refreshCitySuccess,
  refreshCityError,
  delCity,
  addCityId,
  delCityId,
  getCurrentCityRequest,
  getCurrentCitySuccess,
  getCurrentCityError,
};
