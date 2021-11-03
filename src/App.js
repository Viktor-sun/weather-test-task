import React from 'react';
import AppBar from './components/AppBar';
import CardsContainer from './components/CardsContainer';
import Spinner from './components/Spinner';

function App() {
  return (
    <div className="App">
      <AppBar />
      <CardsContainer />
      <Spinner />
    </div>
  );
}

export default App;
