import weatherActions from './weather-actions';

const API_KEY = 'c429d862fd10484dd7fc9a745a47897a';
const URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

const fetchCitys = city => dispatch => {
  dispatch(weatherActions.citysRequest());

  fetch(`${URL}&q=${city}`)
    .then(response => response.json())
    .then(data => dispatch(weatherActions.citysSuccess(data)))
    .catch(e => dispatch(weatherActions.citysError(e.message)));
};

const refreshCity = id => dispatch => {
  dispatch(weatherActions.refreshCityRequest());

  fetch(`${URL}&id=${id}`)
    .then(response => response.json())
    .then(data => dispatch(weatherActions.refreshCitySuccess(data)))
    .catch(e => dispatch(weatherActions.refreshCityError(e.message)));
};

// eslint-disable-next-line
export default { fetchCitys, refreshCity };
