"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const copyButton = document.querySelector("button");
    const urlText = document.querySelector(".url")?.textContent;
    const svgIcon = document.querySelector("svg");
    copyButton?.addEventListener("click", () => {
        if (!svgIcon)
            throw new Error("No svg icon");
        if (!urlText) {
            copyButton.textContent = "Error";
        }
        else {
            navigator.clipboard.writeText(urlText);
            copyButton.removeChild(svgIcon);
            copyButton.textContent = "Copied !";
        }
        setTimeout(() => {
            copyButton.textContent = "";
            copyButton.appendChild(svgIcon);
        }, 2000);
    });
});
//# sourceMappingURL=index.js.map