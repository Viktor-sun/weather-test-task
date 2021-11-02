import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import weatherActions from './weather-actions';

const citys = createReducer([], {
  [weatherActions.citysSuccess]: (state, { payload }) => [...state, payload],
  // ????????????????????????????????????????//
  [weatherActions.refreshCitySuccess]: (state, { payload }) => {
    const delOldInfo = state.filter(e => e.id !== payload.id);
    return [...delOldInfo, payload];
  },
  [weatherActions.delCity]: (state, { payload }) =>
    state.filter(e => e.id !== payload),
});

export default combineReducers({
  citys,
});
