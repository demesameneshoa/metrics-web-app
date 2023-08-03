import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import Hero from '../components/Hero';

describe('Hero Component Renders Properly ', () => {
  const component = (
    <Provider store={configureStore}>
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    </Provider>
  );
  test('Hero Component component renders properly ', () => {
    const tree = render(component);
    expect(tree).toMatchSnapshot();
  });
  test('Should render the back link', () => {
    render(component);
    const element = screen.getByText('Air Quality Metrics');
    expect(element).toBeInTheDocument();
  });
});
