import { configureStore } from '@reduxjs/toolkit';
import aqSlice from './AQSlice';

export default configureStore({
  reducer: {
    airQuality: aqSlice,
  },
});
