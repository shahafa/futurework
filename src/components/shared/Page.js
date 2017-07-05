import styled from 'styled-components';
import { flexboxProps, marginProps, paddingProps } from './propReceivers';

const Page = styled.div`
  ${flexboxProps}
  ${marginProps}
  ${paddingProps}
  height: 100vh;
  font-family: Roboto;
  margin: 0;
  padding: 0;
  
  *, & {
    box-sizing: border-box;
  }
`;

export default Page;
