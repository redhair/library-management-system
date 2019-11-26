import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AlertContext } from '../AlertProvider';

const Wrapper = styled.div`
  width: 90%;
  position: fixed;
  top: 80px;
  right: 20px;
  margin: 20px auto;
  z-index: 1000;
  max-width: 400px;

  transition: opacity 0.5s ease-in-out;
  padding: 20px;
  width: 100%;
  border-radius: 4px;
  text-align: left;
  box-sizing: border-box;
  font-size: 14px;
  margin: 5px 0;
  opacity: ${props => (props.shown ? 100 : 0)};
  background: ${props => {
    switch (props.type) {
      case 'info':
        return `#aebfe4`;
      case 'success':
        return `#c9ecdf`;
      case 'warning':
        return `#fff0ad`;
      case 'danger':
        return `#f9a7a7`;
      default:
        return 'lightgrey';
    }
  }};
`;

export default function Alert({ type, children, timer = 2000 }) {
  const [shown, setShown] = useState(true);
  const { hideAlert } = useContext(AlertContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShown(false);
    }, timer);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
        setShown(false);
      }
    };
  }, [timer]);

  function getIcon(type) {
    switch (type) {
      case 'info':
        return <i className="fas fa-info-circle" />;
      case 'success':
        return <i className="fas fa-check-circle" />;
      case 'danger':
        return <i className="fas fa-exclamation-triangle" />;
      case 'warning':
        return <i className="fas fa-exclamation-circle" />;
      default:
        return <i className="fas fa-info-circle" />;
    }
  }

  return (
    <Wrapper type={type} shown={shown} onTransitionEnd={e => hideAlert()}>
      <span style={{ marginRight: '15px' }}>{getIcon(type)}</span>
      <span>{children || 'Unknown Error: Try again later.'}</span>
    </Wrapper>
  );
}

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
