import React from 'react';
import ReactDom from 'react-dom';
import ShowArtwork from './showArtwork';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<ShowArtwork />, div);
  ReactDom.unmountComponentAtNode(div);
});
