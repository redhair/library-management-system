import React from 'react';
import validator from 'validator';

export const required = value => {
  if (!value.toString().trim().length) {
    return <p className="error-message">Required</p>;
  }
};

export const isbn = value => {
  if (!validator.isISBN(value)) {
    return <p className="error-message">{value} is not a valid ISBN.</p>;
  }
};
