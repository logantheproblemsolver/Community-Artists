import React from 'react';
import ReactDom from 'react-dom';
import LandingPage from './LandingPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<LandingPage />, div);
  ReactDom.unmountComponentAtNode(div);
});
