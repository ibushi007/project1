const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("imgDl", {
  // window.imgDl.fetchImgs
  async fetchImgs(targetUrl) {
    const result = await ipcRenderer.invoke("fetchImgs", targetUrl);
    return result;
  },

  // window.imgDl.saveImgs
  async saveImgs() {
    const result = await ipcRenderer.invoke("saveImgs");
    return result;
  },
});
