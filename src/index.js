import {homeRender} from "./home.js";
import {menuRender} from "./menu.js";
import {contactRender} from "./contact.js";

export{elementMaker}


window.addEventListener("load", homeRender)


function headerMaker() {

    let header = elementMaker("header", "header", "")

    let title = elementMaker("h1", "title", "BEER BAR")

    let logo = elementMaker("p", "logo", "")

    header.appendChild(title); 
    title.appendChild(logo)
    header.appendChild(navMaker());

    return header
}



function navMaker(){

    let nav = elementMaker("nav", "nav", "")

    let home = elementMaker("div", "home", "HOME")
    home.addEventListener("click", homeRender)

    let menu = elementMaker("div", "menu", "MENU")
    menu.addEventListener("click", menuRender)

    let contact = elementMaker("div", "contact", "CONTACT")
    contact.addEventListener("click", contactRender)

    nav.appendChild(home)
    nav.appendChild(menu)
    nav.appendChild(contact)

    return nav
}


function mainMaker(){

    let main = elementMaker("main", "main", "")

    return main
}


function footerMaker(){

    let footer = elementMaker("footer", "footer", "totober© 2023")

    return footer
}


function elementMaker(elementWithQuotes, classWithQuotes, textWithQuotes) {
  
    let el = document.createElement(elementWithQuotes);

    if(classWithQuotes !== "") {
       el.classList.add(classWithQuotes); 
    }
    if(textWithQuotes !== "") {
       el.textContent = textWithQuotes; 
    }

    return el
}


function webRender() {
    let mainDiv = document.querySelector("#content");
    mainDiv.appendChild(headerMaker());
    mainDiv.appendChild(mainMaker());
    mainDiv.appendChild(footerMaker());

}


webRender()

