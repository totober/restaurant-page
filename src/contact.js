export {contactRender}

import {elementMaker} from "./index.js"


function contactMaker(){
    
    let mainContact = elementMaker("div", "main-contact", "")

    let title = elementMaker("h3", "", "About Us")
    let para = elementMaker("p", "contact-para", 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

    let adressTitle = elementMaker("h4", "", "Adress")
    let adressPara = elementMaker("p", "", "P. Sherman, 42 Wallaby Way, Sydney")

    let phoneTitle = elementMaker("h4","","Phone")
    let phonePara = elementMaker("p", "", "011-4567983")

    let emailTitle = elementMaker("h4", "", "Email")
    let emailPara = elementMaker("p", "", "beer-bar@gmail.com")

    mainContact.appendChild(title);
    mainContact.appendChild(para);

    mainContact.appendChild(adressTitle);
    mainContact.appendChild(adressPara);

    mainContact.appendChild(phoneTitle);
    mainContact.appendChild(phonePara);

    mainContact.appendChild(emailTitle);
    mainContact.appendChild(emailPara);

    return mainContact
}


function contactRender(){

    let main = document.querySelector(".main");
    main.innerHTML = "";
    main.appendChild(contactMaker())

}