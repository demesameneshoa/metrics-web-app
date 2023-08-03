import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import Details from '../pages/Details';

describe('Cities page Renders Properly ', () => {
  const component = (
    <Provider store={configureStore}>
      <MemoryRouter initialEntries={[{ pathname: '/details', state: { city: { city: 'test city' } } }]}>
        <Details />
      </MemoryRouter>
    </Provider>
  );

  test('Cities Page component renders properly ', () => {
    const tree = render(component);
    expect(tree).toMatchSnapshot();
  });

  test('Should render the city lnks', () => {
    render(component);
    const element = screen.getByRole('link');
    expect(element).toBeInTheDocument();
  });
});
