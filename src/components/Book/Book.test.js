import React from 'react';
import ReactDOM from 'react-dom';
import Book from '../Book';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const book = {
    _id: '5dd984dd6d1e36736f4dffcf',
    title: 'The Mysterious Stranger',
    author: 'Mark Twain',
    isbn: '001001011100101',
    description: 'A Great Tale',
    available: true,
    __v: 0
  };
  ReactDOM.render(<Book book={book} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
