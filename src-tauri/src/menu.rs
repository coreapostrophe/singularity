use tauri::{CustomMenuItem, Menu, Submenu};

pub struct AppMenu;

impl AppMenu {
    pub fn new() -> Menu {
        Menu::new().add_submenu(Self::file())
    }

    fn file() -> Submenu {
        let new = CustomMenuItem::new("new".to_string(), "New");
        Submenu::new("File", Menu::new().add_item(new))
    }
}
