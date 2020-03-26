import React from 'react';
import ReactDom from 'react-dom';
import UploadArtwork from './uploadArtwork';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<UploadArtwork />, div);
  ReactDom.unmountComponentAtNode(div);
});
