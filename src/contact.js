export {contactRender}


function contactMaker(){
    let mainContact = document.createElement("div");
    mainContact.classList.add("main-contact");

    let title = elementMaker("h3", "contact-title", "About Us")
    let para = elementMaker("p", "contact-para", 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

    let adressTitle = elementMaker("h4", "contact-title", "Adress")
    let adressPara = elementMaker("p", "contact-para", "ola k ase")
    let adressLogo = elementMaker("p", "adress-logo", "")

    let phoneTitle = elementMaker("h4","contact-title","Phone")
    let phonePara = elementMaker("p", "contact-para", "ola k ase")
    let phoneLogo = elementMaker("p", "phone-logo", "")

    let emailTitle = elementMaker("h4", "contact-title", "Email")
    let emailPara = elementMaker("p", "contact-para", "ola k ase")
    let emailLogo = elementMaker("p", "email-logo", "")

    mainContact.appendChild(title);
    mainContact.appendChild(para);

    mainContact.appendChild(adressTitle);
    mainContact.appendChild(adressPara);
    mainContact.appendChild(adressLogo);

    mainContact.appendChild(phoneTitle)
    mainContact.appendChild(phonePara)
    mainContact.appendChild(phoneLogo)

    mainContact.appendChild(emailTitle)
    mainContact.appendChild(emailPara)
    mainContact.appendChild(emailLogo)

    return mainContact
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

function contactRender(){

    let main = document.querySelector(".main");
    main.innerHTML = "";
    main.appendChild(contactMaker())

}