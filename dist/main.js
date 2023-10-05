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

    let title = document.createElement("h3");
    title.classList.add("contact-title");
    title.textContent = "About Us";

    let para = document.createElement("p");
    para.classList.add("contact-para")
    para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    mainContact.appendChild(title);
    mainContact.appendChild(para);

    return mainContact
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
        "If you like bitter, floral, earthy, citrusy, piney, fruity, and bitter flavor notes, you’ll like an IPA"));

        mainMenu.appendChild(createCard(2, "Belgian Pale Ale", 
        "The blond style is moderately high in alcohol, with some sweetness balanced out by the impression of spiciness and some lemony citrus"));

        mainMenu.appendChild(createCard(3, "Black Lager",
        "What differentiates a Black Lager from other dark beers, especially stouts and porters, is a relatively lighter body, with roasty dark notes from the malts stopping well short of any stout-level depth"));

        mainMenu.appendChild(createCard(4, "Kölsch",
        "They’re typically light, with delicate malt, delicate hops, and maybe a bit of delicate and/or tart fruitiness, all finishing pretty dry"));

        mainMenu.appendChild(createCard(5, "Irish Red Ale",
        "It’s more about the malt content. Hops, and even a discernible bitterness, may be present to some degree, but more than that you’ll get notes of toast, caramel, buttery toffee, and some malty sweetness. "));

        mainMenu.appendChild(createCard(6, "Witbier",
        "The flavor profile retains some light grainy sweetness, with added coriander and bitter orange peel. Oats are sometimes added to the malt to add silkiness to the mouthfeel"))

        return mainMenu

}

function createCard(item, beerName, ingredients ){

    let card = document.createElement("section");
    card.classList.add(`card-${item}`);

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
    title.textContent = "Beer Bar";
    header.appendChild(title);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDM0JtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3Qm1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUM7QUFDQTtBQUNNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnREFBVTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnREFBVTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdEQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msc0RBQWE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtjb250YWN0UmVuZGVyfVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbnRhY3RNYWtlcigpe1xyXG4gICAgbGV0IG1haW5Db250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1haW5Db250YWN0LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhY3RcIik7XHJcblxyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtdGl0bGVcIik7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQWJvdXQgVXNcIjtcclxuXHJcbiAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGFyYS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1wYXJhXCIpXHJcbiAgICBwYXJhLnRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCJcclxuXHJcbiAgICBtYWluQ29udGFjdC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBtYWluQ29udGFjdC5hcHBlbmRDaGlsZChwYXJhKTtcclxuXHJcbiAgICByZXR1cm4gbWFpbkNvbnRhY3RcclxufVxyXG5cclxuZnVuY3Rpb24gY29udGFjdFJlbmRlcigpe1xyXG5cclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG4gICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWN0TWFrZXIoKSlcclxuXHJcbn0iLCJleHBvcnQge2hvbWVSZW5kZXJ9XHJcblxyXG5mdW5jdGlvbiBob21lTWFrZXIoKXtcclxuXHJcbiAgICBsZXQgbWFpbkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWFpbkhvbWUuY2xhc3NMaXN0LmFkZChcIm1haW4taG9tZVwiKTtcclxuXHJcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xyXG5cclxuICAgIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwYXJhLmNsYXNzTGlzdC5hZGQoXCJwYXJhXCIpO1xyXG4gICAgcGFyYS50ZXh0Q29udGVudCA9IFwiTGEgbWVqb3IgY2FybmUgZGVsIG11bmRvXCI7XHJcblxyXG4gICAgbWFpbkhvbWUuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgICBtYWluSG9tZS5hcHBlbmRDaGlsZChwYXJhKTtcclxuXHJcbiAgICByZXR1cm4gbWFpbkhvbWVcclxuXHJcbn0gXHJcblxyXG5mdW5jdGlvbiBob21lUmVuZGVyKCkge1xyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XHJcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoaG9tZU1ha2VyKCkpO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuXHJcbiIsImV4cG9ydCB7bWVudVJlbmRlcn1cclxuXHJcblxyXG5mdW5jdGlvbiBtZW51TWFrZXIoKSB7XHJcblxyXG4gICAgICAgIGxldCBtYWluTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbWFpbk1lbnUuY2xhc3NMaXN0LmFkZChcIm1haW4tbWVudVwiKTtcclxuXHJcbiAgICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FyZCgxLCBcIkluZGlhbiBQYWxlIEFsZVwiLCBcclxuICAgICAgICBcIklmIHlvdSBsaWtlIGJpdHRlciwgZmxvcmFsLCBlYXJ0aHksIGNpdHJ1c3ksIHBpbmV5LCBmcnVpdHksIGFuZCBiaXR0ZXIgZmxhdm9yIG5vdGVzLCB5b3XigJlsbCBsaWtlIGFuIElQQVwiKSk7XHJcblxyXG4gICAgICAgIG1haW5NZW51LmFwcGVuZENoaWxkKGNyZWF0ZUNhcmQoMiwgXCJCZWxnaWFuIFBhbGUgQWxlXCIsIFxyXG4gICAgICAgIFwiVGhlIGJsb25kIHN0eWxlIGlzIG1vZGVyYXRlbHkgaGlnaCBpbiBhbGNvaG9sLCB3aXRoIHNvbWUgc3dlZXRuZXNzIGJhbGFuY2VkIG91dCBieSB0aGUgaW1wcmVzc2lvbiBvZiBzcGljaW5lc3MgYW5kIHNvbWUgbGVtb255IGNpdHJ1c1wiKSk7XHJcblxyXG4gICAgICAgIG1haW5NZW51LmFwcGVuZENoaWxkKGNyZWF0ZUNhcmQoMywgXCJCbGFjayBMYWdlclwiLFxyXG4gICAgICAgIFwiV2hhdCBkaWZmZXJlbnRpYXRlcyBhIEJsYWNrIExhZ2VyIGZyb20gb3RoZXIgZGFyayBiZWVycywgZXNwZWNpYWxseSBzdG91dHMgYW5kIHBvcnRlcnMsIGlzIGEgcmVsYXRpdmVseSBsaWdodGVyIGJvZHksIHdpdGggcm9hc3R5IGRhcmsgbm90ZXMgZnJvbSB0aGUgbWFsdHMgc3RvcHBpbmcgd2VsbCBzaG9ydCBvZiBhbnkgc3RvdXQtbGV2ZWwgZGVwdGhcIikpO1xyXG5cclxuICAgICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChjcmVhdGVDYXJkKDQsIFwiS8O2bHNjaFwiLFxyXG4gICAgICAgIFwiVGhleeKAmXJlIHR5cGljYWxseSBsaWdodCwgd2l0aCBkZWxpY2F0ZSBtYWx0LCBkZWxpY2F0ZSBob3BzLCBhbmQgbWF5YmUgYSBiaXQgb2YgZGVsaWNhdGUgYW5kL29yIHRhcnQgZnJ1aXRpbmVzcywgYWxsIGZpbmlzaGluZyBwcmV0dHkgZHJ5XCIpKTtcclxuXHJcbiAgICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FyZCg1LCBcIklyaXNoIFJlZCBBbGVcIixcclxuICAgICAgICBcIkl04oCZcyBtb3JlIGFib3V0IHRoZSBtYWx0IGNvbnRlbnQuIEhvcHMsIGFuZCBldmVuIGEgZGlzY2VybmlibGUgYml0dGVybmVzcywgbWF5IGJlIHByZXNlbnQgdG8gc29tZSBkZWdyZWUsIGJ1dCBtb3JlIHRoYW4gdGhhdCB5b3XigJlsbCBnZXQgbm90ZXMgb2YgdG9hc3QsIGNhcmFtZWwsIGJ1dHRlcnkgdG9mZmVlLCBhbmQgc29tZSBtYWx0eSBzd2VldG5lc3MuIFwiKSk7XHJcblxyXG4gICAgICAgIG1haW5NZW51LmFwcGVuZENoaWxkKGNyZWF0ZUNhcmQoNiwgXCJXaXRiaWVyXCIsXHJcbiAgICAgICAgXCJUaGUgZmxhdm9yIHByb2ZpbGUgcmV0YWlucyBzb21lIGxpZ2h0IGdyYWlueSBzd2VldG5lc3MsIHdpdGggYWRkZWQgY29yaWFuZGVyIGFuZCBiaXR0ZXIgb3JhbmdlIHBlZWwuIE9hdHMgYXJlIHNvbWV0aW1lcyBhZGRlZCB0byB0aGUgbWFsdCB0byBhZGQgc2lsa2luZXNzIHRvIHRoZSBtb3V0aGZlZWxcIikpXHJcblxyXG4gICAgICAgIHJldHVybiBtYWluTWVudVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZChpdGVtLCBiZWVyTmFtZSwgaW5ncmVkaWVudHMgKXtcclxuXHJcbiAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKGBjYXJkLSR7aXRlbX1gKTtcclxuXHJcbiAgICBsZXQgZGlzaEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXNoSW1nLmNsYXNzTGlzdC5hZGQoXCJkaXNoLWltZ1wiKTtcclxuXHJcbiAgICBsZXQgZGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBkaXNoTmFtZS5jbGFzc0xpc3QuYWRkKFwiZGlzaC1uYW1lXCIpO1xyXG4gICAgZGlzaE5hbWUudGV4dENvbnRlbnQgPSBiZWVyTmFtZTtcclxuXHJcbiAgICBsZXQgZGlzaFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRpc2hQYXJhLmNsYXNzTGlzdC5hZGQoXCJkaXNoLXBhcmFcIik7XHJcbiAgICBkaXNoUGFyYS50ZXh0Q29udGVudCA9IGluZ3JlZGllbnRzO1xyXG5cclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGlzaEltZylcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGlzaE5hbWUpXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRpc2hQYXJhKVxyXG5cclxuICAgIHJldHVybiBjYXJkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lbnVSZW5kZXIoKXtcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG4gICAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51TWFrZXIoKSk7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7aG9tZVJlbmRlcn0gZnJvbSBcIi4vaG9tZS5qc1wiO1xyXG5pbXBvcnQge21lbnVSZW5kZXJ9IGZyb20gXCIuL21lbnUuanNcIjtcclxuaW1wb3J0IHtjb250YWN0UmVuZGVyfSBmcm9tIFwiLi9jb250YWN0LmpzXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gaGVhZGVyTWFrZXIoKSB7XHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xyXG5cclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkJlZXIgQmFyXCI7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXZNYWtlcigpKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIGhlYWRlclxyXG59XHJcblxyXG5mdW5jdGlvbiBuYXZNYWtlcigpe1xyXG5cclxuICAgIGxldCBtYWluID0gbWFpbk1ha2VyKCk7XHJcblxyXG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaG9tZVJlbmRlcilcclxuXHJcbiAgICBsZXQgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIilcclxuICAgIGhvbWUudGV4dENvbnRlbnQgPSBcIkhPTUVcIlxyXG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZVJlbmRlcilcclxuICAgIG5hdi5hcHBlbmRDaGlsZChob21lKVxyXG5cclxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKVxyXG4gICAgbWVudS50ZXh0Q29udGVudCA9IFwiTUVOVVwiXHJcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZW51UmVuZGVyKVxyXG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnUpXHJcbiAgICBcclxuICAgIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKVxyXG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ09OVEFDVFwiXHJcbiAgICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb250YWN0UmVuZGVyKVxyXG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3QpXHJcblxyXG4gICAgcmV0dXJuIG5hdlxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBtYWluTWFrZXIoKXtcclxuXHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcclxuXHJcbiAgICByZXR1cm4gbWFpblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZm9vdGVyTWFrZXIoKXtcclxuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XHJcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSBcInRvdG9iZXLCqSAyMDIzXCI7XHJcblxyXG4gICAgcmV0dXJuIGZvb3RlclxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gd2ViUmVuZGVyKCkge1xyXG4gICAgbGV0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGhlYWRlck1ha2VyKCkpO1xyXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChtYWluTWFrZXIoKSk7XHJcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGZvb3Rlck1ha2VyKCkpO1xyXG5cclxufVxyXG5cclxuXHJcbndlYlJlbmRlcigpXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=