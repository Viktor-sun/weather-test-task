import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Typography, Button, ButtonGroup } from '@mui/material';
import { Refresh, ArrowBack } from '@mui/icons-material';
import weatherSelectors from '../../redux/weather/weather-selectors';
import weatherOperations from '../../redux/weather/weather-operations';
import routes from '../../routes';
import s from './WeatherDetailsPage.module.css';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function WeatherDetailsPage() {
  const dispatch = useDispatch();
  const citys = useSelector(weatherSelectors.getCitys);
  const params = useParams();

  const weatherCtys = citys.find(city => city.id === Number(params.cityId));
  const { id, name, sys, weather, main, visibility, wind, clouds } =
    weatherCtys;

  const handleOnRefreshCity = id => () => {
    dispatch(weatherOperations.refreshCity(id));
  };

  return (
    <section>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button component={Link} to={routes.weather} startIcon={<ArrowBack />}>
          back
        </Button>
        <Button onClick={handleOnRefreshCity(id)} startIcon={<Refresh />}>
          refresh info
        </Button>
      </ButtonGroup>
      <article className={s.article}>
        <div>
          <Typography gutterBottom variant="h4" component="h1">
            {name}, {sys.country}
          </Typography>

          <Typography gutterBottom variant="h3" component="p">
            <img
              style={{ verticalAlign: 'sub', marginRight: '10px' }}
              src={`https://openweathermap.org/img/w/${weather[0].icon}.png`}
              alt="icon weather"
            />
            {main.temp} °C
          </Typography>
          <Typography variant="body1" component="p">
            Feels like: {main.feels_like} °C
          </Typography>
          <Typography variant="body1" component="p">
            {weather[0].description}
          </Typography>

          <Typography variant="body1" component="p">
            Temp min: {main.temp_min} °C
          </Typography>
          <Typography variant="body1" component="p">
            Temp max: {main.temp_max} °C
          </Typography>
          <Typography variant="body1" component="h2">
            Pressure: {main.pressure}hPa
          </Typography>
          <Typography variant="body1" component="p">
            Humidity: {main.humidity}%
          </Typography>
          <Typography variant="body1" component="p">
            Visibility: {visibility}m
          </Typography>
          <Typography variant="body1" component="p">
            Wind: {wind.speed}m/s
          </Typography>
          <Typography variant="body1" component="p">
            Clouds: {clouds.all}%
          </Typography>
        </div>

        <div className={s.charWrapper}>
          <Line data={data} options={options} />
        </div>
      </article>
    </section>
  );
}
