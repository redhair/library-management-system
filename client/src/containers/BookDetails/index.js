import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Button from '../../components/Button';
import Modal from 'react-responsive-modal';
import { Row } from '../../components/Grid';
import { BookAPI } from '../../api';

export default function BookDetails(props) {
  const [book, setBook] = useState({
    title: '',
    author: '',
    isbn: '',
    description: ''
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    if (!props.match.params.id) return;
    BookAPI.getOne(props.match.params)
      .then(res => {
        setBook({ ...res.data });
      })
      .catch(err => console.error({ err }));
  }, [props, props.match.params]);

  if (redirect === true) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Modal
        open={modalOpen}
        onClose={closeModal}
        center
        styles={{
          modal: {
            backgroundColor: 'white',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            padding: '24px',
            maxWidth: '500px',
            width: '100%'
          }
        }}
      >
        <h2 style={{ marginTop: '5px', lineHeight: '36px' }}>Are you sure you want to delete {book && book.title}?</h2>
        <p>This action cannot be undone.</p>
        <Row>
          <Button level="outline" onClick={closeModal}>
            Cancel
          </Button>
          <Button
            level="danger"
            onClick={() => {
              BookAPI.delete(book)
                .then(res => {
                  if (res.status === 200) {
                    setRedirect(true);
                  }
                })
                .catch(err => console.error({ err }));
            }}
          >
            Delete
          </Button>
        </Row>
      </Modal>
      <Link to="/" style={{ marginBottom: '50px' }}>
        Back to Library
      </Link>
      <h4 style={{ marginTop: '50px' }}>Actions</h4>
      <Link style={{ marginRight: '16px' }} to={`/books/${book._id}/edit`}>
        <Button level="primary">Edit Details</Button>
      </Link>

      <Link style={{ marginRight: '16px' }} to={`/books/${book._id}/history`}>
        <Button level="outline">View History</Button>
      </Link>

      <Button
        level="danger"
        onClick={() => {
          openModal();
        }}
      >
        Delete Book
      </Button>

      <h4 style={{ marginTop: '50px' }}>Book Details</h4>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.isbn}</p>
      <p>{book.description}</p>
    </>
  );
}
