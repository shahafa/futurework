import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { resetAuthState, login } from 'actions/authActions';
import LoginForm from 'components/LoginForm';

class LoginPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    isAuthenticating: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorText: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(resetAuthState());
  }

  handleLoginButtonClick = (email, password) => {
    const { dispatch } = this.props;
    dispatch(login(email, password));
  }

  render() {
    const {
      history,
      isAuthenticating,
      isAuthenticated,
      errorText,
    } = this.props;

    if (isAuthenticated) {
      return <Redirect to={{ pathname: '/meals' }} />;
    }

    return (
      <LoginForm
        isAuthenticating={isAuthenticating}
        errorText={errorText}
        onLoginClick={this.handleLoginButtonClick}
        onSignupClick={() => history.push('/signup')}
        onForgotPasswordClick={() => history.push('/forgot')}
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticating: state.auth.isAuthenticating,
  isAuthenticated: state.auth.isAuthenticated,
  errorText: state.auth.errorText,
});

export default connect(mapStateToProps)(LoginPage);
