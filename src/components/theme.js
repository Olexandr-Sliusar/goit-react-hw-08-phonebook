import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  spacing: [0, 2, 4, 8, 16, 32, 64],
  palette: {
    mode: 'light',
    primary: {
      main: '#6200ee',
      dark: '#3700b3',
      light: '#b79eff',
    },
    secondary: {
      main: '#2cb7b7',
      light: '#6eefe4',
      dark: '#159d9d',
    },
  },
});
