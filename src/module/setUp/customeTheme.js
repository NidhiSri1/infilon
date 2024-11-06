import { Box, CssBaseline, GlobalStyles, StepConnector } from '@mui/material';
import { ThemeProvider as MuiThemeProvider, createTheme, extendTheme } from '@mui/material/styles';
import * as React from 'react';


const customTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1152,
      lg: 1440,
      xl: 1920,
    },
  },
  shadows: [
    'none',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)', // border-like
    '0 1px 3px rgb(44 42 38 / 7%), 0 4px 16px rgb(44 42 38 / 6%)', // xs
    '0 1px 4px rgb(44 42 38 / 7%), 0 4px 24px rgb(44 42 38 / 7%)', // sm
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // md
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // lg
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', // xl
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  ],
  transitions: {
    duration: {
      // for micro interactions
      short: 150,
      // basic (default) timing
      standard: 200,
      // for complex animations
      complex: 300,
    },
  },
  typography: {
    fontSize: 14,
    '2xs': '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    // use Inter, and then the default MacOS font stack
    fontFamily: [
      '"Inter"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 78 / 70,
    },
    h2: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 44 / 36,
    },
    h3: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 44 / 36,
      letterSpacing: 0,
    },
    h4: {
      fontSize: '0.75rem',
      lineHeight: 42 / 28,
      letterSpacing: 0,
    },
  },
});

export function ThemeProvider({ children }) {

  const themeWithNewPalette = {
    ...customTheme,
    
  };
  
  delete themeWithNewPalette?.vars;
  const theme = extendTheme(themeWithNewPalette, {})

  return (
    <MuiThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },
          html: {
            minHeight: '100vh',
          },
          body: {
            minHeight: '100vh',
          },
          '.Mui-focusVisible': {
            boxShadow: `0 0 0 2px ${theme.palette.primary['200']} !important`,
          },
          '.MuiTablePagination-select': {
            paddingBottom: `1px !important`,
          },
          '.MuiDataGrid-menuList': {
            '&&&': {
              padding: 4,
            },
          },
        }}
      />
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
