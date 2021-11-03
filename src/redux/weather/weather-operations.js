import weatherActions from './weather-actions';
import notifications from '../../services/react-toastify';

const API_KEY = 'c429d862fd10484dd7fc9a745a47897a';
const URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

const addhCity = city => dispatch => {
  dispatch(weatherActions.citysRequest());

  fetch(`${URL}&q=${city}`)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.status);
      }
      return response.json();
    })
    .then(data => {
      dispatch(weatherActions.citysSuccess(data));
      notifications.sucess('Sucess');
    })
    .catch(e => {
      if (e === 404) {
        notifications.error('City not found!');
      }
      dispatch(weatherActions.citysError(e));
      notifications.error('Something went wrong!');
    });
};

const refreshCity = id => dispatch => {
  dispatch(weatherActions.refreshCityRequest());

  fetch(`${URL}&id=${id}`)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.status);
      }
      return response.json();
    })
    .then(data => {
      dispatch(weatherActions.refreshCitySuccess(data));
      notifications.sucess('Sucess');
    })
    .catch(e => {
      dispatch(weatherActions.refreshCityError(e));
      notifications.error('Something went wrong!');
    });
};

// eslint-disable-next-line
export default { addhCity, refreshCity };
