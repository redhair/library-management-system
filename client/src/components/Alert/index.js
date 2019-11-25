import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  border-radius: 4px;
  text-align: left;
  box-sizing: border-box;
  font-size: 14px;
  margin: 5px 0;
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

export default function Alert({ type, children }) {
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
    <Wrapper type={type}>
      <span style={{ marginRight: '15px' }}>{getIcon(type)}</span>
      <span>{children || 'Unknown Error: Try again later.'}</span>
    </Wrapper>
  );
}

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
