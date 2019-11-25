import React from 'react';
import ReactDOM from 'react-dom';
import BookForm from '../BookForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BookForm
      onSubmit={e => {
        e.preventDefault();
      }}
      onUpdate={() => {}}
      submitButtonText="Add New Book"
      book={{
        title: '',
        author: '',
        isbn: '',
        description: '',
        available: true
      }}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
