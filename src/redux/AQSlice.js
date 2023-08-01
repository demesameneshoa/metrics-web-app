import { createSlice } from '@reduxjs/toolkit';
import countries from '../assets/Countries';

const initialState = {
  cities: [],
  countries,
  airquality: {
    overall_aqi: '',
    CO: { concentration: '', aqi: '' },
    NO2: { concentration: '', aqi: '' },
    O3: { concentration: '', aqi: '' },
    SO2: { concentration: '', aqi: '' },
    PM2_5: { concentration: '', aqi: '' },
    PM10: { concentration: '', aqi: '' },
  },
};
const aqSlice = createSlice({
  name: 'airQuality',
  initialState,
  reducers: {
    getCities: (state, action) => {
      state.cities = action.payload;
    },
  },
});

export const { getCities } = aqSlice.actions;
export default aqSlice.reducer;
