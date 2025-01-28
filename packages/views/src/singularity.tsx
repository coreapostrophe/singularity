import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import MainView from './components/layout/main-view';
import KudzuTheme from './theme';
import { createContext, FC, useContext } from 'react';
import { Window } from '@tauri-apps/api/window';

import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/700.css';
import '@fontsource/source-sans-pro/900.css';

export interface SingularityProps {
  window?: Window;
}

export const SingularityContext = createContext<SingularityProps>({});
export const useSingularityContext = () => useContext(SingularityContext);

const Singularity: FC<SingularityProps> = (props) => {
  return (
    <SingularityContext.Provider value={props}>
      <ThemeProvider theme={KudzuTheme}>
        <CssBaseline />
        <Box height="100vh">
          <MainView />
        </Box>
      </ThemeProvider>
    </SingularityContext.Provider>
  );
};

export default Singularity;
