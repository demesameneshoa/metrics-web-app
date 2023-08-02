import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cities from './pages/Cities';
import Details from './pages/Details';
import './styles/App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cities" element={<Cities />} />
    <Route path="/details" element={<Details />} />
  </Routes>
);

export default App;
