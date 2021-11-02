import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import reduxStore from './redux/store';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      {/* <PersistGate loading={null} persistor={reduxStore.persistor}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
