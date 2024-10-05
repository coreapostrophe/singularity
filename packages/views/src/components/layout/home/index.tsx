import { Grid2 as Grid } from '@mui/material';
import { FC } from 'react';
import WorldBar from '../world-bar';
import Workspace from '../workspace';

const Home: FC = () => {
  return (
    <Grid container wrap="nowrap" height="100%">
      <Grid minWidth="20rem">
        <WorldBar />
      </Grid>
      <Grid size="grow">
        <Workspace />
      </Grid>
    </Grid>
  );
};

export default Home;
