import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import Page from 'components/shared/Page';
import Container from 'components/shared/Container';
import Text from 'components/shared/Text';
import Logo from 'components/shared/Logo';
import Link from 'components/shared/Link';
import Input from 'components/shared/Input';
import Spacer from 'components/shared/Spacer';
import HoverableLink from 'components/shared/HoverableLink';
import Button from 'components/shared/Button';
import { grey } from 'material-ui/colors';

class LoginForm extends Component {
  static propTypes = {
    isAuthenticating: PropTypes.bool.isRequired,
    errorText: PropTypes.string.isRequired,
    onLoginClick: PropTypes.func.isRequired,
    onSignupClick: PropTypes.func.isRequired,
    onForgotPasswordClick: PropTypes.func.isRequired,
  }

  state = {
    email: '',
    emailErrorText: '',
    password: '',
    passwordErrorText: '',
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  validateEmail = () => {
    const { email } = this.state;
    if (validator.isEmpty(email)) {
      this.setState({ emailErrorText: 'Email address cannot be blank' });
      return false;
    } else if (!validator.isEmail(email)) {
      this.setState({ emailErrorText: 'Email address is not valid' });
      return false;
    }

    this.setState({ emailErrorText: '' });
    return true;
  };

  validatePassword = () => {
    const { password } = this.state;
    if (validator.isEmpty(password)) {
      this.setState({ passwordErrorText: 'Password cannot be blank' });
      return false;
    }

    this.setState({ passwordErrorText: '' });
    return true;
  }

  handleLoginButtonClick = () => {
    const { onLoginClick } = this.props;
    const {
      email,
      password,
    } = this.state;

    if (this.validateEmail() && this.validatePassword()) {
      onLoginClick(email, password);
    }
  }

  render() {
    const {
      email,
      emailErrorText,
      password,
      passwordErrorText,
    } = this.state;

    const {
      onSignupClick,
      onForgotPasswordClick,
    } = this.props;

    return (
      <Page directionColumn>
        <Container
          paddingTop="20px"
          paddingLeft="30px"
        >
          <Logo size="42px" />
        </Container>

        <Container
          directionColumn
          justifyContentCenter
          alignItemsCenter
          stretch
        >
          <Text
            size="56px"
            weight="200"
            align="center"
          >
            Log In
          </Text>

          <Container marginTop="17px">
            <Text
              align="center"
              size="20px"
              weight="300"
            >
              New to Futuro?
            </Text>

            <Spacer horizontal="7px" />

            <Link
              size="20px"
              weight="300"
              onClick={onSignupClick}
            >
              Sign Up
            </Link>
          </Container>

          <Container
            directionColumn
            width="360px"
            marginTop="30px"
            marginBottom="45px"
          >
            <Input
              label="Email"
              value={email}
              onChange={this.handleEmailChange}
              onBlur={this.validateEmail}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  this.handleLoginButtonClick();
                }
              }}
            />

            <Spacer vertical="12px" />

            <Input
              label="Password"
              type="password"
              value={password}
              onChange={this.handlePasswordChange}
              onBlur={this.validatePassword}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  this.handleLoginButtonClick();
                }
              }}
            />

            <Spacer vertical="14px" />

            <HoverableLink
              onClick={onForgotPasswordClick}
              weight="100"
              color={grey[600]}
            >
              Forgot Password?
            </HoverableLink>
          </Container>

          <Button onClick={this.handleLoginButtonClick}>
            Log In
          </Button>

          <Spacer vertical="10px" />
        </Container>
      </Page>
    );
  }
}

export default LoginForm;
