import { createGlobalStyle } from 'styled-components';
import './fonts.css';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  a, button {
    font-family: 'Poppins', sans-serif;
  }
`;
