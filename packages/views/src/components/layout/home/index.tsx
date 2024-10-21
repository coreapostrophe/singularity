import { Grid2 as Grid, Stack } from '@mui/material';
import { FC } from 'react';
import WorldBar from '../world-bar';
import Workspace from '../workspace';
import TitleBar from '../title-bar';
import { Window } from '@tauri-apps/api/window';

export interface HomeProps {
  window: Window;
}

const Home: FC<HomeProps> = (props) => {
  const { window } = props;

  return (
    <Stack height="100%">
      {Boolean(window) && <TitleBar window={window} />}
      <Grid container wrap="nowrap" flex={1}>
        <Grid minWidth="20rem">
          <WorldBar />
        </Grid>
        <Grid size="grow">
          <Workspace />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Home;
