import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { AlertContext } from '../../components/AlertProvider';
import Alert from '../../components/Alert';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import { Container } from '../../components/Grid';

export default function Layout({ component: Component, ...rest }) {
  const { alert } = useContext(AlertContext);

  return (
    <Route
      {...rest}
      render={props => (
        <>
          <Header>
            <h3>Library Management System</h3>
            <Nav />
          </Header>
          {alert && <Alert type={alert.type}>{alert.message}</Alert>}
          <Container style={{ padding: '75px' }}>
            <Component {...props} />
          </Container>
        </>
      )}
    />
  );
}
