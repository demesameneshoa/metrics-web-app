import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import City from '../components/City';

describe('City Component Renders Properly ', () => {
  const component = (
    <Provider store={configureStore}>
      <BrowserRouter>
        <City />
      </BrowserRouter>
    </Provider>
  );
  test('City Component component renders properly ', () => {
    const tree = render(component);
    expect(tree).toMatchSnapshot();
  });
  test('Should render the City Details link', () => {
    render(component);
    const element = screen.getByRole('link');
    expect(element).toBeInTheDocument();
  });
});
