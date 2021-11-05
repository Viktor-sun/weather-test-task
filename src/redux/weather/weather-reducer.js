import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import weatherActions from './weather-actions';

const citys = createReducer([], {
  [weatherActions.citysSuccess]: (state, { payload }) => [...state, payload],
  [weatherActions.refreshCitySuccess]: (state, { payload }) => {
    const idx = state.findIndex(({ id }) => id === payload.id);
    const newState = [...state];
    newState.splice(idx, 1, payload);
    return newState;
  },
  [weatherActions.delCity]: (state, { payload }) =>
    state.filter(e => e.id !== payload),
  [weatherActions.getCurrentCitySuccess]: (_, { payload }) => payload,
});

const citysId = createReducer([], {
  [weatherActions.addCityId]: (state, { payload }) => {
    const newState = [...state];
    newState.push(payload);
    return newState;
  },
  [weatherActions.delCityId]: (state, { payload }) =>
    state.filter(e => e !== payload),
});

const error = createReducer(null, {
  [weatherActions.citysError]: (_, { payload }) => payload,
  [weatherActions.refreshCityError]: (_, { payload }) => payload,
  [weatherActions.getCurrentCityError]: (_, { payload }) => payload,

  [weatherActions.citysSuccess]: () => null,
  [weatherActions.refreshCitySuccess]: () => null,
  [weatherActions.getCurrentCitySuccess]: () => null,
});

const loading = createReducer(false, {
  [weatherActions.citysRequest]: () => true,
  [weatherActions.citysSuccess]: () => false,
  [weatherActions.citysError]: () => false,
  [weatherActions.refreshCityRequest]: () => true,
  [weatherActions.refreshCitySuccess]: () => false,
  [weatherActions.refreshCityError]: () => false,
  [weatherActions.getCurrentCityRequest]: () => true,
  [weatherActions.getCurrentCitySuccess]: () => false,
  [weatherActions.getCurrentCityError]: () => false,
});

const forecast = createReducer([], {
  [weatherActions.hourlyForecastSuccess]: (_, { payload }) => {
    const res = payload.list
      .map(({ main, dt_txt }) => ({ temp: main.temp, dt_txt }))
      .slice(15);
    return res;
  },
});

export default combineReducers({
  citys,
  error,
  loading,
  citysId,
  forecast,
});
