// Початкове значення стану Redux для кореневого редюсера,
// якщо не передати параметр preloadedState.
import { carsReducer } from './CarSlice.jsx';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [],
    },
  }),
];
export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
  middleware,
});
