export {homeRender}

function homeMaker(){

    let mainHome = document.createElement("div");
    mainHome.classList.add("main-home");

    let logo = document.createElement("div");
    logo.classList.add("logo");

    let para = document.createElement("p");
    para.classList.add("para");
    para.textContent = "La mejor carne del mundo";

    mainHome.appendChild(logo);
    mainHome.appendChild(para);

    return mainHome

} 

function homeRender() {
    let main = document.querySelector(".main");
        main.innerHTML = "";
        main.appendChild(homeMaker());
    
    
}


