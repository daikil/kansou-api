"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const copyButton = document.querySelectorAll("button");
    const urlTexts = document.querySelectorAll(".url");
    const svgIcon = document.querySelector("svg");
    console.log(copyButton);
    for (const button of copyButton) {
        button.addEventListener("click", () => {
            if (!svgIcon)
                throw new Error("No svg icon");
            const index = Number(button.id);
            const urlText = urlTexts[index - 1].textContent;
            if (!urlText) {
                button.textContent = "Error";
            }
            else {
                navigator.clipboard.writeText(urlText);
                button.removeChild(svgIcon);
                button.textContent = "Copied !";
            }
            setTimeout(() => {
                button.textContent = "";
                button.appendChild(svgIcon);
            }, 2000);
        });
    }
});
//# sourceMappingURL=index.js.map