import React from 'react';
import ReactDOM from 'react-dom';
import Table from '../Table';

it('renders without crashing', () => {
  const floorplans = [
    {
      id: '1',
      name: '1 Bedroom',
      price: '200'
    },
    {
      id: '2',
      name: 'Studio',
      price: '300'
    },
    {
      id: '3',
      name: '1c',
      price: '0'
    },
    {
      id: '4',
      name: '2a',
      price: '1000'
    },
    {
      id: '5',
      name: '2b',
      price: '3000'
    },
    {
      id: '6',
      name: '3a',
      price: '4400'
    }
  ];

  const rows = floorplans.map(f => {
    return {
      ...f,
      price: `$${f.price}`,
      square_footage: `${f.square_footage}ft&sup2;`
    };
  });
  const div = document.createElement('div');

  ReactDOM.render(<Table rows={rows} headers={['Name', 'Price']} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
