import React from 'react';
import PropTypes from 'prop-types';

import Container from './styled/Container';

export default function Table({ headings, data } = {}) {
  return (
    <Container>
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
            {headings.map((heading, index) => (
              <td key={index}>{item[heading.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Container>
  );
}

Table.propTypes = {
  headings: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
