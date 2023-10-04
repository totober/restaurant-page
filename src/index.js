import {homeRender} from "./home.js";

let mainDiv = document.querySelector("#content");
//console.log(home)
console.log("ola k ase")


function headerMaker() {
    let header = document.createElement("header");
    header.classList.add("header");
    mainDiv.appendChild(header)
    let title = document.createElement("h1")
    title.classList.add("title");
    title.textContent = "La Parrilla";
    header.appendChild(title);
    let tabContainer = document.createElement("div");
    tabContainer.classList.add("tab-container");
    header.appendChild(tabContainer);
    let home = document.createElement("div")
    home.classList.add("home")
    home.textContent = "HOME"
    home.addEventListener("click", homeRender)
    tabContainer.appendChild(home)
    let menu = document.createElement("div")
    menu.classList.add("menu")
    menu.textContent = "MENU"
    tabContainer.appendChild(menu)
    let contact = document.createElement("div")
    contact.classList.add("contact")
    contact.textContent = "CONTACT"
    tabContainer.appendChild(contact)

    return {
        home,
        menu,
        contact
    }

}

console.log(headerMaker())

function mainMaker(){
    let main = document.createElement("main");
    main.classList.add("main");
    mainDiv.appendChild(main);

    return {main}
}

function footerMaker(){
    let footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.textContent = "totober© 2023";
    mainDiv.appendChild(footer);
}


headerMaker()
mainMaker()
footerMaker()

console.log(mainMaker())

export {mainMaker}
