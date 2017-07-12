import React, { PropTypes } from 'react';

const Row = ({ children }) => <tr>{children}</tr>;

Row.propTypes = {
  children: PropTypes.node.isRequired
};

export default Row;
