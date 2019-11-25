import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import { Container } from '../../components/Grid';

export default function Layout({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (
        <>
          <Header>
            <h3>Library Management System</h3>
            <Nav />
          </Header>
          <Container style={{ padding: '75px' }}>
            <Component {...props} />
          </Container>
        </>
      )}
    />
  );
}
