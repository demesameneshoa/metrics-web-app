import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
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

export const fetchAirQuality = createAsyncThunk(
  'airQuality/fetchAirQuality',
  async (city) => {
    const response = await axios.get(`https://api.api-ninjas.com/v1/airquality?city=${city}`, {
      headers: { 'X-Api-Key': 'jHzSXaz6+BR4RWSHKy7bQw==E4YD3ZZ8bPRDL0fU' },
    });
    console.log(response.data);
    return response.data;
  },
);

const aqSlice = createSlice({
  name: 'airQuality',
  initialState,
  reducers: {
    getCities: (state, action) => {
      state.cities = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAirQuality.fulfilled, (state, action) => {
      state.airquality = action.payload;
    });
  },
});

export const { getCities, getAirquality } = aqSlice.actions;
export default aqSlice.reducer;
