import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ className }) => (
  <ul className={`${className} navigation`}>
    <li className="navigation__item">
      <Link to="/teams" className="btn btn_secondary">Teams</Link>
    </li>
    <li className="navigation__item">
      <Link to="/documents" className="btn btn_secondary">Documents</Link>
    </li>
  </ul>
);

Nav.propTypes = {
  className: PropTypes.string
};

Nav.defaultProps = {
  className: ''
};

export default Nav;
