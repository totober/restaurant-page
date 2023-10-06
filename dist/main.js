/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactRender: () => (/* binding */ contactRender)
/* harmony export */ });



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

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeRender: () => (/* binding */ homeRender)
/* harmony export */ });


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




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuRender: () => (/* binding */ menuRender)
/* harmony export */ });



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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





function headerMaker() {
    let header = document.createElement("header");
    header.classList.add("header");

    let title = document.createElement("h1")
    title.classList.add("title");
    title.textContent = "BEER BAR";
    header.appendChild(title);
    let logo = document.createElement("p")
    logo.classList.add("logo");

    title.appendChild(logo) 
    header.appendChild(navMaker());


    return header
}

function navMaker(){

    let main = mainMaker();

    let nav = document.createElement("nav");
    nav.classList.add("nav");

    window.addEventListener("load", _home_js__WEBPACK_IMPORTED_MODULE_0__.homeRender)

    let home = document.createElement("div")
    home.classList.add("home")
    home.textContent = "HOME"
    home.addEventListener("click", _home_js__WEBPACK_IMPORTED_MODULE_0__.homeRender)
    nav.appendChild(home)

    let menu = document.createElement("div")
    menu.classList.add("menu")
    menu.textContent = "MENU"
    menu.addEventListener("click", _menu_js__WEBPACK_IMPORTED_MODULE_1__.menuRender)
    nav.appendChild(menu)
    
    let contact = document.createElement("div")
    contact.classList.add("contact")
    contact.textContent = "CONTACT"
    contact.addEventListener("click", _contact_js__WEBPACK_IMPORTED_MODULE_2__.contactRender)
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0RtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3Qm1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDMURBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNBO0FBQ007QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdEQUFVO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdEQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0RBQVU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxzREFBYTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge2NvbnRhY3RSZW5kZXJ9XHJcblxyXG5cclxuZnVuY3Rpb24gY29udGFjdE1ha2VyKCl7XHJcbiAgICBsZXQgbWFpbkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWFpbkNvbnRhY3QuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGFjdFwiKTtcclxuXHJcbiAgICBsZXQgdGl0bGUgPSBlbGVtZW50TWFrZXIoXCJoM1wiLCBcImNvbnRhY3QtdGl0bGVcIiwgXCJBYm91dCBVc1wiKVxyXG4gICAgbGV0IHBhcmEgPSBlbGVtZW50TWFrZXIoXCJwXCIsIFwiY29udGFjdC1wYXJhXCIsIFxyXG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCIpXHJcblxyXG4gICAgbGV0IGFkcmVzc1RpdGxlID0gZWxlbWVudE1ha2VyKFwiaDRcIiwgXCJjb250YWN0LXRpdGxlXCIsIFwiQWRyZXNzXCIpXHJcbiAgICBsZXQgYWRyZXNzUGFyYSA9IGVsZW1lbnRNYWtlcihcInBcIiwgXCJjb250YWN0LXBhcmFcIiwgXCJvbGEgayBhc2VcIilcclxuICAgIGxldCBhZHJlc3NMb2dvID0gZWxlbWVudE1ha2VyKFwicFwiLCBcImFkcmVzcy1sb2dvXCIsIFwiXCIpXHJcblxyXG4gICAgbGV0IHBob25lVGl0bGUgPSBlbGVtZW50TWFrZXIoXCJoNFwiLFwiY29udGFjdC10aXRsZVwiLFwiUGhvbmVcIilcclxuICAgIGxldCBwaG9uZVBhcmEgPSBlbGVtZW50TWFrZXIoXCJwXCIsIFwiY29udGFjdC1wYXJhXCIsIFwib2xhIGsgYXNlXCIpXHJcbiAgICBsZXQgcGhvbmVMb2dvID0gZWxlbWVudE1ha2VyKFwicFwiLCBcInBob25lLWxvZ29cIiwgXCJcIilcclxuXHJcbiAgICBsZXQgZW1haWxUaXRsZSA9IGVsZW1lbnRNYWtlcihcImg0XCIsIFwiY29udGFjdC10aXRsZVwiLCBcIkVtYWlsXCIpXHJcbiAgICBsZXQgZW1haWxQYXJhID0gZWxlbWVudE1ha2VyKFwicFwiLCBcImNvbnRhY3QtcGFyYVwiLCBcIm9sYSBrIGFzZVwiKVxyXG4gICAgbGV0IGVtYWlsTG9nbyA9IGVsZW1lbnRNYWtlcihcInBcIiwgXCJlbWFpbC1sb2dvXCIsIFwiXCIpXHJcblxyXG4gICAgbWFpbkNvbnRhY3QuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgbWFpbkNvbnRhY3QuYXBwZW5kQ2hpbGQocGFyYSk7XHJcblxyXG4gICAgbWFpbkNvbnRhY3QuYXBwZW5kQ2hpbGQoYWRyZXNzVGl0bGUpO1xyXG4gICAgbWFpbkNvbnRhY3QuYXBwZW5kQ2hpbGQoYWRyZXNzUGFyYSk7XHJcbiAgICBtYWluQ29udGFjdC5hcHBlbmRDaGlsZChhZHJlc3NMb2dvKTtcclxuXHJcbiAgICBtYWluQ29udGFjdC5hcHBlbmRDaGlsZChwaG9uZVRpdGxlKVxyXG4gICAgbWFpbkNvbnRhY3QuYXBwZW5kQ2hpbGQocGhvbmVQYXJhKVxyXG4gICAgbWFpbkNvbnRhY3QuYXBwZW5kQ2hpbGQocGhvbmVMb2dvKVxyXG5cclxuICAgIG1haW5Db250YWN0LmFwcGVuZENoaWxkKGVtYWlsVGl0bGUpXHJcbiAgICBtYWluQ29udGFjdC5hcHBlbmRDaGlsZChlbWFpbFBhcmEpXHJcbiAgICBtYWluQ29udGFjdC5hcHBlbmRDaGlsZChlbWFpbExvZ28pXHJcblxyXG4gICAgcmV0dXJuIG1haW5Db250YWN0XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBlbGVtZW50TWFrZXIoZWxlbWVudFdpdGhRdW90ZXMsIGNsYXNzV2l0aFF1b3RlcywgdGV4dFdpdGhRdW90ZXMpIHtcclxuICBcclxuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFdpdGhRdW90ZXMpO1xyXG5cclxuICAgIGlmKGNsYXNzV2l0aFF1b3RlcyAhPT0gXCJcIikge1xyXG4gICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc1dpdGhRdW90ZXMpOyBcclxuICAgIH1cclxuICAgIGlmKHRleHRXaXRoUXVvdGVzICE9PSBcIlwiKSB7XHJcbiAgICAgICBlbC50ZXh0Q29udGVudCA9IHRleHRXaXRoUXVvdGVzOyBcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHJldHVybiBlbFxyXG59XHJcblxyXG5mdW5jdGlvbiBjb250YWN0UmVuZGVyKCl7XHJcblxyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XHJcbiAgICBtYWluLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RNYWtlcigpKVxyXG5cclxufSIsImV4cG9ydCB7aG9tZVJlbmRlcn1cclxuXHJcbmZ1bmN0aW9uIGhvbWVNYWtlcigpe1xyXG5cclxuICAgIGxldCBtYWluSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYWluSG9tZS5jbGFzc0xpc3QuYWRkKFwibWFpbi1ob21lXCIpO1xyXG5cclxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJwcmluY2lwYWwtaW1nXCIpO1xyXG5cclxuICAgIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwYXJhLmNsYXNzTGlzdC5hZGQoXCJwYXJhXCIpO1xyXG4gICAgcGFyYS50ZXh0Q29udGVudCA9IFwiV2UgYnJldyB3aXRoIGxvdmUg8J+kjVwiO1xyXG5cclxuICAgIG1haW5Ib21lLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBtYWluSG9tZS5hcHBlbmRDaGlsZChwYXJhKTtcclxuXHJcbiAgICByZXR1cm4gbWFpbkhvbWVcclxuXHJcbn0gXHJcblxyXG5mdW5jdGlvbiBob21lUmVuZGVyKCkge1xyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XHJcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoaG9tZU1ha2VyKCkpO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuXHJcbiIsImV4cG9ydCB7bWVudVJlbmRlcn1cclxuXHJcblxyXG5mdW5jdGlvbiBtZW51TWFrZXIoKSB7XHJcblxyXG4gICAgICAgIGxldCBtYWluTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbWFpbk1lbnUuY2xhc3NMaXN0LmFkZChcIm1haW4tbWVudVwiKTtcclxuXHJcbiAgICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FyZCgxLCBcIkluZGlhbiBQYWxlIEFsZVwiLCBcclxuICAgICAgICBcIklmIHlvdSBsaWtlIGJpdHRlciwgZmxvcmFsLCBlYXJ0aHksIGNpdHJ1c3ksIHBpbmV5LCBmcnVpdHksIGFuZCBiaXR0ZXIgZmxhdm9yIG5vdGVzLCB5b3XigJlsbCBsaWtlIGFuIElQQS5cIikpO1xyXG5cclxuICAgICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChjcmVhdGVDYXJkKDIsIFwiQmVsZ2lhbiBQYWxlIEFsZVwiLCBcclxuICAgICAgICBcIlRoZSBibG9uZCBzdHlsZSBpcyBtb2RlcmF0ZWx5IGhpZ2ggaW4gYWxjb2hvbCwgd2l0aCBzb21lIHN3ZWV0bmVzcyBiYWxhbmNlZCBvdXQgYnkgdGhlIGltcHJlc3Npb24gb2Ygc3BpY2luZXNzIGFuZCBzb21lIGxlbW9ueSBjaXRydXMuXCIpKTtcclxuXHJcbiAgICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FyZCgzLCBcIkJsYWNrIExhZ2VyXCIsXHJcbiAgICAgICAgXCJXaGF0IGRpZmZlcmVudGlhdGVzIGEgQmxhY2sgTGFnZXIgZnJvbSBvdGhlciBkYXJrIGJlZXJzLCBlc3BlY2lhbGx5IHN0b3V0cyBhbmQgcG9ydGVycywgaXMgYSByZWxhdGl2ZWx5IGxpZ2h0ZXIgYm9keSwgd2l0aCByb2FzdHkgZGFyayBub3RlcyBmcm9tIHRoZSBtYWx0cyBzdG9wcGluZyB3ZWxsIHNob3J0IG9mIGFueSBzdG91dC1sZXZlbCBkZXB0aC5cIikpO1xyXG5cclxuICAgICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChjcmVhdGVDYXJkKDQsIFwiS8O2bHNjaFwiLFxyXG4gICAgICAgIFwiVGhleeKAmXJlIHR5cGljYWxseSBsaWdodCwgd2l0aCBkZWxpY2F0ZSBtYWx0LCBkZWxpY2F0ZSBob3BzLCBhbmQgbWF5YmUgYSBiaXQgb2YgZGVsaWNhdGUgYW5kL29yIHRhcnQgZnJ1aXRpbmVzcywgYWxsIGZpbmlzaGluZyBwcmV0dHkgZHJ5LlwiKSk7XHJcblxyXG4gICAgICAgIG1haW5NZW51LmFwcGVuZENoaWxkKGNyZWF0ZUNhcmQoNSwgXCJJcmlzaCBSZWQgQWxlXCIsXHJcbiAgICAgICAgXCJJdOKAmXMgYWJvdXQgdGhlIG1hbHQgY29udGVudC4gSG9wcywgYW5kIGV2ZW4gYSBkaXNjZXJuaWJsZSBiaXR0ZXJuZXNzLCBtYXkgYmUgcHJlc2VudCB0byBzb21lIGRlZ3JlZSwgYnV0IG1vcmUgdGhhbiB0aGF0IHlvdeKAmWxsIGdldCBub3RlcyBvZiB0b2FzdCwgY2FyYW1lbCwgYnV0dGVyeSB0b2ZmZWUsIGFuZCBzb21lIG1hbHR5IHN3ZWV0bmVzcy5cIikpO1xyXG5cclxuICAgICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChjcmVhdGVDYXJkKDYsIFwiV2l0YmllclwiLFxyXG4gICAgICAgIFwiVGhlIGZsYXZvciBwcm9maWxlIHJldGFpbnMgc29tZSBsaWdodCBncmFpbnkgc3dlZXRuZXNzLCB3aXRoIGFkZGVkIGNvcmlhbmRlciBhbmQgYml0dGVyIG9yYW5nZSBwZWVsLiBPYXRzIGFyZSBzb21ldGltZXMgYWRkZWQgdG8gdGhlIG1hbHQgdG8gYWRkIHNpbGtpbmVzcyB0byB0aGUgbW91dGhmZWVsLlwiKSlcclxuXHJcbiAgICAgICAgcmV0dXJuIG1haW5NZW51XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKGl0ZW0sIGJlZXJOYW1lLCBpbmdyZWRpZW50cyApe1xyXG5cclxuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoYGNhcmQtJHtpdGVtfWApO1xyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcclxuXHJcbiAgICBsZXQgZGlzaEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXNoSW1nLmNsYXNzTGlzdC5hZGQoXCJkaXNoLWltZ1wiKTtcclxuXHJcbiAgICBsZXQgZGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBkaXNoTmFtZS5jbGFzc0xpc3QuYWRkKFwiZGlzaC1uYW1lXCIpO1xyXG4gICAgZGlzaE5hbWUudGV4dENvbnRlbnQgPSBiZWVyTmFtZTtcclxuXHJcbiAgICBsZXQgZGlzaFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRpc2hQYXJhLmNsYXNzTGlzdC5hZGQoXCJkaXNoLXBhcmFcIik7XHJcbiAgICBkaXNoUGFyYS50ZXh0Q29udGVudCA9IGluZ3JlZGllbnRzO1xyXG5cclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGlzaEltZylcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGlzaE5hbWUpXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRpc2hQYXJhKVxyXG5cclxuICAgIHJldHVybiBjYXJkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lbnVSZW5kZXIoKXtcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG4gICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51TWFrZXIoKSk7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7aG9tZVJlbmRlcn0gZnJvbSBcIi4vaG9tZS5qc1wiO1xyXG5pbXBvcnQge21lbnVSZW5kZXJ9IGZyb20gXCIuL21lbnUuanNcIjtcclxuaW1wb3J0IHtjb250YWN0UmVuZGVyfSBmcm9tIFwiLi9jb250YWN0LmpzXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gaGVhZGVyTWFrZXIoKSB7XHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xyXG5cclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkJFRVIgQkFSXCI7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcclxuXHJcbiAgICB0aXRsZS5hcHBlbmRDaGlsZChsb2dvKSBcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXZNYWtlcigpKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIGhlYWRlclxyXG59XHJcblxyXG5mdW5jdGlvbiBuYXZNYWtlcigpe1xyXG5cclxuICAgIGxldCBtYWluID0gbWFpbk1ha2VyKCk7XHJcblxyXG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaG9tZVJlbmRlcilcclxuXHJcbiAgICBsZXQgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIilcclxuICAgIGhvbWUudGV4dENvbnRlbnQgPSBcIkhPTUVcIlxyXG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZVJlbmRlcilcclxuICAgIG5hdi5hcHBlbmRDaGlsZChob21lKVxyXG5cclxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKVxyXG4gICAgbWVudS50ZXh0Q29udGVudCA9IFwiTUVOVVwiXHJcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZW51UmVuZGVyKVxyXG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnUpXHJcbiAgICBcclxuICAgIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKVxyXG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ09OVEFDVFwiXHJcbiAgICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb250YWN0UmVuZGVyKVxyXG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3QpXHJcblxyXG4gICAgcmV0dXJuIG5hdlxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBtYWluTWFrZXIoKXtcclxuXHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcclxuXHJcbiAgICByZXR1cm4gbWFpblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZm9vdGVyTWFrZXIoKXtcclxuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XHJcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSBcInRvdG9iZXLCqSAyMDIzXCI7XHJcblxyXG4gICAgcmV0dXJuIGZvb3RlclxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gd2ViUmVuZGVyKCkge1xyXG4gICAgbGV0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGhlYWRlck1ha2VyKCkpO1xyXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtYWluTWFrZXIoKSk7XHJcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGZvb3Rlck1ha2VyKCkpO1xyXG5cclxufVxyXG5cclxuXHJcbndlYlJlbmRlcigpXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=