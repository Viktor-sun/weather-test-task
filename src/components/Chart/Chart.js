import React from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import weatherSelectors from '../../redux/weather/weather-selectors';
import s from './Chart.module.css';

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function Chart() {
  const forecast = useSelector(weatherSelectors.getForecast);

  const data = {
    labels: forecast.map(({ dt_txt }) => dt_txt),
    datasets: [
      {
        label: '# of Forecast °C',
        data: forecast.map(({ temp }) => temp),
        fill: false,
        backgroundColor: '#d3432d',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  return (
    <div className={s.charWrapper}>
      <Line data={data} options={options} />
    </div>
  );
}
