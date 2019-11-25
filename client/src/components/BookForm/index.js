import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-validation/build/form';
import Input from '../Input';
import Button from '../Button';
import * as valid from '../../api/formValidator';

export default function BookForm({ onSubmit, submitButtonText, onUpdate, book }) {
  return (
    <Form onSubmit={onSubmit} style={{ maxWidth: '500px' }}>
      <Input
        type="text"
        validations={[valid.required]}
        placeholder="Title"
        name="title"
        value={book.title}
        label="Title"
        hideLabel
        onChange={onUpdate}
      />
      <Input
        type="text"
        validations={[valid.required]}
        placeholder="Author"
        name="author"
        value={book.author}
        label="Author"
        hideLabel
        onChange={onUpdate}
      />
      <Input
        type="text"
        validations={[valid.required, valid.isbn]}
        placeholder="ISBN"
        name="isbn"
        value={book.isbn}
        label="ISBN"
        hideLabel
        onChange={onUpdate}
      />
      <Input
        type="text"
        validations={[valid.required]}
        placeholder="Description"
        name="description"
        value={book.description}
        label="Description"
        hideLabel
        onChange={onUpdate}
      />
      <Button level="secondary" type="submit" withValidation>
        {submitButtonText}
      </Button>
    </Form>
  );
}

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitButtonText: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};
