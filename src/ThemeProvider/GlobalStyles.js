import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html, body {
    height: 100%;
    margin: 0;
    overflow: hidden;
  }


  body{
    background: ${p => p.theme.colors.black};
  }`

  export {GlobalStyles}