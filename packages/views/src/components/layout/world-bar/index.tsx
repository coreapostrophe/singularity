import { Paper } from '@mui/material';
import { FC } from 'react';
import ConstructsCollection from '../constructs-collection';

const WorldBar: FC = () => {
  return (
    <Paper square sx={{ height: '100%', p: 1 }} elevation={1}>
      <ConstructsCollection />
    </Paper>
  );
};

export default WorldBar;
