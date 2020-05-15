import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// Passed in from the parent component or from mapStateToProps
const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      // Redirect to the notes page, if the user is authenticated
      <Redirect to='/notes' />
    )
  )} />
);

const Protected = ({ component: Component, loggedIn, loggedInAfter, ...rest }) => (
  <Route   
    {...rest}
    render={props => (
      loggedIn ? (
        <Component {...props} />
      ) : (loggedInAfter ? (
        // Redirect to the login page, if the user is already authenticated
        <Redirect to='/notes' />
      ) : (
        <Redirect to='/login' />
      ))
    )}  
  />
);

// Use the isAuthenticated slice of state to determine whether a user is logged in
const mapStateToProps = (state) => {
  // debugger; 
  return {
    loggedIn: state.session.isAuthenticated,
    loggedInAfter: state.sessionApi.isAuthenticated
  }
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));