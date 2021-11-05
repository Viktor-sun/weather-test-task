import weatherActions from './weather-actions';
import notifications from '../../services/react-toastify';

const API_KEY = 'c429d862fd10484dd7fc9a745a47897a';
const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

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
      dispatch(weatherActions.addCityId(data.id));
      notifications.sucess('Sucess');
    })
    .catch(e => {
      if (e === 404) {
        dispatch(weatherActions.citysError(e));
        notifications.error('City not found!');
        return;
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

const getCurrentCitys = () => async (dispatch, getState) => {
  const persistedCitysId = getState().citysWeather.citysId;
  if (!persistedCitysId) return;

  const arrPromises = persistedCitysId.map(id =>
    fetch(`${URL}&id=${id}`).then(response => {
      if (!response.ok) {
        return Promise.reject(response.status);
      }
      return response.json();
    }),
  );

  dispatch(weatherActions.getCurrentCityRequest());

  Promise.all(arrPromises)
    .then(data => {
      dispatch(weatherActions.getCurrentCitySuccess(data));
    })
    .catch(e => {
      dispatch(weatherActions.getCurrentCityError(e));
      notifications.error('Something went wrong!');
    });
};

const fetchHourlyForecast = id => dispatch => {
  dispatch(weatherActions.hourlyForecastRequest());

  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${API_KEY}&units=metric`,
  )
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.status);
      }
      return response.json();
    })
    .then(data => {
      dispatch(weatherActions.hourlyForecastSuccess(data));
    })
    .catch(e => {
      dispatch(weatherActions.hourlyForecastError(e));
      notifications.error('Something went wrong!');
    });
};

// eslint-disable-next-line
export default { addhCity, refreshCity, getCurrentCitys, fetchHourlyForecast };
