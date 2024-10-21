import { Close, Crop54, Minimize } from '@mui/icons-material';
import {
  Button,
  ButtonGroup,
  buttonGroupClasses,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { FC, MouseEventHandler } from 'react';
import { Window } from '@tauri-apps/api/window';

const WindowActionsWrapper = styled(ButtonGroup)({
  [`& .${buttonGroupClasses.grouped}`]: {
    borderRight: 'none',
    borderRadius: '0',
  },
});

export interface TitleBarProps {
  window: Window;
}

const TitleBar: FC<TitleBarProps> = (props) => {
  const { window: appWindow } = props;

  const dragWindow: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.buttons === 1) {
      event.detail === 2
        ? appWindow.toggleMaximize()
        : appWindow.startDragging();
    }
  };

  const stopDragPropagation: MouseEventHandler<HTMLButtonElement> = (event) =>
    event.stopPropagation();

  return (
    <Stack
      data-tauri-drag-region
      direction="row"
      bgcolor="background.100"
      alignItems="center"
      onMouseDown={dragWindow}
    >
      <Typography
        fontSize="0.75rem"
        flex={1}
        fontWeight={700}
        px={1}
        color="background.500"
      >
        Singularity
      </Typography>
      <WindowActionsWrapper variant="text">
        <Button
          size="small"
          onClick={() => appWindow.minimize()}
          onMouseDown={stopDragPropagation}
        >
          <Minimize sx={{ fontSize: 13, color: 'common.black' }} />
        </Button>
        <Button
          size="small"
          onClick={() => appWindow.toggleMaximize()}
          onMouseDown={stopDragPropagation}
        >
          <Crop54 sx={{ fontSize: 13, color: 'common.black' }} />
        </Button>
        <Button
          size="small"
          onClick={() => appWindow.close()}
          onMouseDown={stopDragPropagation}
        >
          <Close sx={{ fontSize: 13, color: 'common.black' }} />
        </Button>
      </WindowActionsWrapper>
    </Stack>
  );
};

export default TitleBar;
