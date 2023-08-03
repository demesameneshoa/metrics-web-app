import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/Home';
import { BrowserRouter } from 'react-router-dom';

describe('Home unit test', () => {
  describe('Home page Renders Properly ', () => {
    const component = (
        <Provider store={configureStore}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
     </Provider>
      );
      test('Home Page component renders properly ', () => {
        const tree = render(component);
        expect(tree).toMatchSnapshot();
      });
      test('Should render the correct hero', () => {
        render(component);
        const element = screen.getByText('Air Quality Metrics');
        expect(element).toBeInTheDocument();
      });
})
});