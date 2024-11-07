import {
  Button,
  Menu,
  menuClasses,
  styled,
  touchRippleClasses,
} from '@mui/material';
import { FC, PropsWithChildren, useState } from 'react';

const MenuButton = styled(Button)({
  [`& .${touchRippleClasses.root}`]: {
    color: 'grey',
  },
});
const MenuList = styled(Menu)({
  [`& .${menuClasses.list}`]: {
    padding: 0,
  },
});

export interface AppMenuProps {
  title: string;
}

const AppMenu: FC<PropsWithChildren<AppMenuProps>> = (props) => {
  const { children, title } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MenuButton
        size="small"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={openMenu}
        sx={{
          fontSize: '0.75rem',
          color: 'background.600',
          textTransform: 'none',
          lineHeight: 1,
          minWidth: 0,
          px: 1.5,
        }}
      >
        {title}
      </MenuButton>
      <MenuList
        anchorEl={anchorEl}
        open={open}
        onClick={closeMenu}
        onClose={closeMenu}
      >
        {children}
      </MenuList>
    </>
  );
};

export default AppMenu;
