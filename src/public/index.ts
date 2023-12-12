window.addEventListener("DOMContentLoaded", (): void => {
    const copyButton = document.querySelector("button");
    const urlText = document.querySelector(".url")?.textContent;
    const svgIcon = document.querySelector("svg");

    copyButton?.addEventListener("click", (): void => {
        if(!svgIcon) throw new Error("No svg icon");
        if(!urlText){
            copyButton.textContent = "Error";
        } else {
            navigator.clipboard.writeText(urlText);
            copyButton.removeChild(svgIcon);
            copyButton.textContent = "Copied !";
        }

        setTimeout((): void => {
            copyButton.textContent = "";
            copyButton.appendChild(svgIcon);
        }, 2000);
    })
})