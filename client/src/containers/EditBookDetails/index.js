import React, { useState, useEffect, useContext } from 'react';
import { Prompt } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import { AlertContext } from '../../components/AlertProvider';
import BookForm from '../../components/BookForm';
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

  useEffect(() => {
    if (!props.match.params.id) return;
    BookAPI.getOne(props.match.params)
      .then(res => {
        setBook({ ...res.data });
      })
      .catch(err => console.error({ err }));
  }, [props, props.match.params]);

  if (redirect) {
    return <Redirect to={`/books/${book._id}`} />;
  }

  return (
    <>
      <Prompt when={dirty} message="Are you sure you want to leave?" />
      <Link to={`/books/${props.match.params.id}`}>Back to Details</Link>
      <h4 style={{ marginBottom: '16px', marginTop: '50px' }}>Edit Book Details</h4>
      <BookForm
        onSubmit={e => {
          e.preventDefault();
          BookAPI.update(book)
            .then(res => {
              if (res.status === 200) {
                makeAlert({ type: 'success', message: 'Book Successfully Updated' });
                setDirty(false);
                setRedirect(true);
              }
            })
            .catch(err => console.error({ err }));
        }}
        onUpdate={updateBookInfo}
        submitButtonText="Update Book Info"
        book={book}
      />
    </>
  );
}
