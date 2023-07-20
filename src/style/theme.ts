import { createTheme } from '@mui/material/styles';
import { purple, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: red[500],
    },
  },
});