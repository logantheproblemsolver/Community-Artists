import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
  <BrowserRouter>
    <NavBar />
  </BrowserRouter>, div);
  ReactDom.unmountComponentAtNode(div);
});
