import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
  }
  button{
    cursor:pointer;
  }
  li{
    list-style-type: none;
  }
  
`;

export default GlobalStyle;
