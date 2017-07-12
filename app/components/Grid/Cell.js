import React, { PropTypes } from 'react';

const Cell = ({ text, className, children }, { header }) => {
  if (header === true) {
    return (
      <th className={className}>
        <div title={text}>{text}</div>
      </th>
    );
  }

  return (
    <td className={className}>
      <div title={text || null}>{text || children}</div>
    </td>
  );
};

Cell.contextTypes = {
  header: PropTypes.bool
};

Cell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

Cell.defaultProps = {
  children: null,
  className: '',
  text: ''
};

export default Cell;
