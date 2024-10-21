import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import Home from './components/layout/home';
import KudzuTheme from './theme';
import { FC } from 'react';
import { Window } from '@tauri-apps/api/window';

import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/700.css';
import '@fontsource/source-sans-pro/900.css';

export interface SingularityProps {
  window: Window;
}

const Singularity: FC<SingularityProps> = (props) => {
  const { window } = props;

  return (
    <ThemeProvider theme={KudzuTheme}>
      <CssBaseline />
      <Box height="100vh">
        <Home window={window} />
      </Box>
    </ThemeProvider>
  );
};

export default Singularity;
