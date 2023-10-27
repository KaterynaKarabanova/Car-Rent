import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { carsReducer } from './CarSlice.jsx';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
const carsPersistConfig = {
  key: 'cars',
  storage,
  whitelist: ['favourite'],
};
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
export const store = configureStore({
  reducer: {
    cars: persistReducer(carsPersistConfig, carsReducer),
  },
  middleware,
});
export const persistor = persistStore(store);
