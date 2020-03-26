import React from 'react';
import ReactDom from 'react-dom';
import ArtworkData from './artworkData';




it('renders without crashing', () => {
  const div = document.createElement('div');
  const artworkdata = []
  ReactDom.render(<ArtworkData artworkdata={artworkdata} />, div);
  ReactDom.unmountComponentAtNode(div);
});
