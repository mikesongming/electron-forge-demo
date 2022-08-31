// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts


// should set `nodeIntegration: true` in mainWindow
import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("versions", {
    chrome: process.versions["chrome"],
    node: process.versions["node"],
    electron: process.versions["electron"],
})