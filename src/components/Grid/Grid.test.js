import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Column } from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Container></Container>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Row></Row>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Column xs={12}></Column>, div);
  ReactDOM.unmountComponentAtNode(div);
});
