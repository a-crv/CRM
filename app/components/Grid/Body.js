import React, { PropTypes } from 'react';

const Body = ({ children }) => (
  <tbody>{children}</tbody>
);

Body.propTypes = {
  children: PropTypes.node.isRequired
};

export default Body;
