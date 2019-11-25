import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ValidationButton from 'react-validation/build/button';

const ValidationButtonWrapper = styled(ValidationButton)`
  font-weight: 800;
  font-size: 14px;
  text-transform: uppercase;
  display: inline-block;
  outline: 0;
  padding: 15px 30px;
  border-radius: 4px;
  border: 1px solid transparent;
  margin: 10px 0;
  box-shadow: 0px 5px 9.5px 0.5px rgba(61, 131, 104, 0.27);
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, background 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:disabled {
    background: #dddee7;
    color: #8898aa;
    border-color: #dfdfdf;
    box-shadow: none;
    cursor: default;
  }

  &:hover {
    text-decoration: none;
  }

  &:active {
    box-shadow: 0 0 0 0.5px rgba(50, 50, 93, 0.15), 0 2px 5px 0 rgba(50, 50, 93, 0.08),
      0 1px 1.5px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 0 0 0 transparent;
  }

  &:focus {
    /*outline: 0;*/
  }

  & + & {
    margin-left: 15px;
  }

  ${props => {
    if (props.level === 'primary') {
      return `
        color: rgb(242, 242, 242);
        background: #57c59b;

        &:active {
          background: darken(#57c59b, 5%);
        }
      `;
    } else if (props.level === 'secondary') {
      return `  
        color: rgb(242, 242, 242);
        background: #57c59b};

        &:active {
          background: darken(#57c59b, 5%);
        }
      `;
    } else if (props.level === 'danger') {
      return `
        color: rgb(242, 242, 242);
        background: rgb(246, 119, 119);

        &:active {
          background: darken(rgb(246, 119, 119), 5%);
        }
      `;
    } else if (props.level === 'outline') {
      return `
        color: #505050;
        background: transparent;
        border: 1px solid #d2dce0;
        box-shadow: none;

        &:active {
          box-shadow: none;
        }
      `;
    }
  }}
`;
const ButtonWrapper = styled.button`
  font-weight: 800;
  font-size: 14px;
  text-transform: uppercase;
  display: inline-block;
  outline: 0;
  padding: 15px 30px;
  border-radius: 4px;
  border: 1px solid transparent;
  margin: 10px 0;
  box-shadow: 0px 5px 9.5px 0.5px rgba(61, 131, 104, 0.27);
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, background 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:disabled {
    background: #dddee7;
    color: #8898aa;
    border-color: #dfdfdf;
    box-shadow: none;
    cursor: default;
  }

  &:hover {
    text-decoration: none;
  }

  &:active {
    box-shadow: 0 0 0 0.5px rgba(50, 50, 93, 0.15), 0 2px 5px 0 rgba(50, 50, 93, 0.08),
      0 1px 1.5px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 0 0 0 transparent;
  }

  &:focus {
    /*outline: 0;*/
  }

  & + & {
    margin-left: 15px;
  }

  ${props => {
    if (props.level === 'primary') {
      return `
        color: rgb(242, 242, 242);
        background: ${props.theme.primaryColor};

        &:active {
          background: darken(${props.theme.primaryColor}, 5%);
        }
      `;
    } else if (props.level === 'secondary') {
      return `  
        color: rgb(242, 242, 242);
        background: #57c59b;

        &:active {
          background: darken(#57c59b, 5%);
        }
      `;
    } else if (props.level === 'danger') {
      return `
        color: rgb(242, 242, 242);
        background: rgb(246, 119, 119);

        &:active {
          background: darken(rgb(246, 119, 119), 5%);
        }
      `;
    } else if (props.level === 'outline') {
      return `
        color: #505050;
        background: transparent;
        border: 1px solid #d2dce0;
        box-shadow: none;

        &:active {
          box-shadow: none;
        }
      `;
    } else if (props.level === 'link') {
      return `
        color: #505050;
        background: transparent;
        padding: 0;
        border: 0;
        box-shadow: none;
        margin: 0;
        font-weight: 500;
        color: #4c60e6;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      `;
    }
  }}
`;

export default function Button({ level, withValidation, children, onClick }) {
  if (withValidation) {
    return (
      <ValidationButtonWrapper onClick={onClick} level={level}>
        {children}
      </ValidationButtonWrapper>
    );
  } else {
    return (
      <ButtonWrapper onClick={onClick} level={level}>
        {children}
      </ButtonWrapper>
    );
  }
}

Button.propTypes = {
  level: PropTypes.string.isRequired,
  withValidation: PropTypes.bool,
  children: PropTypes.node
};
