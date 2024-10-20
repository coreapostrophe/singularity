import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import Home from './components/layout/home';
import KudzuTheme from './theme';
import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/700.css';
import '@fontsource/source-sans-pro/900.css';

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
