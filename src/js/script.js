const createPopPup = () => {
    const header = document.querySelector("header");
    const popUp = document.createElement("div");
    const popUpIcon = document.createElement("a");
    const popUpButton = document.createElement("button")
    const popUpDiv = document.createElement("div");

    popUp.classList.add("popUp")
    popUpIcon.classList.add("popUpIcon")
    popUpButton.style.margin = 0
    popUpDiv.classList.add("no-show")

    popUpIcon.innerHTML = "Pesquisar"

    header.appendChild(popUp);
    popUp.appendChild(popUpButton);
    popUpButton.appendChild(popUpIcon);
    header.appendChild(popUpDiv)

    popUpButton.addEventListener("click", () => {

        popUpDiv.classList.toggle("show")
        popUpDiv.innerHTML = "<h4>Teste </h4>"


        
    })

}

createPopPup()