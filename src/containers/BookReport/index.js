import React, { useState, useEffect } from 'react';
import Table from '../../components/Table';
import { Row } from '../../components/Grid';
import Button from '../../components/Button';
import { BookAPI } from '../../api';

export default function BookHistory(props) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BookAPI.getAll({})
      .then(res => {
        setBooks(res.data);
      })
      .catch(err => console.error({ err }));
  }, [props.match]);

  function handleDownloadReport() {
    let csvContent =
      'data:text/csv;charset=utf-8,' +
      Object.keys(books[0]).join(',') +
      '\n' +
      books.map(e => Object.values(e).join(',')).join('\n');
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `database_report.csv`);
    document.body.appendChild(link);

    link.click();
  }

  const rows = books.map(book => {
    return {
      id: book._id,
      _id: book._id,
      available: book.available.toString(),
      title: book.title,
      author: book.author,
      isbn: book.isbn,
      description: book.description,
      version: book.__v
    };
  });

  return (
    <>
      <Row justify="space-between" align="flex-end">
        <h4 style={{ marginTop: '50px' }}>Library Report</h4>
        <Button
          level="link"
          onClick={() => {
            handleDownloadReport(rows);
          }}
        >
          Download CSV
        </Button>
      </Row>

      <Table
        style={{ marginTop: '16px' }}
        rows={rows}
        headers={['Mongo ID', 'Available', 'Title', 'Author', 'ISBN', 'Description', 'Version']}
      />
    </>
  );
}
