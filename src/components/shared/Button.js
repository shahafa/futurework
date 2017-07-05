import React from 'react';
import styled from 'styled-components';
import { lightBlue } from 'material-ui/colors';

const Button = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 168px;
    height: 43px;
    color: ${lightBlue[500]};
    box-shadow: inset 0 0 0 1px ${lightBlue[500]};
    cursor: pointer;
    transition: background-color .3s,color .3s,background .3s,box-shadow .1s ease-in-out;
    border-radius: 999px;
    font-weight: 300;
    outline: none;

    &:hover {
      color: white;
      background-color: ${lightBlue[500]};
    }

    &:active {
      background-color: ${lightBlue[700]};
    }
`;

export default props => (
  <Button
    {...props}
    role="button"
    tabIndex={0}
  />
);
