import { Grid2 as Grid, Stack } from '@mui/material';
import { FC } from 'react';
import WorldBar from '../world-bar';
import Workspace from '../workspace';
import TitleBar from '../title-bar';

const Home: FC = () => {
  return (
    <Stack height="100%">
      <TitleBar />
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
