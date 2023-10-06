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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


;


function contactMaker(){
    let mainContact = document.createElement("div");
    mainContact.classList.add("main-contact");

    let title = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elementMaker)("h3", "", "About Us")
    let para = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elementMaker)("p", "contact-para", 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

    let adressTitle = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elementMaker)("h4", "", "Adress")
    let adressPara = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elementMaker)("p", "", "P. Sherman, 42 Wallaby Way, Sydney")

    let phoneTitle = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elementMaker)("h4","","Phone")
    let phonePara = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elementMaker)("p", "", "011-4567983")

    let emailTitle = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elementMaker)("h4", "", "Email")
    let emailPara = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elementMaker)("p", "", "beer-bar@gmail.com")

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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


;

function homeMaker(){

    let mainHome = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elementMaker)("div", "main-home", "")

    let img = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elementMaker)("div", "principal-img", "")

    let para = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elementMaker)("p", "para", "We brew with love 🤍")


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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elementMaker: () => (/* binding */ elementMaker)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");







window.addEventListener("load", _home_js__WEBPACK_IMPORTED_MODULE_0__.homeRender)


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
    home.addEventListener("click", _home_js__WEBPACK_IMPORTED_MODULE_0__.homeRender)

    let menu = elementMaker("div", "menu", "MENU")
    menu.addEventListener("click", _menu_js__WEBPACK_IMPORTED_MODULE_1__.menuRender)

    let contact = elementMaker("div", "contact", "CONTACT")
    contact.addEventListener("click", _contact_js__WEBPACK_IMPORTED_MODULE_2__.contactRender)

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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


;


function menuMaker() {

        let mainMenu = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elementMaker)("div", "main-menu", "");

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

    
    let card = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elementMaker)("section", `card-${item}`, "");
    card.classList.add("card");

    let dishImg = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elementMaker)("div", "dish-img", "");

    let dishName = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elementMaker)("h3", "dish-name", `${beerName}`)

    let dishPara = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.elementMaker)("p", "dish-para", `${ingredients}`)

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0I7QUFDdEI7QUFDQSxDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQVk7QUFDNUIsZUFBZSx1REFBWTtBQUMzQjtBQUNBO0FBQ0Esc0JBQXNCLHVEQUFZO0FBQ2xDLHFCQUFxQix1REFBWTtBQUNqQztBQUNBLHFCQUFxQix1REFBWTtBQUNqQyxvQkFBb0IsdURBQVk7QUFDaEM7QUFDQSxxQkFBcUIsdURBQVk7QUFDakMsb0JBQW9CLHVEQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUNtQjtBQUNuQjtBQUNBLENBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1REFBWTtBQUMvQjtBQUNBLGNBQWMsdURBQVk7QUFDMUI7QUFDQSxlQUFlLHVEQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJxQztBQUNBO0FBQ007QUFDM0M7QUFDb0I7QUFDcEI7QUFDQTtBQUNBLGdDQUFnQyxnREFBVTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0RBQVU7QUFDN0M7QUFDQTtBQUNBLG1DQUFtQyxnREFBVTtBQUM3QztBQUNBO0FBQ0Esc0NBQXNDLHNEQUFhO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGbUI7QUFDbkI7QUFDQSxDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1REFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1REFBWSxvQkFBb0IsS0FBSztBQUNwRDtBQUNBO0FBQ0Esa0JBQWtCLHVEQUFZO0FBQzlCO0FBQ0EsbUJBQW1CLHVEQUFZLHVCQUF1QixTQUFTO0FBQy9EO0FBQ0EsbUJBQW1CLHVEQUFZLHNCQUFzQixZQUFZO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUN0REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7Y29udGFjdFJlbmRlcn1cclxuXHJcbmltcG9ydCB7ZWxlbWVudE1ha2VyfSBmcm9tIFwiLi9pbmRleC5qc1wiXHJcblxyXG5cclxuZnVuY3Rpb24gY29udGFjdE1ha2VyKCl7XHJcbiAgICBsZXQgbWFpbkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWFpbkNvbnRhY3QuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGFjdFwiKTtcclxuXHJcbiAgICBsZXQgdGl0bGUgPSBlbGVtZW50TWFrZXIoXCJoM1wiLCBcIlwiLCBcIkFib3V0IFVzXCIpXHJcbiAgICBsZXQgcGFyYSA9IGVsZW1lbnRNYWtlcihcInBcIiwgXCJjb250YWN0LXBhcmFcIiwgXHJcbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIilcclxuXHJcbiAgICBsZXQgYWRyZXNzVGl0bGUgPSBlbGVtZW50TWFrZXIoXCJoNFwiLCBcIlwiLCBcIkFkcmVzc1wiKVxyXG4gICAgbGV0IGFkcmVzc1BhcmEgPSBlbGVtZW50TWFrZXIoXCJwXCIsIFwiXCIsIFwiUC4gU2hlcm1hbiwgNDIgV2FsbGFieSBXYXksIFN5ZG5leVwiKVxyXG5cclxuICAgIGxldCBwaG9uZVRpdGxlID0gZWxlbWVudE1ha2VyKFwiaDRcIixcIlwiLFwiUGhvbmVcIilcclxuICAgIGxldCBwaG9uZVBhcmEgPSBlbGVtZW50TWFrZXIoXCJwXCIsIFwiXCIsIFwiMDExLTQ1Njc5ODNcIilcclxuXHJcbiAgICBsZXQgZW1haWxUaXRsZSA9IGVsZW1lbnRNYWtlcihcImg0XCIsIFwiXCIsIFwiRW1haWxcIilcclxuICAgIGxldCBlbWFpbFBhcmEgPSBlbGVtZW50TWFrZXIoXCJwXCIsIFwiXCIsIFwiYmVlci1iYXJAZ21haWwuY29tXCIpXHJcblxyXG4gICAgbWFpbkNvbnRhY3QuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgbWFpbkNvbnRhY3QuYXBwZW5kQ2hpbGQocGFyYSk7XHJcblxyXG4gICAgbWFpbkNvbnRhY3QuYXBwZW5kQ2hpbGQoYWRyZXNzVGl0bGUpO1xyXG4gICAgbWFpbkNvbnRhY3QuYXBwZW5kQ2hpbGQoYWRyZXNzUGFyYSk7XHJcblxyXG4gICAgbWFpbkNvbnRhY3QuYXBwZW5kQ2hpbGQocGhvbmVUaXRsZSk7XHJcbiAgICBtYWluQ29udGFjdC5hcHBlbmRDaGlsZChwaG9uZVBhcmEpO1xyXG5cclxuICAgIG1haW5Db250YWN0LmFwcGVuZENoaWxkKGVtYWlsVGl0bGUpO1xyXG4gICAgbWFpbkNvbnRhY3QuYXBwZW5kQ2hpbGQoZW1haWxQYXJhKTtcclxuXHJcbiAgICByZXR1cm4gbWFpbkNvbnRhY3RcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbnRhY3RSZW5kZXIoKXtcclxuXHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdE1ha2VyKCkpXHJcblxyXG59IiwiZXhwb3J0IHtob21lUmVuZGVyfVxyXG5cclxuaW1wb3J0IHtlbGVtZW50TWFrZXJ9IGZyb20gXCIuL2luZGV4LmpzXCJcclxuXHJcbmZ1bmN0aW9uIGhvbWVNYWtlcigpe1xyXG5cclxuICAgIGxldCBtYWluSG9tZSA9IGVsZW1lbnRNYWtlcihcImRpdlwiLCBcIm1haW4taG9tZVwiLCBcIlwiKVxyXG5cclxuICAgIGxldCBpbWcgPSBlbGVtZW50TWFrZXIoXCJkaXZcIiwgXCJwcmluY2lwYWwtaW1nXCIsIFwiXCIpXHJcblxyXG4gICAgbGV0IHBhcmEgPSBlbGVtZW50TWFrZXIoXCJwXCIsIFwicGFyYVwiLCBcIldlIGJyZXcgd2l0aCBsb3ZlIPCfpI1cIilcclxuXHJcblxyXG4gICAgbWFpbkhvbWUuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIG1haW5Ib21lLmFwcGVuZENoaWxkKHBhcmEpO1xyXG5cclxuICAgIHJldHVybiBtYWluSG9tZVxyXG59IFxyXG5cclxuZnVuY3Rpb24gaG9tZVJlbmRlcigpIHtcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGhvbWVNYWtlcigpKTsgXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQge2hvbWVSZW5kZXJ9IGZyb20gXCIuL2hvbWUuanNcIjtcclxuaW1wb3J0IHttZW51UmVuZGVyfSBmcm9tIFwiLi9tZW51LmpzXCI7XHJcbmltcG9ydCB7Y29udGFjdFJlbmRlcn0gZnJvbSBcIi4vY29udGFjdC5qc1wiO1xyXG5cclxuZXhwb3J0e2VsZW1lbnRNYWtlcn1cclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaG9tZVJlbmRlcilcclxuXHJcblxyXG5mdW5jdGlvbiBoZWFkZXJNYWtlcigpIHtcclxuXHJcbiAgICBsZXQgaGVhZGVyID0gZWxlbWVudE1ha2VyKFwiaGVhZGVyXCIsIFwiaGVhZGVyXCIsIFwiXCIpXHJcblxyXG4gICAgbGV0IHRpdGxlID0gZWxlbWVudE1ha2VyKFwiaDFcIiwgXCJ0aXRsZVwiLCBcIkJFRVIgQkFSXCIpXHJcblxyXG4gICAgbGV0IGxvZ28gPSBlbGVtZW50TWFrZXIoXCJwXCIsIFwibG9nb1wiLCBcIlwiKVxyXG5cclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7IFxyXG4gICAgdGl0bGUuYXBwZW5kQ2hpbGQobG9nbylcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXZNYWtlcigpKTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbmF2TWFrZXIoKXtcclxuXHJcbiAgICBsZXQgbmF2ID0gZWxlbWVudE1ha2VyKFwibmF2XCIsIFwibmF2XCIsIFwiXCIpXHJcblxyXG4gICAgbGV0IGhvbWUgPSBlbGVtZW50TWFrZXIoXCJkaXZcIiwgXCJob21lXCIsIFwiSE9NRVwiKVxyXG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZVJlbmRlcilcclxuXHJcbiAgICBsZXQgbWVudSA9IGVsZW1lbnRNYWtlcihcImRpdlwiLCBcIm1lbnVcIiwgXCJNRU5VXCIpXHJcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZW51UmVuZGVyKVxyXG5cclxuICAgIGxldCBjb250YWN0ID0gZWxlbWVudE1ha2VyKFwiZGl2XCIsIFwiY29udGFjdFwiLCBcIkNPTlRBQ1RcIilcclxuICAgIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbnRhY3RSZW5kZXIpXHJcblxyXG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWUpXHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudSlcclxuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0KVxyXG5cclxuICAgIHJldHVybiBuYXZcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG1haW5NYWtlcigpe1xyXG5cclxuICAgIGxldCBtYWluID0gZWxlbWVudE1ha2VyKFwibWFpblwiLCBcIm1haW5cIiwgXCJcIilcclxuXHJcbiAgICByZXR1cm4gbWFpblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZm9vdGVyTWFrZXIoKXtcclxuXHJcbiAgICBsZXQgZm9vdGVyID0gZWxlbWVudE1ha2VyKFwiZm9vdGVyXCIsIFwiZm9vdGVyXCIsIFwidG90b2JlcsKpIDIwMjNcIilcclxuXHJcbiAgICByZXR1cm4gZm9vdGVyXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBlbGVtZW50TWFrZXIoZWxlbWVudFdpdGhRdW90ZXMsIGNsYXNzV2l0aFF1b3RlcywgdGV4dFdpdGhRdW90ZXMpIHtcclxuICBcclxuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFdpdGhRdW90ZXMpO1xyXG5cclxuICAgIGlmKGNsYXNzV2l0aFF1b3RlcyAhPT0gXCJcIikge1xyXG4gICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc1dpdGhRdW90ZXMpOyBcclxuICAgIH1cclxuICAgIGlmKHRleHRXaXRoUXVvdGVzICE9PSBcIlwiKSB7XHJcbiAgICAgICBlbC50ZXh0Q29udGVudCA9IHRleHRXaXRoUXVvdGVzOyBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZWxcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHdlYlJlbmRlcigpIHtcclxuICAgIGxldCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChoZWFkZXJNYWtlcigpKTtcclxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobWFpbk1ha2VyKCkpO1xyXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChmb290ZXJNYWtlcigpKTtcclxuXHJcbn1cclxuXHJcblxyXG53ZWJSZW5kZXIoKVxyXG5cclxuIiwiZXhwb3J0IHttZW51UmVuZGVyfVxyXG5cclxuaW1wb3J0IHtlbGVtZW50TWFrZXJ9IGZyb20gXCIuL2luZGV4LmpzXCJcclxuXHJcblxyXG5mdW5jdGlvbiBtZW51TWFrZXIoKSB7XHJcblxyXG4gICAgICAgIGxldCBtYWluTWVudSA9IGVsZW1lbnRNYWtlcihcImRpdlwiLCBcIm1haW4tbWVudVwiLCBcIlwiKTtcclxuXHJcbiAgICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FyZCgxLCBcIkluZGlhbiBQYWxlIEFsZVwiLCBcclxuICAgICAgICBcIklmIHlvdSBsaWtlIGJpdHRlciwgZmxvcmFsLCBlYXJ0aHksIGNpdHJ1c3ksIHBpbmV5LCBmcnVpdHksIGFuZCBiaXR0ZXIgZmxhdm9yIG5vdGVzLCB5b3XigJlsbCBsaWtlIGFuIElQQS5cIikpO1xyXG5cclxuICAgICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChjcmVhdGVDYXJkKDIsIFwiQmVsZ2lhbiBQYWxlIEFsZVwiLCBcclxuICAgICAgICBcIlRoZSBibG9uZCBzdHlsZSBpcyBtb2RlcmF0ZWx5IGhpZ2ggaW4gYWxjb2hvbCwgd2l0aCBzb21lIHN3ZWV0bmVzcyBiYWxhbmNlZCBvdXQgYnkgdGhlIGltcHJlc3Npb24gb2Ygc3BpY2luZXNzIGFuZCBzb21lIGxlbW9ueSBjaXRydXMuXCIpKTtcclxuXHJcbiAgICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FyZCgzLCBcIkJsYWNrIExhZ2VyXCIsXHJcbiAgICAgICAgXCJXaGF0IGRpZmZlcmVudGlhdGVzIGEgQmxhY2sgTGFnZXIgZnJvbSBvdGhlciBkYXJrIGJlZXJzLCBlc3BlY2lhbGx5IHN0b3V0cyBhbmQgcG9ydGVycywgaXMgYSByZWxhdGl2ZWx5IGxpZ2h0ZXIgYm9keSwgd2l0aCByb2FzdHkgZGFyayBub3RlcyBmcm9tIHRoZSBtYWx0cyBzdG9wcGluZyB3ZWxsIHNob3J0IG9mIGFueSBzdG91dC1sZXZlbCBkZXB0aC5cIikpO1xyXG5cclxuICAgICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChjcmVhdGVDYXJkKDQsIFwiS8O2bHNjaFwiLFxyXG4gICAgICAgIFwiVGhleeKAmXJlIHR5cGljYWxseSBsaWdodCwgd2l0aCBkZWxpY2F0ZSBtYWx0LCBkZWxpY2F0ZSBob3BzLCBhbmQgbWF5YmUgYSBiaXQgb2YgZGVsaWNhdGUgYW5kL29yIHRhcnQgZnJ1aXRpbmVzcywgYWxsIGZpbmlzaGluZyBwcmV0dHkgZHJ5LlwiKSk7XHJcblxyXG4gICAgICAgIG1haW5NZW51LmFwcGVuZENoaWxkKGNyZWF0ZUNhcmQoNSwgXCJJcmlzaCBSZWQgQWxlXCIsXHJcbiAgICAgICAgXCJJdOKAmXMgYWJvdXQgdGhlIG1hbHQgY29udGVudC4gSG9wcywgYW5kIGV2ZW4gYSBkaXNjZXJuaWJsZSBiaXR0ZXJuZXNzLCBtYXkgYmUgcHJlc2VudCB0byBzb21lIGRlZ3JlZSwgYnV0IG1vcmUgdGhhbiB0aGF0IHlvdeKAmWxsIGdldCBub3RlcyBvZiB0b2FzdCwgY2FyYW1lbCwgYnV0dGVyeSB0b2ZmZWUsIGFuZCBzb21lIG1hbHR5IHN3ZWV0bmVzcy5cIikpO1xyXG5cclxuICAgICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChjcmVhdGVDYXJkKDYsIFwiV2l0YmllclwiLFxyXG4gICAgICAgIFwiVGhlIGZsYXZvciBwcm9maWxlIHJldGFpbnMgc29tZSBsaWdodCBncmFpbnkgc3dlZXRuZXNzLCB3aXRoIGFkZGVkIGNvcmlhbmRlciBhbmQgYml0dGVyIG9yYW5nZSBwZWVsLiBPYXRzIGFyZSBzb21ldGltZXMgYWRkZWQgdG8gdGhlIG1hbHQgdG8gYWRkIHNpbGtpbmVzcyB0byB0aGUgbW91dGhmZWVsLlwiKSlcclxuXHJcbiAgICAgICAgcmV0dXJuIG1haW5NZW51XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKGl0ZW0sIGJlZXJOYW1lLCBpbmdyZWRpZW50cyApe1xyXG5cclxuICAgIFxyXG4gICAgbGV0IGNhcmQgPSBlbGVtZW50TWFrZXIoXCJzZWN0aW9uXCIsIGBjYXJkLSR7aXRlbX1gLCBcIlwiKTtcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcblxyXG4gICAgbGV0IGRpc2hJbWcgPSBlbGVtZW50TWFrZXIoXCJkaXZcIiwgXCJkaXNoLWltZ1wiLCBcIlwiKTtcclxuXHJcbiAgICBsZXQgZGlzaE5hbWUgPSBlbGVtZW50TWFrZXIoXCJoM1wiLCBcImRpc2gtbmFtZVwiLCBgJHtiZWVyTmFtZX1gKVxyXG5cclxuICAgIGxldCBkaXNoUGFyYSA9IGVsZW1lbnRNYWtlcihcInBcIiwgXCJkaXNoLXBhcmFcIiwgYCR7aW5ncmVkaWVudHN9YClcclxuXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRpc2hJbWcpXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRpc2hOYW1lKVxyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChkaXNoUGFyYSlcclxuXHJcbiAgICByZXR1cm4gY2FyZFxyXG59XHJcblxyXG5mdW5jdGlvbiBtZW51UmVuZGVyKCl7XHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudU1ha2VyKCkpO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==