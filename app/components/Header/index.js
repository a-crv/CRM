import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className={`${this.props.className} header`}>
        <Link to="https://app.itemize.com" className="header__logo" title="logo" />
      </header>
    );
  }
}

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {
  className: ''
};

export default Header;
