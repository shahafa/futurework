import React from 'react';
import styled from 'styled-components';
import { lightBlue } from 'material-ui/styles/colors';
import { textProps } from './propReceivers';

const Link = styled.span`
  cursor: pointer;
  color: ${lightBlue[500]};
  outline: none;
  ${textProps};

  &:active {
    color: ${lightBlue[700]};
  }
`;

export default props => (
  <Link
    {...props}
    role="button"
    tabIndex={0}
  />
);
