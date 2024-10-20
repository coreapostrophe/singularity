import { Close, Crop54, Minimize } from '@mui/icons-material';
import {
  Button,
  ButtonGroup,
  buttonGroupClasses,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { FC } from 'react';

const WindowActionsWrapper = styled(ButtonGroup)({
  [`& .${buttonGroupClasses.grouped}`]: {
    borderRight: 'none',
    borderRadius: '0',
  },
});

const TitleBar: FC = () => {
  return (
    <Stack direction="row" bgcolor="background.100" alignItems="center">
      <Typography
        fontSize="0.75rem"
        flex={1}
        fontWeight={700}
        px={1}
        color="primary.main"
      >
        Singularity
      </Typography>
      <WindowActionsWrapper variant="text">
        <Button size="small">
          <Minimize sx={{ fontSize: 13 }} />
        </Button>
        <Button size="small">
          <Crop54 sx={{ fontSize: 13 }} />
        </Button>
        <Button size="small">
          <Close sx={{ fontSize: 13 }} />
        </Button>
      </WindowActionsWrapper>
    </Stack>
  );
};

export default TitleBar;
