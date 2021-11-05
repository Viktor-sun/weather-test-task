const getCitys = state => state.citysWeather.citys;
const isLoading = state => state.citysWeather.loading;
const getForecast = state => state.citysWeather.forecast;

// eslint-disable-next-line
export default { getCitys, isLoading, getForecast };
