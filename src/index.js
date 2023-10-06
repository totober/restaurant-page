import {homeRender} from "./home.js";
import {menuRender} from "./menu.js";
import {contactRender} from "./contact.js";


function headerMaker() {
    let header = document.createElement("header");
    header.classList.add("header");

    let title = document.createElement("h1")
    title.classList.add("title");
    title.textContent = "Beer Bar";
    header.appendChild(title);
    let logo = document.createElement("p")
    logo.classList.add("logo");

    header.appendChild(logo) 
    header.appendChild(navMaker());


    return header
}

function navMaker(){

    let main = mainMaker();

    let nav = document.createElement("nav");
    nav.classList.add("nav");

    window.addEventListener("load", homeRender)

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


function footerMaker(){
    let footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.textContent = "totober© 2023";

    return footer
}


function webRender() {
    let mainDiv = document.querySelector("#content");
    mainDiv.appendChild(headerMaker());
    mainDiv.appendChild(mainMaker());
    mainDiv.appendChild(footerMaker());

}


webRender()

