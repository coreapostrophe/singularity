import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import KudzuTheme from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={KudzuTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
