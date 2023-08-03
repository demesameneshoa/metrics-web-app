import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from '../components/SearchBar';

describe('SearchBar Component Renders Properly ', () => {
  const component = (
    <Provider store={configureStore}>
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    </Provider>
  );
  test('SearchBar Component component renders properly ', () => {
    const tree = render(component);
    expect(tree).toMatchSnapshot();
  });
  test('Should render the Search text box', () => {
    render(component);
    const element = screen.getByRole('textbox');
    expect(element).toBeInTheDocument();
  });
});
