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

    return mainContact
}

function contactRender(){

    let main = document.querySelector(".main");
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





//console.log(home)
console.log("ola k ase")


function headerMaker() {
    let header = document.createElement("header");
    header.classList.add("header");

    let title = document.createElement("h1")
    title.classList.add("title");
    title.textContent = "Beer Bar";
    header.appendChild(title);

    header.appendChild(navMaker());
    console.log(navMaker())

    return header
}

console.log(headerMaker())

function navMaker(){

    let nav = document.createElement("nav");
    nav.classList.add("nav");

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

console.log(mainMaker())

function footerMaker(){
    let footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.textContent = "totober© 2023";

    return footer
}

console.log(footerMaker())

function webRender() {
    let mainDiv = document.querySelector("#content");
console.log(mainDiv)
    mainDiv.appendChild(headerMaker());
    mainDiv.appendChild(mainMaker());
    mainDiv.appendChild(footerMaker());

}


webRender()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZCbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQm1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUN4REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ0E7QUFDTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnREFBVTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdEQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msc0RBQWE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7Y29udGFjdFJlbmRlcn1cclxuXHJcblxyXG5mdW5jdGlvbiBjb250YWN0TWFrZXIoKXtcclxuICAgIGxldCBtYWluQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYWluQ29udGFjdC5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWN0XCIpO1xyXG5cclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXRpdGxlXCIpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCI7XHJcblxyXG4gICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHBhcmEuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtcGFyYVwiKVxyXG4gICAgcGFyYS50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiXHJcblxyXG4gICAgcmV0dXJuIG1haW5Db250YWN0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnRhY3RSZW5kZXIoKXtcclxuXHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdE1ha2VyKCkpXHJcblxyXG59IiwiZXhwb3J0IHtob21lUmVuZGVyfVxyXG5cclxuZnVuY3Rpb24gaG9tZU1ha2VyKCl7XHJcblxyXG4gICAgbGV0IG1haW5Ib21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1haW5Ib21lLmNsYXNzTGlzdC5hZGQoXCJtYWluLWhvbWVcIik7XHJcblxyXG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcclxuXHJcbiAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGFyYS5jbGFzc0xpc3QuYWRkKFwicGFyYVwiKTtcclxuICAgIHBhcmEudGV4dENvbnRlbnQgPSBcIkxhIG1lam9yIGNhcm5lIGRlbCBtdW5kb1wiO1xyXG5cclxuXHJcbiAgICBtYWluSG9tZS5hcHBlbmRDaGlsZChsb2dvKTtcclxuICAgIG1haW5Ib21lLmFwcGVuZENoaWxkKHBhcmEpO1xyXG5cclxuICAgIHJldHVybiBtYWluSG9tZVxyXG5cclxufSBcclxuXHJcbmZ1bmN0aW9uIGhvbWVSZW5kZXIoKSB7XHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaG9tZU1ha2VyKCkpO1xyXG59XHJcblxyXG5cclxuIiwiZXhwb3J0IHttZW51UmVuZGVyfVxyXG5cclxuXHJcbmZ1bmN0aW9uIG1lbnVNYWtlcigpIHtcclxuXHJcbiAgICAgICAgbGV0IG1haW5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBtYWluTWVudS5jbGFzc0xpc3QuYWRkKFwibWFpbi1tZW51XCIpO1xyXG5cclxuICAgICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChjcmVhdGVDYXJkKDEsIFwiSW5kaWFuIFBhbGUgQWxlXCIsIFxyXG4gICAgICAgIFwiSWYgeW91IGxpa2UgYml0dGVyLCBmbG9yYWwsIGVhcnRoeSwgY2l0cnVzeSwgcGluZXksIGZydWl0eSwgYW5kIGJpdHRlciBmbGF2b3Igbm90ZXMsIHlvdeKAmWxsIGxpa2UgYW4gSVBBXCIpKTtcclxuXHJcbiAgICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FyZCgyLCBcIkJlbGdpYW4gUGFsZSBBbGVcIiwgXHJcbiAgICAgICAgXCJUaGUgYmxvbmQgc3R5bGUgaXMgbW9kZXJhdGVseSBoaWdoIGluIGFsY29ob2wsIHdpdGggc29tZSBzd2VldG5lc3MgYmFsYW5jZWQgb3V0IGJ5IHRoZSBpbXByZXNzaW9uIG9mIHNwaWNpbmVzcyBhbmQgc29tZSBsZW1vbnkgY2l0cnVzXCIpKTtcclxuXHJcbiAgICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FyZCgzLCBcIkJsYWNrIExhZ2VyXCIsXHJcbiAgICAgICAgXCJXaGF0IGRpZmZlcmVudGlhdGVzIGEgQmxhY2sgTGFnZXIgZnJvbSBvdGhlciBkYXJrIGJlZXJzLCBlc3BlY2lhbGx5IHN0b3V0cyBhbmQgcG9ydGVycywgaXMgYSByZWxhdGl2ZWx5IGxpZ2h0ZXIgYm9keSwgd2l0aCByb2FzdHkgZGFyayBub3RlcyBmcm9tIHRoZSBtYWx0cyBzdG9wcGluZyB3ZWxsIHNob3J0IG9mIGFueSBzdG91dC1sZXZlbCBkZXB0aFwiKSk7XHJcblxyXG4gICAgICAgIG1haW5NZW51LmFwcGVuZENoaWxkKGNyZWF0ZUNhcmQoNCwgXCJLw7Zsc2NoXCIsXHJcbiAgICAgICAgXCJUaGV54oCZcmUgdHlwaWNhbGx5IGxpZ2h0LCB3aXRoIGRlbGljYXRlIG1hbHQsIGRlbGljYXRlIGhvcHMsIGFuZCBtYXliZSBhIGJpdCBvZiBkZWxpY2F0ZSBhbmQvb3IgdGFydCBmcnVpdGluZXNzLCBhbGwgZmluaXNoaW5nIHByZXR0eSBkcnlcIikpO1xyXG5cclxuICAgICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChjcmVhdGVDYXJkKDUsIFwiSXJpc2ggUmVkIEFsZVwiLFxyXG4gICAgICAgIFwiSXTigJlzIG1vcmUgYWJvdXQgdGhlIG1hbHQgY29udGVudC4gSG9wcywgYW5kIGV2ZW4gYSBkaXNjZXJuaWJsZSBiaXR0ZXJuZXNzLCBtYXkgYmUgcHJlc2VudCB0byBzb21lIGRlZ3JlZSwgYnV0IG1vcmUgdGhhbiB0aGF0IHlvdeKAmWxsIGdldCBub3RlcyBvZiB0b2FzdCwgY2FyYW1lbCwgYnV0dGVyeSB0b2ZmZWUsIGFuZCBzb21lIG1hbHR5IHN3ZWV0bmVzcy4gXCIpKTtcclxuXHJcbiAgICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FyZCg2LCBcIldpdGJpZXJcIixcclxuICAgICAgICBcIlRoZSBmbGF2b3IgcHJvZmlsZSByZXRhaW5zIHNvbWUgbGlnaHQgZ3JhaW55IHN3ZWV0bmVzcywgd2l0aCBhZGRlZCBjb3JpYW5kZXIgYW5kIGJpdHRlciBvcmFuZ2UgcGVlbC4gT2F0cyBhcmUgc29tZXRpbWVzIGFkZGVkIHRvIHRoZSBtYWx0IHRvIGFkZCBzaWxraW5lc3MgdG8gdGhlIG1vdXRoZmVlbFwiKSlcclxuXHJcbiAgICAgICAgcmV0dXJuIG1haW5NZW51XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKGl0ZW0sIGJlZXJOYW1lLCBpbmdyZWRpZW50cyApe1xyXG5cclxuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoYGNhcmQtJHtpdGVtfWApO1xyXG5cclxuICAgIGxldCBkaXNoSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpc2hJbWcuY2xhc3NMaXN0LmFkZChcImRpc2gtaW1nXCIpO1xyXG5cclxuICAgIGxldCBkaXNoTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIGRpc2hOYW1lLmNsYXNzTGlzdC5hZGQoXCJkaXNoLW5hbWVcIik7XHJcbiAgICBkaXNoTmFtZS50ZXh0Q29udGVudCA9IGJlZXJOYW1lO1xyXG5cclxuICAgIGxldCBkaXNoUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZGlzaFBhcmEuY2xhc3NMaXN0LmFkZChcImRpc2gtcGFyYVwiKTtcclxuICAgIGRpc2hQYXJhLnRleHRDb250ZW50ID0gaW5ncmVkaWVudHM7XHJcblxyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChkaXNoSW1nKVxyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChkaXNoTmFtZSlcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGlzaFBhcmEpXHJcblxyXG4gICAgcmV0dXJuIGNhcmRcclxufVxyXG5cclxuZnVuY3Rpb24gbWVudVJlbmRlcigpe1xyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVNYWtlcigpKTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtob21lUmVuZGVyfSBmcm9tIFwiLi9ob21lLmpzXCI7XHJcbmltcG9ydCB7bWVudVJlbmRlcn0gZnJvbSBcIi4vbWVudS5qc1wiO1xyXG5pbXBvcnQge2NvbnRhY3RSZW5kZXJ9IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcclxuXHJcblxyXG4vL2NvbnNvbGUubG9nKGhvbWUpXHJcbmNvbnNvbGUubG9nKFwib2xhIGsgYXNlXCIpXHJcblxyXG5cclxuZnVuY3Rpb24gaGVhZGVyTWFrZXIoKSB7XHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xyXG5cclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkJlZXIgQmFyXCI7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXZNYWtlcigpKTtcclxuICAgIGNvbnNvbGUubG9nKG5hdk1ha2VyKCkpXHJcblxyXG4gICAgcmV0dXJuIGhlYWRlclxyXG59XHJcblxyXG5jb25zb2xlLmxvZyhoZWFkZXJNYWtlcigpKVxyXG5cclxuZnVuY3Rpb24gbmF2TWFrZXIoKXtcclxuXHJcbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xyXG5cclxuICAgIGxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKVxyXG4gICAgaG9tZS50ZXh0Q29udGVudCA9IFwiSE9NRVwiXHJcbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob21lUmVuZGVyKVxyXG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWUpXHJcblxyXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpXHJcbiAgICBtZW51LnRleHRDb250ZW50ID0gXCJNRU5VXCJcclxuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lbnVSZW5kZXIpXHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudSlcclxuICAgIFxyXG4gICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpXHJcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDT05UQUNUXCJcclxuICAgIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbnRhY3RSZW5kZXIpXHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdClcclxuXHJcblxyXG4gICAgcmV0dXJuIG5hdlxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG1haW5NYWtlcigpe1xyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XHJcblxyXG4gICAgcmV0dXJuIG1haW5cclxufVxyXG5cclxuY29uc29sZS5sb2cobWFpbk1ha2VyKCkpXHJcblxyXG5mdW5jdGlvbiBmb290ZXJNYWtlcigpe1xyXG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcclxuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9IFwidG90b2JlcsKpIDIwMjNcIjtcclxuXHJcbiAgICByZXR1cm4gZm9vdGVyXHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKGZvb3Rlck1ha2VyKCkpXHJcblxyXG5mdW5jdGlvbiB3ZWJSZW5kZXIoKSB7XHJcbiAgICBsZXQgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuY29uc29sZS5sb2cobWFpbkRpdilcclxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaGVhZGVyTWFrZXIoKSk7XHJcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1haW5NYWtlcigpKTtcclxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoZm9vdGVyTWFrZXIoKSk7XHJcblxyXG59XHJcblxyXG5cclxud2ViUmVuZGVyKClcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==