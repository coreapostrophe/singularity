import { Add, Settings } from '@mui/icons-material';
import { Box, IconButton, Stack } from '@mui/material';
import { FC } from 'react';

const Options: FC = () => {
  return (
    <Stack justifyContent="flex-end" direction="row" spacing={0.5}>
      <IconButton aria-label="add">
        <Add />
      </IconButton>
      <IconButton aria-label="delete">
        <Settings />
      </IconButton>
    </Stack>
  );
};

const ConstructsCollection: FC = () => {
  // const constructs: Construct[] = [
  //   {
  //     id: 'cons-1',
  //     title: 'Construct 1',
  //     features: [],
  //     proofs: [],
  //   },
  // ];

  return (
    <Box height="100%">
      <Options />
    </Box>
  );
};

export default ConstructsCollection;
