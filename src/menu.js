export {menuRender}


function menuMaker() {

        let mainMenu = document.createElement("div");
        mainMenu.classList.add("main-menu");

        mainMenu.appendChild(createCard(1, "Indian Pale Ale", 
        "If you like bitter, floral, earthy, citrusy, piney, fruity, and bitter flavor notes, you’ll like an IPA."));

        mainMenu.appendChild(createCard(2, "Belgian Pale Ale", 
        "The blond style is moderately high in alcohol, with some sweetness balanced out by the impression of spiciness and some lemony citrus."));

        mainMenu.appendChild(createCard(3, "Black Lager",
        "What differentiates a Black Lager from other dark beers, especially stouts and porters, is a relatively lighter body, with roasty dark notes from the malts stopping well short of any stout-level depth."));

        mainMenu.appendChild(createCard(4, "Kölsch",
        "They’re typically light, with delicate malt, delicate hops, and maybe a bit of delicate and/or tart fruitiness, all finishing pretty dry."));

        mainMenu.appendChild(createCard(5, "Irish Red Ale",
        "It’s about the malt content. Hops, and even a discernible bitterness, may be present to some degree, but more than that you’ll get notes of toast, caramel, buttery toffee, and some malty sweetness."));

        mainMenu.appendChild(createCard(6, "Witbier",
        "The flavor profile retains some light grainy sweetness, with added coriander and bitter orange peel. Oats are sometimes added to the malt to add silkiness to the mouthfeel."))

        return mainMenu

}

function createCard(item, beerName, ingredients ){

    let card = document.createElement("section");
    card.classList.add(`card-${item}`);
    card.classList.add("card");

    let dishImg = document.createElement("div");
    dishImg.classList.add("dish-img");

    let dishName = document.createElement("h3");
    dishName.classList.add("dish-name");
    dishName.textContent = beerName;

    let dishPara = document.createElement("p");
    dishPara.classList.add("dish-para");
    dishPara.textContent = ingredients;

    card.appendChild(dishImg)
    card.appendChild(dishName)
    card.appendChild(dishPara)

    return card
}

function menuRender(){
    let main = document.querySelector(".main");
    main.innerHTML = "";
    main.appendChild(menuMaker());
}