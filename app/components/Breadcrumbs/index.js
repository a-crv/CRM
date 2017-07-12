import React, { PropTypes } from 'react';
// import { Link } from 'react-router-dom';

const Breadcrumbs = ({ className }) => (
  <ul className={`${className} breadcrumbs`}>
    <li className="breadcrumbs__item">
      Teams
    </li>
  </ul>
);

Breadcrumbs.propTypes = {
  className: PropTypes.string
};

Breadcrumbs.defaultProps = {
  className: ''
};

export default Breadcrumbs;
