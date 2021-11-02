import { createAction } from '@reduxjs/toolkit';

const citysRequest = createAction('weather/citysRequest');
const citysSuccess = createAction('weather/citysSuccess');
const citysError = createAction('weather/citysError');

// eslint-disable-next-line
export default { citysRequest, citysSuccess, citysError };
