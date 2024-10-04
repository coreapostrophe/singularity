import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Singularity from './singularity.tsx';
import KudzuTheme from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={KudzuTheme}>
      <CssBaseline />
      <Singularity />
    </ThemeProvider>
  </StrictMode>,
);
