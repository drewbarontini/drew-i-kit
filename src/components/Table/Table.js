import React from 'react';
import PropTypes from 'prop-types';

import StyledTable from './styled/Table';

const Table = ({ headings, data }) => (
  <StyledTable>
    <thead>
      <tr>
        {headings.map((heading, index) => (
          <th key={index}>{heading.title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {headings.map((heading, hindex) => (
            <td key={hindex}>{item[heading.key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </StyledTable>
);

Table.propTypes = {
  headings: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Table.displayName = 'Table';

export default Table;
