import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
} from '@mui/material';
import {
  Refresh as RefreshIcon,
  HighlightOff as HighlightOffIcon,
} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import weatherSelectors from '../../redux/weather/weather-selectors';
import weatherActions from '../../redux/weather/weather-actions';
import weatherOperations from '../../redux/weather/weather-operations';

export default function CardsItem() {
  const dispatch = useDispatch();
  const citys = useSelector(weatherSelectors.getCitys);

  const handleOnRefreshCity = id => () => {
    console.log(id);
    dispatch(weatherOperations.refreshCity(id));
  };

  const handleOnDelCity = id => () => {
    dispatch(weatherActions.delCity(id));
  };

  return (
    <>
      {citys &&
        citys.map(({ id, weather, name, sys, main, wind, clouds }) => (
          <Card raised key={id} style={{ position: 'relative' }}>
            <CardActions
              style={{ position: 'absolute', right: '40px', zIndex: 9 }}
            >
              <IconButton
                onClick={handleOnRefreshCity(id)}
                aria-label="refresh"
                color="primary"
              >
                <RefreshIcon />
              </IconButton>
            </CardActions>
            <CardActions style={{ position: 'absolute', right: 0, zIndex: 9 }}>
              <IconButton
                onClick={handleOnDelCity(id)}
                aria-label="refresh"
                color="error"
              >
                <HighlightOffIcon />
              </IconButton>
            </CardActions>

            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ width: 130 }}
                height="100"
                image={`https://openweathermap.org/img/w/${weather[0].icon}.png`}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h3" component="p">
                  {main.temp} °C
                </Typography>
                <Typography gutterBottom variant="h4" component="h2">
                  {name} {sys.country}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Wind: {wind.speed} m/s
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Clouds: {clouds.all}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Humidity: {main.humidity}%
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
    </>
  );
}
