const { app, screen, BrowserWindow } = require("electron");
// Enable live reload for all the files inside your project directory
require("electron-reload")(__dirname);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 200,
    height: 200,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    transparent: true,
    frame: false,
    resizable: false,
    alwaysOnTop: true,
    focusable: false,
    movable: false,
    x: 20,
    y: screen.getPrimaryDisplay().size.height - 20 - 200,
  });
  win.loadFile("./page/index.html");
  // win.setAlwaysOnTop(true, "screen");
  win.setIgnoreMouseEvents(true);
  win.setFocusable(false);
};

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
