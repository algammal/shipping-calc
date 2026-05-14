import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: '#EBF1FF',
      paper: '#D4E3FF',
    },
    primary: {
      main: '#0065fa',
    },
    warning: {
      main: '#f8b300',
    },
    common: {
      white: '#ffffff',
    },
  },

  shape: {
    borderRadius: 16,
  },

  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1:{
        marginTtop:0,
        fontWeight: 700,
        fontSize: '1.25rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '1.25rem',
      marginBottom: '16px',
    },
    body1: {
      fontSize: '1rem',
    },
  },

  components: {
    /* Global reset */
    MuiCssBaseline: {
      styleOverrides: {
        html: { height: '100%' },
        body: { height: '100%', margin: 0 },
        '#root': { height: '100%' },
        '*': { boxSizing: 'border-box' },
      },
    },

    /* Layout rows */
    MuiStack: {
      styleOverrides: {
        root: {
          '&.row': {
            flexDirection: 'row',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '16px',
          },
          '&.dimensionsRow': {
            flexDirection: 'row',
            gap: '32px',
            marginTop: '16px',
          },
          '&.fullHeightCenterColumn': {
            marginTop:'16px'
            },
        },
      },
    },

    /* Icon circle + colors */
    MuiPaper: {
      styleOverrides: {
        root: {
          '&.iconCircle': {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          '&.iconPrimary': {
            backgroundColor: '#0065fa',
            color: '#ffffff',
          },
          '&.iconWarning': {
            backgroundColor: '#f8b300',
            color: '#ffffff',
          },
        },
      },
    },

    /* Typography utility classes */
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.sectionTitle': {
            fontWeight: 700,
            marginBottom: '16px',
          },
          '&.valueText': {
            fontSize: '1.5rem',
            fontWeight: 700,
          },
        },
      },
    },
  },
});