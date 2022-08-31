// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts


window.addEventListener("DOMContentLoaded", () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if (element) {
            element.innerText = text;
        }
    };

    for (const type of ["chrome", "node", "electron"]) {
        replaceText(`${type}-version`, process.versions[type]);
    }
});


// BUG: when import contextBridge, "Unable to load preload script" 
//
// import { contextBridge } from "electron";
// 
// contextBridge.exposeInMainWorld("versions", {
//     chrome: process.versions["chrome"],
//     node: process.versions["node"],
//     electron: process.versions["electron"],
// })