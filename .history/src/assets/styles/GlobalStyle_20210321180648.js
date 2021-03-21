import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Ranchers&display=swap');

  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Ranchers';
    margin: 0;
    padding: 0;
  }
  
  a, button {
    font-family: 'Ranchers', cursive;
  }
`;
