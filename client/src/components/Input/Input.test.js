import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-validation/build/form';
import Input from '../Input';
import * as valid from '../../api/formValidator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <Input
        type="text"
        validations={[valid.required, valid.isbn]}
        placeholder="ISBN"
        name="isbn"
        label="ISBN*"
        hideLabel
      />
    </Form>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
