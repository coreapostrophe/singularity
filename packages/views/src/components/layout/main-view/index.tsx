import { Grid2 as Grid, Stack } from '@mui/material';
import { FC } from 'react';
import WorldBar from '../world-bar';
import Workspace from '../workspace';
import TitleBar from '../title-bar';

const MainView: FC = () => {
  return (
    <Stack height="100%" overflow="hidden">
      <TitleBar />
      <Grid container wrap="nowrap" flex={1} overflow="hidden">
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

export default MainView;
