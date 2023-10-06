export {homeRender}

import {elementMaker} from "./index.js"

function homeMaker(){

    let mainHome = elementMaker("div", "main-home", "")

    let img = elementMaker("div", "principal-img", "")

    let para = elementMaker("p", "para", "We brew with love 🤍")


    mainHome.appendChild(img);
    mainHome.appendChild(para);

    return mainHome
} 

function homeRender() {
    let main = document.querySelector(".main");
        main.innerHTML = "";
        main.appendChild(homeMaker()); 
}


