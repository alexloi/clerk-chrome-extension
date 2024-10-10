/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
});
// Listen for a message from other parts of the extension
chrome.runtime.onMessage.addListener((
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
message, sender, 
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
sendResponse) => {
    if (message.type === "GET_DATA") {
        // Perform some action or fetch data, then respond
        const data = { info: "Some data" };
        sendResponse(data);
    }
});
// Listen for changes in the tabs
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url) {
        console.log(`Tab updated: ${tab.url}`);
        // You can do something with the tab data here
    }
});

/******/ })()
;
//# sourceMappingURL=background.js.map