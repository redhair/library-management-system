import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Table from '../../components/Table';
import Alert from '../../components/Alert';
import Button from '../../components/Button';
import { EventAPI, BookAPI } from '../../api';

export default function BookHistory(props) {
  const [events, setEvents] = useState([]);
  const [alert, setAlert] = useState();

  useEffect(() => {
    EventAPI.getAll(props.match)
      .then(res => {
        setEvents(res.data);
      })
      .catch(err => console.error({ err }));
  }, [props.match]);

  const rows = events
    .sort((a, b) => {
      return b.timestamp - a.timestamp;
    })
    .map(event => {
      return {
        id: event._id,
        timestamp: new Date(parseInt(event.timestamp, 10)).toLocaleString(),
        bookState: <pre>{JSON.stringify(event.bookState, null, 2)}</pre>,
        name: event.name,
        actions: (
          <Button
            level="outline"
            onClick={() => {
              BookAPI.update(event.bookState)
                .then(res => {
                  if (res.status === 200) {
                    setAlert({ type: 'success', message: 'Book successfully restored' });
                  }
                })
                .catch(err => console.error({ err }));
            }}
          >
            Restore to this state
          </Button>
        )
      };
    });

  return (
    <>
      <Link to={`/books/${props.match.params.id}`}>Back to Details</Link>
      <h4 style={{ marginTop: '50px' }}>Audit Trail</h4>
      {alert && <Alert type={alert.type}>{alert.message}</Alert>}
      <Table style={{ marginTop: '16px' }} rows={rows} headers={['Timestamp', 'Book State', 'Event Type', 'Actions']} />
    </>
  );
}
