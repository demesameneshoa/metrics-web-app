import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import Country from '../components/Countries';

describe('Country Component Renders Properly ', () => {
  const component = (
    <Provider store={configureStore}>
      <BrowserRouter>
        <Country
          name="test name"
          vector="test url"
          cities="test"
          airquality="4"
          isOdd={false}
        />
      </BrowserRouter>
    </Provider>
  );
  test('Country Component component renders properly ', () => {
    const tree = render(component);
    expect(tree).toMatchSnapshot();
  });
  test('Should render the country link', () => {
    render(component);
    const element = screen.getByRole('link');
    expect(element).toBeInTheDocument();
  });
});
