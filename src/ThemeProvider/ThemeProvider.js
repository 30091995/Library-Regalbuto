import React from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { defaultTheme } from './defaultTheme';

export const ThemeProvider = ({ children }) => {
  return (
    <StyledProvider theme={defaultTheme}>
      {children}
      <GlobalStyles />
    </StyledProvider>
  );
};