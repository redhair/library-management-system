import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Book from '../../components/Book';
import Alert from '../../components/Alert';
import Button from '../../components/Button';
import { Row } from '../../components/Grid';
import { BookAPI } from '../../api';

const SearchBox = styled.input`
  display: flex;
  flex-grow: 1;
  margin-right: 24px;
  background: white;
  padding: 16px;
  outline: 0;
  font-size: 14px;
  border: 0;
  border-radius: 4px;

  &::after {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f007';
  }
`;

export default function Books() {
  const [books, setBooks] = useState([]);
  const [needle, setNeedle] = useState('');
  const [alert, setAlert] = useState();
  const [loading, setLoading] = useState(true);

  function booksFilter(book) {
    const target = needle.toLowerCase();
    const title = book.title.toLowerCase();
    const isbn = book.isbn.toLowerCase();
    const author = book.author.toLowerCase();

    return title.includes(target) || isbn.includes(target) || author.includes(target);
  }

  function fetchBooks() {
    BookAPI.getAll({})
      .then(res => {
        if (res.status === 200) {
          setBooks(res.data);
          setLoading(false);
        }
      })
      .catch(err => console.error({ err }));
  }

  useEffect(() => {
    setLoading(true);
    fetchBooks();
  }, []);

  return (
    <>
      {alert && <Alert type={alert.type}>{alert.message}</Alert>}

      <Row align="center" style={{ margin: 'auto', width: '100%', maxWidth: '700px' }}>
        <SearchBox
          placeholder="Search by title, author, or ISBN"
          onChange={e => {
            setNeedle(e.target.value);
          }}
        />
        <Link to="/books/add">
          <Button level="secondary">Add new book</Button>
        </Link>
      </Row>

      <Row style={{ marginTop: '75px' }}>
        <h4>Books</h4>
      </Row>
      <Row canWrap>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          books.length > 0 &&
          books.filter(booksFilter).map(b => (
            <Book book={b} key={b._id}>
              <Row justify="flex-end">
                {b.available ? (
                  <Button
                    level="primary"
                    onClick={e => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (!b.available) {
                        return setAlert({ type: 'warning', message: `${b.title} is already checked out.` });
                      }
                      BookAPI.update({ ...b, available: false })
                        .then(res => {
                          if (res.status === 200) {
                            setAlert({ type: 'success', message: `${b.title} was successfully checked out` });
                            fetchBooks();
                          }
                        })
                        .catch(err => console.error({ err }));
                    }}
                  >
                    Check-Out
                  </Button>
                ) : (
                  <Button
                    level="primary"
                    onClick={e => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (b.available) {
                        return setAlert({ type: 'warning', message: `${b.title} is already checked in.` });
                      }
                      BookAPI.update({ ...b, available: true })
                        .then(res => {
                          if (res.status === 200) {
                            setAlert({ type: 'success', message: `${b.title} was successfully checked in` });
                            fetchBooks();
                          }
                        })
                        .catch(err => console.error({ err }));
                    }}
                  >
                    Check-In
                  </Button>
                )}
                <Link to={`/books/${b._id}`} style={{ marginLeft: '24px' }}>
                  <Button level="outline">Details</Button>
                </Link>
              </Row>
            </Book>
          ))
        )}
      </Row>
    </>
  );
}
