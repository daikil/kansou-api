window.addEventListener("DOMContentLoaded", (): void => {
    const copyButton = document.querySelectorAll("button");
    const urlTexts = document.querySelectorAll(".url");
    const svgIcon = document.querySelector("svg");
    console.log(copyButton);
    
    for(const button of copyButton) {
        button.addEventListener("click", (): void => {
            if(!svgIcon) throw new Error("No svg icon");

            const index: number = Number(button.id);
            const urlText: string | null = urlTexts[index - 1].textContent;
            if(!urlText){
                button.textContent = "Error";
            } else {
                navigator.clipboard.writeText(urlText);
                button.removeChild(svgIcon);
                button.textContent = "Copied !";
            }
    
            setTimeout((): void => {
                button.textContent = "";
                button.appendChild(svgIcon);
            }, 2000);
        })
    }
});