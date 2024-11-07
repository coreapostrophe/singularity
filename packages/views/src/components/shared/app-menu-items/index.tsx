import { MenuItem } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const AppMenuItem: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <MenuItem sx={{ fontSize: '0.75rem', px: 1.5, py: 0.5 }}>
      {children}
    </MenuItem>
  );
};

export default AppMenuItem;
