import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
const Row = styled.tr`
  &:nth-child(even) {
    background: #f8fafb;
  }

  &:nth-child(odd) {
    background: white;
  }
`;
const Head = styled.thead`
  & ${Row} {
    background: #f8fafb;
  }
`;
const Header = styled.th`
  padding: 20px;
  text-align: left;
`;
const Body = styled.tbody``;

const Column = styled.td`
  padding: 20px;
  color: #505050;
`;

function Table({ rows, headers, ...rest }) {
  return (
    <Wrapper {...rest}>
      <Head>
        <Row>
          {headers.map((header, i) => (
            <Header key={`${header}_${i}`} align="left">
              {header}
            </Header>
          ))}
        </Row>
      </Head>
      <Body>
        {rows.map(row => {
          return (
            <Row key={row.id}>
              {Object.keys(row)
                .filter(key => key !== 'id')
                .map((column, i) => (
                  <Column key={`Row_${row.id}_Column_${i}`}>
                    <div>{row[column]}</div>
                  </Column>
                ))}
            </Row>
          );
        })}
      </Body>
    </Wrapper>
  );
}

Table.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired,
  headers: PropTypes.array
};

export default Table;
