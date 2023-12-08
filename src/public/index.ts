window.addEventListener("DOMContentLoaded", (): void => {
    const copyButton = document.querySelector("button");
    const urlText = document.querySelector(".url")?.textContent;

    copyButton?.addEventListener("click", (): void => {
        if(!urlText){
            copyButton.textContent = "Error";
        } else {
            navigator.clipboard.writeText(urlText);
            copyButton.textContent = "copied";
        }

        setTimeout((): void => {
            copyButton.textContent = "copy";
        }, 2000);
    })
})