import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import weatherActions from './weather-actions';

const citys = createReducer([], {
  [weatherActions.citysSuccess]: (state, { payload }) => [...state, payload],
});

export default combineReducers({
  citys,
});
