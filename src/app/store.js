import { configureStore } from '@reduxjs/toolkit';
import CarsCreate from '../features/cars/CarsCreate';

export const store = configureStore({
  reducer: {
    car: CarsCreate,
  },
});
