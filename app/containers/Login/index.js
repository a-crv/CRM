import React, { Component } from 'react';
import {
  Redirect
} from 'react-router-dom';

export default class Login extends Component {

  state = {
    redirectToReferrer: false,
    loading: false
  }

  login = () => {
    this.setState({ loading: true });

    this.props.fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true,
        loading: false
      });
    });
  }

  render() {
    const { redirectToReferrer, loading } = this.state;

    if (redirectToReferrer) {
      return <Redirect to="/teams" />;
    }

    return (
      <div className="login login_background">
        <form className="login__form login-form login-form_fade-in-down">
          <h1 className="login-form__title">itemizer</h1>
          <input type="email" placeholder="employee@itemizecorp.com" className="login-form__input input" />
          <input type="password" placeholder="leave blank as new user" className="login-form__input input" />
          <button
            type="button"
            className={
              loading
              ? 'login-form__submit login-form__submit_loading'
              : 'login-form__submit'
            }
            onClick={this.login}
          >
            login
          </button>
        </form>
        {/*<div style={{display: 'none'}}>
          <h1>itemizer</h1>
          <p>All done! Check your itemizecorp email for your temporary password.</p>
          <a href="../dashboard">Login Now</a>
        </div>*/}
      </div>
    );
  }
}
