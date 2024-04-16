const { contextBridge, ipcRenderer } = require("electron");
contextBridge.exposeInMainWorld("FloricicaAPI", {
  closeApp() {
    ipcRenderer.send("close-app");
  },
});
