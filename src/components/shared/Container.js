import styled from 'styled-components';
import { flexboxProps, marginProps, paddingProps, sizeProps } from './propReceivers';

const Container = styled.div`
  ${flexboxProps}
  ${marginProps}
  ${paddingProps}
  ${sizeProps}
  ${props => props.stretch && 'flex: 1'};
`;

export default Container;
