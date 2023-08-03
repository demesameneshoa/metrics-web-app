import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import Header from '../components/Header';

describe('Header Component Renders Properly ', () => {
  const component = (
    <Provider store={configureStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  test('Header Component component renders properly ', () => {
    const tree = render(component);
    expect(tree).toMatchSnapshot();
  });
  test('Should render the back link', () => {
    render(component);
    const element = screen.getByRole('link');
    expect(element).toBeInTheDocument();
  });
});
