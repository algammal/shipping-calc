import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: '#EBF1FF',
      paper: '#D4E3FF',
    },
    common: {
      white: '#FFFFFF',
    },
    primary: {
      main: '#0065fa',
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      allVariants: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  },
    components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body, #root': {
          height: '100%',
          margin: 0,
        },
        'ul':{
            listStyle: 'none',
            padding:0
        },
        'li':{
            'margin-bottom': '0.5rem',
            fontSize: '1.2rem',
        },
        'h1,h2':{
            'margin-top': 0,
            'font-size': '1.5rem',
        },
        '*': {
          boxSizing: 'border-box',
        },
      },
    },
  },

});