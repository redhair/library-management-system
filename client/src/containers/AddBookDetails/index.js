import React, { useState, useContext } from 'react';
import { Prompt } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import BookForm from '../../components/BookForm';
import { AlertContext } from '../../components/AlertProvider';
import { BookAPI } from '../../api';

export default function BookDetails(props) {
  const [book, setBook] = useState({
    title: '',
    author: '',
    isbn: '',
    description: ''
  });
  const [dirty, setDirty] = useState(false);
  const { makeAlert } = useContext(AlertContext);
  const [redirect, setRedirect] = useState(false);

  function updateBookInfo(e) {
    setDirty(true);
    setBook({ ...book, [e.target.name]: e.target.value });
  }

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Prompt when={dirty} message="Are you sure you want to leave?" />
      <Link to="/">Back to Library</Link>
      <h4 style={{ marginBottom: '16px', marginTop: '50px' }}>Add New Book</h4>
      <BookForm
        onSubmit={e => {
          e.preventDefault();
          BookAPI.create(book)
            .then(res => {
              if (res.status === 200) {
                makeAlert({ type: 'success', message: `${book.title} was successfully added.` });
                setDirty(false);
                setRedirect(true);
              }
            })
            .catch(err => console.error({ err }));
        }}
        onUpdate={updateBookInfo}
        submitButtonText="Add New Book"
        book={book}
      />
    </>
  );
}
