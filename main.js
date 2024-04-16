const { app, screen, ipcMain, BrowserWindow } = require("electron");
// Enable live reload for all the files inside your project directory
require("electron-reload")(__dirname);
const path = require("node:path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 200 + 500,
    height: 200,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
    },
    transparent: true,
    frame: false,
    resizable: false,
    alwaysOnTop: true,
    // focusable: false,
    movable: false,
    x: 20,
    y: screen.getPrimaryDisplay().size.height - 20 - 200,
  });
  win.loadFile("./pages/tatau/index.html");
  win.setIgnoreMouseEvents(true);
  win.setFocusable(false);
  return win;
};
console.log(path.join(__dirname, "preload.cjs"));
const createCloseWindow = (parent) => {
  const win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    parent,
    width: 40,
    height: 80,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
    },
    transparent: true,
    frame: false,
    resizable: false,
    alwaysOnTop: true,
    focusable: true,
    movable: true,
    x: 25,
    y: screen.getPrimaryDisplay().size.height - 100,
  });
  win.loadFile("./pages/close_btn/index.html");
  return win;
};

const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
} else {
  app.on("second-instance", (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    // if (myWindow) {
    //   if (myWindow.isMinimized()) myWindow.restore();
    //   myWindow.focus();
    // }
  });

  // Create myWindow, load the rest of the app, etc...
  app.on("ready", () => {
    var mainWindow = createWindow();

    createCloseWindow(mainWindow);
  });
  ipcMain.on("close-app", (evt, arg) => {
    console.log("asdasd");
    app.quit();
  });
}
