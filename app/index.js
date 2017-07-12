import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect
} from 'react-router-dom';

import App from 'containers/App';
import Login from 'containers/Login';
import store from 'store';

import 'index.html';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 1000); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 1000);
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login'
          }}
        />
      )
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="root">
        <Route path="/login" render={() => <Login fakeAuth={fakeAuth} />} />
        <PrivateRoute path="/" component={App} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
