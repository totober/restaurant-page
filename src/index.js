import {homeRender} from "./home.js";
import {menuRender} from "./menu.js";
import {contactRender} from "./contact.js";


//console.log(home)
console.log("ola k ase")


function headerMaker() {
    let header = document.createElement("header");
    header.classList.add("header");

    let title = document.createElement("h1")
    title.classList.add("title");
    title.textContent = "Beer Bar";
    header.appendChild(title);

    header.appendChild(navMaker());
    console.log(navMaker())

    return header
}

console.log(headerMaker())

function navMaker(){

    let nav = document.createElement("nav");
    nav.classList.add("nav");

    let home = document.createElement("div")
    home.classList.add("home")
    home.textContent = "HOME"
    home.addEventListener("click", homeRender)
    nav.appendChild(home)

    let menu = document.createElement("div")
    menu.classList.add("menu")
    menu.textContent = "MENU"
    menu.addEventListener("click", menuRender)
    nav.appendChild(menu)
    
    let contact = document.createElement("div")
    contact.classList.add("contact")
    contact.textContent = "CONTACT"
    contact.addEventListener("click", contactRender)
    nav.appendChild(contact)


    return nav
}



function mainMaker(){
    let main = document.createElement("main");
    main.classList.add("main");

    return main
}

console.log(mainMaker())

function footerMaker(){
    let footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.textContent = "totober© 2023";

    return footer
}

console.log(footerMaker())

function webRender() {
    let mainDiv = document.querySelector("#content");
console.log(mainDiv)
    mainDiv.appendChild(headerMaker());
    mainDiv.appendChild(mainMaker());
    mainDiv.appendChild(footerMaker());

}


webRender()

