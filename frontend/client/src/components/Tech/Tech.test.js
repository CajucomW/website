import React from 'react';
import ReactDOM from 'react-dom';
import Tech from './Tech';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tech />, div);
  ReactDOM.unmountComponentAtNode(div);
});
