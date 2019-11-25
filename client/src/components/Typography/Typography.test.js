import React from 'react';
import ReactDOM from 'react-dom';
import { BoldText, LightText } from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BoldText>X</BoldText>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LightText>X</LightText>, div);
  ReactDOM.unmountComponentAtNode(div);
});
