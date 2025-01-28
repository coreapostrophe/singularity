import { Close, Crop54, Minimize } from '@mui/icons-material';
import {
  Button,
  ButtonGroup,
  buttonGroupClasses,
  Stack,
  styled,
  touchRippleClasses,
  Typography,
} from '@mui/material';
import { FC, MouseEventHandler, useCallback } from 'react';
import FileMenu from './file-menu';
import { useSingularityContext } from '../../../singularity';

const WindowActionsWrapper = styled(ButtonGroup)({
  [`& .${buttonGroupClasses.grouped}`]: {
    borderRight: 'none',
    borderRadius: '0',
  },
});

const ActionButton = styled(Button)({
  [`& .${touchRippleClasses.root}`]: {
    color: 'grey',
  },
});

const TitleBar: FC = () => {
  const { window } = useSingularityContext();

  const dragWindow: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (!!window && event.buttons === 1) {
        window.startDragging();
      }
    },
    [window],
  );

  const stopDragPropagation: MouseEventHandler<
    HTMLDivElement | HTMLButtonElement
  > = useCallback((event) => event.stopPropagation(), []);

  return (
    <Stack
      direction="row"
      alignItems="center"
      bgcolor="background.100"
      justifyContent="space-between"
      onMouseDown={dragWindow}
      py={0.5}
      sx={{ userSelect: 'none' }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography
          fontSize="0.75rem"
          flex={1}
          fontWeight={700}
          px={1}
          color="background.500"
          sx={{ userSelect: 'none' }}
        >
          Singularity
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          onMouseDown={stopDragPropagation}
        >
          <FileMenu />
        </Stack>
      </Stack>
      {window && (
        <WindowActionsWrapper variant="text">
          <ActionButton
            size="small"
            onClick={() => window?.minimize()}
            onMouseDown={stopDragPropagation}
          >
            <Minimize sx={{ fontSize: 13, color: 'background.600' }} />
          </ActionButton>
          <ActionButton
            size="small"
            onClick={() => window?.toggleMaximize()}
            onMouseDown={stopDragPropagation}
          >
            <Crop54 sx={{ fontSize: 13, color: 'background.600' }} />
          </ActionButton>
          <ActionButton
            size="small"
            onClick={() => window?.close()}
            onMouseDown={stopDragPropagation}
          >
            <Close sx={{ fontSize: 13, color: 'background.600' }} />
          </ActionButton>
        </WindowActionsWrapper>
      )}
    </Stack>
  );
};

export default TitleBar;
