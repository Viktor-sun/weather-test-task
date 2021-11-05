import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppBar from './components/AppBar';
import Spinner from './components/Spinner';
import weatherOperations from './redux/weather/weather-operations';
import routes from './routes';

const WeatherPage = lazy(() =>
  import(
    './pages/WeaterPage/WeaterPage.js' /* webpackChunkName: "weather-page" */
  ),
);

const WeatherDetailsPage = lazy(() =>
  import(
    './pages/WeatherDetailsPage/WeatherDetailsPage.js' /* webpackChunkName: "weather-details-page" */
  ),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(weatherOperations.getCurrentCitys());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Spinner />

      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={routes.weather}>
            <WeatherPage />
          </Route>
          <Route exact path={routes.weatherDetails}>
            <WeatherDetailsPage />
          </Route>
          <Redirect to={routes.weather} />
        </Switch>
      </Suspense>
    </>
  );
}
