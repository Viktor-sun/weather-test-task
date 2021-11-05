import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Typography, Button, ButtonGroup } from '@mui/material';
import { Refresh, ArrowBack } from '@mui/icons-material';
import Chart from '../../components/Chart';
import weatherSelectors from '../../redux/weather/weather-selectors';
import weatherOperations from '../../redux/weather/weather-operations';
import routes from '../../routes';
import s from './WeatherDetailsPage.module.css';

export default function WeatherDetailsPage() {
  const dispatch = useDispatch();
  const citys = useSelector(weatherSelectors.getCitys);
  const params = useParams();

  useEffect(() => {
    dispatch(weatherOperations.fetchHourlyForecast(Number(params.cityId)));
  }, [dispatch, params]);

  const weatherCtys = citys.find(city => city.id === Number(params.cityId));

  const handleOnRefreshCity = id => () => {
    dispatch(weatherOperations.refreshCity(id));
  };

  return (
    <>
      {citys.length > 0 && (
        <section>
          <ButtonGroup variant="outlined" aria-label="buttons">
            <Button
              component={Link}
              to={routes.weather}
              startIcon={<ArrowBack />}
            >
              back
            </Button>
            <Button
              onClick={handleOnRefreshCity(weatherCtys.id)}
              startIcon={<Refresh />}
            >
              refresh info
            </Button>
          </ButtonGroup>

          <article className={s.article}>
            <div>
              <Typography gutterBottom variant="h4" component="h1">
                {weatherCtys.name}, {weatherCtys.sys.country}
              </Typography>

              <Typography gutterBottom variant="h3" component="p">
                <img
                  style={{ verticalAlign: 'sub', marginRight: '10px' }}
                  src={`https://openweathermap.org/img/w/${weatherCtys.weather[0].icon}.png`}
                  alt="icon weather"
                />
                {weatherCtys.main.temp} °C
              </Typography>
              <Typography variant="body1" component="p">
                Feels like: {weatherCtys.main.feels_like} °C
              </Typography>
              <Typography variant="body1" component="p">
                {weatherCtys.weather[0].description}
              </Typography>

              <Typography variant="body1" component="p">
                Temp min: {weatherCtys.main.temp_min} °C
              </Typography>
              <Typography variant="body1" component="p">
                Temp max: {weatherCtys.main.temp_max} °C
              </Typography>
              <Typography variant="body1" component="h2">
                Pressure: {weatherCtys.main.pressure}hPa
              </Typography>
              <Typography variant="body1" component="p">
                Humidity: {weatherCtys.main.humidity}%
              </Typography>
              <Typography variant="body1" component="p">
                Visibility: {weatherCtys.visibility}m
              </Typography>
              <Typography variant="body1" component="p">
                Wind: {weatherCtys.wind.speed}m/s
              </Typography>
              <Typography variant="body1" component="p">
                Clouds: {weatherCtys.clouds.all}%
              </Typography>
            </div>

            <Chart />
          </article>
        </section>
      )}
    </>
  );
}
