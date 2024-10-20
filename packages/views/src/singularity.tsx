import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import Home from './components/layout/home';
import KudzuTheme from './theme';

function Singularity() {
  return (
    <ThemeProvider theme={KudzuTheme}>
      <CssBaseline />
      <Box height="100vh">
        <Home />
      </Box>
    </ThemeProvider>
  );
}

export default Singularity;
