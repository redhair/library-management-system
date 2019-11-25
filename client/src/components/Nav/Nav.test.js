import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Nav from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Switch>
        <Nav />
      </Switch>
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
