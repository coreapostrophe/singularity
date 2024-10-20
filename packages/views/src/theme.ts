import { createTheme } from '@mui/material';
import { ColorPartial } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface TypeBackground extends ColorPartial {}
}

export default createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#C05746',
      '50': '#fcf5f4',
      '100': '#fae9e6',
      '200': '#f6d7d2',
      '300': '#eebbb3',
      '400': '#e29487',
      '500': '#d46f5f',
      '600': '#c05746',
      '700': '#a04435',
      '800': '#853b2f',
      '900': '#6f362d',
    },
    secondary: {
      main: '#7A918D',
      '50': '#f6f7f7',
      '100': '#e0e7e5',
      '200': '#c1cecb',
      '300': '#9aaeaa',
      '400': '#7a918d',
      '500': '#5a726e',
      '600': '#475a57',
      '700': '#3b4a48',
      '800': '#323d3b',
      '900': '#2c3534',
    },
    background: {
      paper: '#FEF7EB',
      default: '#FEF7EB',
      '50': '#fef7eb',
      '100': '#fdf0d7',
      '200': '#faddae',
      '300': '#f6c37b',
      '400': '#f2a045',
      '500': '#ee8521',
      '600': '#df6a17',
      '700': '#b95115',
      '800': '#944018',
      '900': '#773617',
    },
    common: {
      black: '#040403',
      white: '#272727',
    },
  },
  typography: {
    fontFamily: 'Source Sans Pro, sans-serif',
  },
});
