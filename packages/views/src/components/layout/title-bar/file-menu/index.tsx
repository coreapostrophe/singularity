import AppMenu from '../../../shared/app-menu';
import AppMenuItem from '../../../shared/app-menu-items';

const FileMenu = () => {
  return (
    <AppMenu title="File">
      <AppMenuItem>New</AppMenuItem>
      <AppMenuItem>Open</AppMenuItem>
      <AppMenuItem>Save</AppMenuItem>
      <AppMenuItem>Save as</AppMenuItem>
    </AppMenu>
  );
};

export default FileMenu;
