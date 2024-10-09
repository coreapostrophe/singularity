import { Add, Settings } from '@mui/icons-material';
import { ButtonBase, IconButton, Stack } from '@mui/material';
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
      <IconButton aria-label="add" onClick={createConstruct}>
        <Add />
      </IconButton>
      <IconButton aria-label="settings">
        <Settings />
      </IconButton>
    </Stack>
  );
};

const ConstructsList: FC = () => {
  const { constructs } = useConstructs();

  return (
    <Stack flex="auto" overflow="auto" spacing={1}>
      {constructs.map((construct) => (
        <ButtonBase
          key={construct.id}
          component="div"
          sx={{
            p: 1,
            borderRadius: 1,
            bgcolor: 'grey.900',
          }}
        >
          {construct.title ?? 'Untitled'}
        </ButtonBase>
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
