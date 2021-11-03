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
});

const error = createReducer(null, {
  [weatherActions.citysError]: (_, { payload }) => payload,
  [weatherActions.refreshCityError]: (_, { payload }) => payload,

  [weatherActions.citysSuccess]: () => null,
  [weatherActions.refreshCitySuccess]: () => null,
});

export default combineReducers({
  citys,
  error,
});
