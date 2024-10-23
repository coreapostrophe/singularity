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
import { FC, MouseEventHandler } from 'react';
import { Window } from '@tauri-apps/api/window';

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

export interface TitleBarProps {
  window: Window;
}

const TitleBar: FC<TitleBarProps> = (props) => {
  const { window } = props;

  const dragWindow: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.buttons === 1) {
      event.detail === 2 ? window.toggleMaximize() : window.startDragging();
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
        <ActionButton
          size="small"
          onClick={() => window.minimize()}
          onMouseDown={stopDragPropagation}
        >
          <Minimize sx={{ fontSize: 13, color: 'background.600' }} />
        </ActionButton>
        <ActionButton
          size="small"
          onClick={() => window.toggleMaximize()}
          onMouseDown={stopDragPropagation}
        >
          <Crop54 sx={{ fontSize: 13, color: 'background.600' }} />
        </ActionButton>
        <ActionButton
          size="small"
          onClick={() => window.close()}
          onMouseDown={stopDragPropagation}
        >
          <Close sx={{ fontSize: 13, color: 'background.600' }} />
        </ActionButton>
      </WindowActionsWrapper>
    </Stack>
  );
};

export default TitleBar;
