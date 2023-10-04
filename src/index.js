let mainDiv = document.querySelector("#content");


function headerMaker() {
    let header = document.createElement("header");
    header.classList.add("header");
    mainDiv.appendChild(header)
    let title = document.createElement("h1")
    title.classList.add("title");
    title.textContent = "La Parrilla";
    header.appendChild(title);
    let home = document.createElement("div")
    home.classList.add("home")
    home.textContent = "HOME"
    header.appendChild(home)
    let menu = document.createElement("div")
    menu.classList.add("menu")
    menu.textContent = "MENU"
    header.appendChild(menu)
    let contact = document.createElement("div")
    contact.classList.add("contact")
    contact.textContent = "CONTACT"
    header.appendChild(contact)

}

function mainMaker(){
    let main = document.createElement("main");
    main.classList.add("main");
    mainDiv.appendChild(main);
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
