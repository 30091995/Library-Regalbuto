import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html, body {
    height: 100%;
    margin: 0;
    overflow: hidden;
  }

#root{
    height: 100%; 
}

  body{
    background: ${p => p.theme.colors.black};
    color: ${p => p.theme.colors.white};
  }`

  export {GlobalStyles}