export {homeRender}

function homeMaker(){

    let mainHome = document.createElement("div");
    mainHome.classList.add("main-home");

    let img = document.createElement("div");
    img.classList.add("principal-img");

    let para = document.createElement("p");
    para.classList.add("para");
    para.textContent = "We brew with love 🤍";

    mainHome.appendChild(img);
    mainHome.appendChild(para);

    return mainHome

} 

function homeRender() {
    let main = document.querySelector(".main");
        main.innerHTML = "";
        main.appendChild(homeMaker());
    
    
}


