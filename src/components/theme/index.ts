import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#458FF6      '
    },
    secondary: {
      main: '#67C3F3'
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    fontSize: 12,
    fontFamily: 'Roboto, Arial'
  }
});

export default theme;
