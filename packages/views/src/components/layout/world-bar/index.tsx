import { Box } from '@mui/material';
import { FC } from 'react';
import ConstructsCollection from '../constructs-collection';

const WorldBar: FC = () => {
  return (
    <Box p={1} height="100%" bgcolor="background.100">
      <ConstructsCollection />
    </Box>
  );
};

export default WorldBar;
