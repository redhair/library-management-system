import React from 'react';
import ReactDOM from 'react-dom';
import Header from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Header>
      <span>test</span>
    </Header>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
