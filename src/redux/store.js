import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import weatherReducer from './weather/weather-reducer';

const cityIdPersistConfig = {
  key: 'citysId',
  storage,
  whitelist: ['citysId'],
};

const persistedReducer = persistReducer(cityIdPersistConfig, weatherReducer);

const store = configureStore({
  reducer: {
    citysWeather: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

// eslint-disable-next-line
export default { store, persistor };
