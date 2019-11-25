import React from 'react';
import ReactDOM from 'react-dom';
import Alert from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Alert type="success">Message</Alert>, div);
  ReactDOM.unmountComponentAtNode(div);
});
