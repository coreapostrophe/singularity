import { Add, Settings } from '@mui/icons-material';
import { Box, IconButton, Stack } from '@mui/material';
import { FC } from 'react';
import { useConstructs } from '../../../models/construct';
import { v4 as generateUuid } from 'uuid';

const Options: FC = () => {
  const { addConstruct } = useConstructs();

  const createConstruct = () => {
    addConstruct({ id: generateUuid() });
  };

  return (
    <Stack justifyContent="flex-end" direction="row" spacing={0.5}>
      <IconButton aria-label="add" size='small' onClick={createConstruct}>
        <Add />
      </IconButton>
      <IconButton aria-label="settings" size='small'>
        <Settings />
      </IconButton>
    </Stack>
  );
};

const ConstructsList: FC = () => {
  const { constructs } = useConstructs();

  return (
    <Stack flex="auto" overflow="auto">
      {constructs.map((construct) => (
        <Box key={construct.id}>{construct.title ?? 'Untitled'}</Box>
      ))}
    </Stack>
  );
};

const ConstructsCollection: FC = () => {
  return (
    <Stack height="100%" spacing={1}>
      <Options />
      <ConstructsList />
    </Stack>
  );
};

export default ConstructsCollection;
