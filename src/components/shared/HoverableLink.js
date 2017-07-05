import React from 'react';
import styled from 'styled-components';
import { lightBlue } from 'material-ui/styles/colors';
import { textProps } from './propReceivers';

const HoverableLink = styled.span`
  cursor: pointer;
  outline: none;
  ${textProps};

  &:active {
    color: ${lightBlue[700]};
  }

  &:hover {
    color: ${lightBlue[500]};
  }
`;

export default props => (
  <HoverableLink
    {...props}
    role="button"
    tabIndex={0}
  />
);
