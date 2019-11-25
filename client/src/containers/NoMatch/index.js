import React from 'react';

export default function NoMatch({ location }) {
  return (
    <div style={{ height: '75vh' }}>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
