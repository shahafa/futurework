import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { grey } from 'material-ui/styles/colors';

const LogoStyle = styled.div`
  font-family: Caveat;
  color: ${grey[800]};
  letter-spacing: 0.5;
  ${props => props.size && `font-size: ${props.size}`};
`;

const Logo = ({ size }) => (
  <LogoStyle size={size}>-Futuro-</LogoStyle>
);

Logo.propTypes = {
  size: PropTypes.string.isRequired,
};

export default Logo;
