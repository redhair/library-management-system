import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Column } from '../Grid';
import { BoldText, LightText } from '../Typography';

const Wrapper = styled.div`
  margin-top: 16px;
  margin-right: 16px;
  padding: 24px;
  display: flex;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
  background-color: white;
  border-radius: 8px;
  color: #1c2646;
  height: 100%;
  width: 100%;
  transition: box-shadow 0.2s ease-in-out;
`;

function Book({ book, children }) {
  const { title, author, isbn, available } = book;

  return (
    <Wrapper>
      <Column xs={3} align="flex-start">
        <span>{title}</span>
        <BoldText style={{ marginTop: '6px' }}>{author}</BoldText>
        <LightText style={{ marginTop: '6px' }}>ISBN: {isbn}</LightText>
      </Column>
      <Column xs={3}>
        <span>
          <LightText>Available:</LightText> {available ? <BoldText>Yes</BoldText> : <BoldText>No</BoldText>}
        </span>
      </Column>
      <Column xs={6} align="flex-end">
        {children}
      </Column>
    </Wrapper>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    available: PropTypes.bool.isRequired
  }).isRequired
};

export default Book;
