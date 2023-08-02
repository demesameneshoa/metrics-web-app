import can from './maps/Canada.png';
import jam from './maps/Jamica.png';
import mex from './maps/Mexico.png';
import usa from './maps/USA.png';

const countries = [
  {
    continent: 'North America',
    name: 'Canada',
    map: can,
    cities: ['Ottawa', 'Victoria', 'Toronto'],
  },
  {
    continent: 'North America',
    name: 'Jamaica',
    map: jam,
    cities: ['Kingstone', 'Portmore', 'Montego Bay'],
  },
  {
    continent: 'North America',
    name: 'Mexico',
    map: mex,
    cities: ['Mexico City', 'Tijuana', 'Acapulco'],
  },
  {
    continent: 'North America',
    name: 'United States of Amerca',
    map: usa,
    cities: ['New York', 'Washington', 'Atlanta'],
  },
];

export default countries;
