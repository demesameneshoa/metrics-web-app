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
  countriesAirQuality: {},
  status: 'idle',
};

export const fetchAirQuality = createAsyncThunk(
  'airQuality/fetchAirQuality',
  async (city) => {
    const response = await axios.get(`https://api.api-ninjas.com/v1/airquality?city=${city}`, {
      headers: { 'X-Api-Key': 'jHzSXaz6+BR4RWSHKy7bQw==E4YD3ZZ8bPRDL0fU' },
    });
    return response.data;
  },
);

export const fetchAirQualityC = createAsyncThunk(
  'airQuality/fetchAirQualityC',
  async (country) => {
    const response = await axios.get(`https://api.api-ninjas.com/v1/airquality?city=${country}`, {
      headers: { 'X-Api-Key': 'jHzSXaz6+BR4RWSHKy7bQw==E4YD3ZZ8bPRDL0fU' },
    });
    return { country, data: response.data };
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
    builder
      .addCase(fetchAirQuality.fulfilled, (state, action) => {
        state.airquality = action.payload;
        state.status = 'completed';
      })
      .addCase(fetchAirQuality.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAirQualityC.fulfilled, (state, action) => {
        state.countriesAirQuality[action.payload.country] = action.payload.data;
      });
  },
});

export const { getCities, getAirquality } = aqSlice.actions;
export default aqSlice.reducer;
