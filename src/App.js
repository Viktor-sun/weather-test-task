import React from 'react';
import { useDispatch } from 'react-redux';
import AppBar from './components/AppBar';
import CardsContainer from './components/CardsContainer';
import Spinner from './components/Spinner';
import weatherOperations from './redux/weather/weather-operations';

function App() {
  const dispatch = useDispatch();

  dispatch(weatherOperations.getCurrentCitys());

  return (
    <div className="App">
      <AppBar />
      <CardsContainer />
      <Spinner />
    </div>
  );
}

export default App;
