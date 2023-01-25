/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mergeSort.js":
/*!**************************!*\
  !*** ./src/mergeSort.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

  function mergeSort(array){
    let newArray = [];
      if(array.length < 2 )
        return array;
     let arrayHolder1 = (mergeSort(array.slice(0,array.length/2))) 
     let arrayHolder2 = (mergeSort(array.slice(array.length/2)));
  if(arrayHolder1.length>=1 || arrayHolder2.length>=1){
  while(arrayHolder1.length != 0 && arrayHolder2.length !=0){
        if(arrayHolder1[0] < arrayHolder2[0]){
            newArray.push(arrayHolder1.shift());
        }
        else{
          newArray.push(arrayHolder2.shift());
        }
         if(arrayHolder1.length == 0 ){
           return newArray.concat(arrayHolder2);
        }
         if(arrayHolder2.length == 0){
         return newArray.concat(arrayHolder1);
        }
      }
}
  }

  function removeDuplicateSort(array){
    let mergeArray = mergeSort(array);
    
  let newArray = [];
    for(let i = 0;i <= mergeArray.length;i++){
      if(mergeArray[i] != mergeArray[i+1])
      newArray.push(mergeArray[i]);
    }
    return newArray;
  }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeDuplicateSort);


/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const node = () => {
  let data = null;
  let left = null;
  let right = null; 

  return {data,left,right};
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (node);

/***/ }),

/***/ "./src/tree.js":
/*!*********************!*\
  !*** ./src/tree.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/node.js");
/* harmony import */ var _mergeSort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeSort */ "./src/mergeSort.js");




const tree = (array) => {
  const processedArray = (0,_mergeSort__WEBPACK_IMPORTED_MODULE_1__["default"])(array);
  console.log(processedArray);
  let root = buildTree(processedArray);
  console.log(root);

  function buildTree(array){
    if(array.length === 0) return null;
    const nodeItem = (0,_node__WEBPACK_IMPORTED_MODULE_0__["default"])();
    nodeItem.data = array[Math.round(array.length/2-0.49)];
     nodeItem.left = buildTree(array.slice(0,array.length/2));
     nodeItem.right = buildTree(array.slice(array.length/2+1));
     return  nodeItem;
    
  }
  function getTree(){
    return root;
  }

  const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null ) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null ) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

  const insertNode = (value) =>{
    const newNode = (0,_node__WEBPACK_IMPORTED_MODULE_0__["default"])();

    let currentNode = root;
    newNode.data = value;
  while(currentNode.data != null){
    if(currentNode.data == value) return null;
    if(value < currentNode.data){
      if(currentNode.left == null)
        return currentNode.left = newNode;
    else
      currentNode = currentNode.left;
    }
    
    else if(value > currentNode.data ){
      if(currentNode.right == null)
      return currentNode.right = newNode;
      else
      currentNode = currentNode.right;
    }
  }
  }

  const deleteNode = (value) =>{
    const newNode = (0,_node__WEBPACK_IMPORTED_MODULE_0__["default"])();
    let currentNode = root;
  while(currentNode.data != null){
    if(currentNode.left == null && currentNode.right == null) return;

    if(currentNode.left != null){
      if(currentNode.left.data == value){
        currentNode.left = null;
        return;
      }
  }
  else if(currentNode.right != null){
      if(currentNode.right.data == value){
        currentNode.right = null;
          return;
      }

  }
   


    if(value < currentNode.data){
      if(currentNode.left == null)
        return;
    else
      currentNode = currentNode.left;
    }
    else if(value > currentNode.data ){
      if(currentNode.right == null)
      return 
      else
      currentNode = currentNode.right;
    }

   
  }

  }

return {getTree,prettyPrint, insertNode,deleteNode}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tree);

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
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree */ "./src/tree.js");


let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let treeNode = (0,_tree__WEBPACK_IMPORTED_MODULE_0__["default"])(array);

treeNode.prettyPrint(treeNode.getTree());

treeNode.insertNode(10);
treeNode.insertNode(10);
treeNode.insertNode(0);
treeNode.insertNode(6);
treeNode.insertNode(14);

treeNode.prettyPrint(treeNode.getTree());

treeNode.deleteNode(0);
treeNode.deleteNode(123);
treeNode.deleteNode(14);
treeNode.prettyPrint(treeNode.getTree());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOzs7QUFHQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FDWE87QUFDVzs7O0FBR3JDO0FBQ0EseUJBQXlCLHNEQUFVO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLE9BQU8sRUFBRSx5QkFBeUI7QUFDbkU7QUFDQSxtQkFBbUIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQVU7QUFDakU7QUFDQSxnQ0FBZ0MsT0FBTyxFQUFFLHlCQUF5QjtBQUNsRTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGlEQUFJOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixpREFBSTtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxRQUFRO0FBQ1I7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7O1VDbkduQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjJCOztBQUUzQjs7QUFFQSxlQUFlLGlEQUFJOztBQUVuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlLy4vc3JjL21lcmdlU29ydC5qcyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvLi9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvLi9zcmMvdHJlZS5qcyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gIGZ1bmN0aW9uIG1lcmdlU29ydChhcnJheSl7XG4gICAgbGV0IG5ld0FycmF5ID0gW107XG4gICAgICBpZihhcnJheS5sZW5ndGggPCAyIClcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICBsZXQgYXJyYXlIb2xkZXIxID0gKG1lcmdlU29ydChhcnJheS5zbGljZSgwLGFycmF5Lmxlbmd0aC8yKSkpIFxuICAgICBsZXQgYXJyYXlIb2xkZXIyID0gKG1lcmdlU29ydChhcnJheS5zbGljZShhcnJheS5sZW5ndGgvMikpKTtcbiAgaWYoYXJyYXlIb2xkZXIxLmxlbmd0aD49MSB8fCBhcnJheUhvbGRlcjIubGVuZ3RoPj0xKXtcbiAgd2hpbGUoYXJyYXlIb2xkZXIxLmxlbmd0aCAhPSAwICYmIGFycmF5SG9sZGVyMi5sZW5ndGggIT0wKXtcbiAgICAgICAgaWYoYXJyYXlIb2xkZXIxWzBdIDwgYXJyYXlIb2xkZXIyWzBdKXtcbiAgICAgICAgICAgIG5ld0FycmF5LnB1c2goYXJyYXlIb2xkZXIxLnNoaWZ0KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgbmV3QXJyYXkucHVzaChhcnJheUhvbGRlcjIuc2hpZnQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgIGlmKGFycmF5SG9sZGVyMS5sZW5ndGggPT0gMCApe1xuICAgICAgICAgICByZXR1cm4gbmV3QXJyYXkuY29uY2F0KGFycmF5SG9sZGVyMik7XG4gICAgICAgIH1cbiAgICAgICAgIGlmKGFycmF5SG9sZGVyMi5sZW5ndGggPT0gMCl7XG4gICAgICAgICByZXR1cm4gbmV3QXJyYXkuY29uY2F0KGFycmF5SG9sZGVyMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbn1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZVNvcnQoYXJyYXkpe1xuICAgIGxldCBtZXJnZUFycmF5ID0gbWVyZ2VTb3J0KGFycmF5KTtcbiAgICBcbiAgbGV0IG5ld0FycmF5ID0gW107XG4gICAgZm9yKGxldCBpID0gMDtpIDw9IG1lcmdlQXJyYXkubGVuZ3RoO2krKyl7XG4gICAgICBpZihtZXJnZUFycmF5W2ldICE9IG1lcmdlQXJyYXlbaSsxXSlcbiAgICAgIG5ld0FycmF5LnB1c2gobWVyZ2VBcnJheVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdBcnJheTtcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVEdXBsaWNhdGVTb3J0O1xuIiwiXG5cbmNvbnN0IG5vZGUgPSAoKSA9PiB7XG4gIGxldCBkYXRhID0gbnVsbDtcbiAgbGV0IGxlZnQgPSBudWxsO1xuICBsZXQgcmlnaHQgPSBudWxsOyBcblxuICByZXR1cm4ge2RhdGEsbGVmdCxyaWdodH07XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbm9kZTsiLCJpbXBvcnQgbm9kZSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IGZpeGVkQXJyYXkgZnJvbSAnLi9tZXJnZVNvcnQnO1xuXG5cbmNvbnN0IHRyZWUgPSAoYXJyYXkpID0+IHtcbiAgY29uc3QgcHJvY2Vzc2VkQXJyYXkgPSBmaXhlZEFycmF5KGFycmF5KTtcbiAgY29uc29sZS5sb2cocHJvY2Vzc2VkQXJyYXkpO1xuICBsZXQgcm9vdCA9IGJ1aWxkVHJlZShwcm9jZXNzZWRBcnJheSk7XG4gIGNvbnNvbGUubG9nKHJvb3QpO1xuXG4gIGZ1bmN0aW9uIGJ1aWxkVHJlZShhcnJheSl7XG4gICAgaWYoYXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBub2RlSXRlbSA9IG5vZGUoKTtcbiAgICBub2RlSXRlbS5kYXRhID0gYXJyYXlbTWF0aC5yb3VuZChhcnJheS5sZW5ndGgvMi0wLjQ5KV07XG4gICAgIG5vZGVJdGVtLmxlZnQgPSBidWlsZFRyZWUoYXJyYXkuc2xpY2UoMCxhcnJheS5sZW5ndGgvMikpO1xuICAgICBub2RlSXRlbS5yaWdodCA9IGJ1aWxkVHJlZShhcnJheS5zbGljZShhcnJheS5sZW5ndGgvMisxKSk7XG4gICAgIHJldHVybiAgbm9kZUl0ZW07XG4gICAgXG4gIH1cbiAgZnVuY3Rpb24gZ2V0VHJlZSgpe1xuICAgIHJldHVybiByb290O1xuICB9XG5cbiAgY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gJycsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCApIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilIIgICAnIDogJyAgICAnfWAsIGZhbHNlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gJ+KUlOKUgOKUgCAnIDogJ+KUjOKUgOKUgCAnfSR7bm9kZS5kYXRhfWApO1xuICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwgKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICcgICAgJyA6ICfilIIgICAnfWAsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGluc2VydE5vZGUgPSAodmFsdWUpID0+e1xuICAgIGNvbnN0IG5ld05vZGUgPSBub2RlKCk7XG5cbiAgICBsZXQgY3VycmVudE5vZGUgPSByb290O1xuICAgIG5ld05vZGUuZGF0YSA9IHZhbHVlO1xuICB3aGlsZShjdXJyZW50Tm9kZS5kYXRhICE9IG51bGwpe1xuICAgIGlmKGN1cnJlbnROb2RlLmRhdGEgPT0gdmFsdWUpIHJldHVybiBudWxsO1xuICAgIGlmKHZhbHVlIDwgY3VycmVudE5vZGUuZGF0YSl7XG4gICAgICBpZihjdXJyZW50Tm9kZS5sZWZ0ID09IG51bGwpXG4gICAgICAgIHJldHVybiBjdXJyZW50Tm9kZS5sZWZ0ID0gbmV3Tm9kZTtcbiAgICBlbHNlXG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLmxlZnQ7XG4gICAgfVxuICAgIFxuICAgIGVsc2UgaWYodmFsdWUgPiBjdXJyZW50Tm9kZS5kYXRhICl7XG4gICAgICBpZihjdXJyZW50Tm9kZS5yaWdodCA9PSBudWxsKVxuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlLnJpZ2h0ID0gbmV3Tm9kZTtcbiAgICAgIGVsc2VcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucmlnaHQ7XG4gICAgfVxuICB9XG4gIH1cblxuICBjb25zdCBkZWxldGVOb2RlID0gKHZhbHVlKSA9PntcbiAgICBjb25zdCBuZXdOb2RlID0gbm9kZSgpO1xuICAgIGxldCBjdXJyZW50Tm9kZSA9IHJvb3Q7XG4gIHdoaWxlKGN1cnJlbnROb2RlLmRhdGEgIT0gbnVsbCl7XG4gICAgaWYoY3VycmVudE5vZGUubGVmdCA9PSBudWxsICYmIGN1cnJlbnROb2RlLnJpZ2h0ID09IG51bGwpIHJldHVybjtcblxuICAgIGlmKGN1cnJlbnROb2RlLmxlZnQgIT0gbnVsbCl7XG4gICAgICBpZihjdXJyZW50Tm9kZS5sZWZ0LmRhdGEgPT0gdmFsdWUpe1xuICAgICAgICBjdXJyZW50Tm9kZS5sZWZ0ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICB9XG4gIGVsc2UgaWYoY3VycmVudE5vZGUucmlnaHQgIT0gbnVsbCl7XG4gICAgICBpZihjdXJyZW50Tm9kZS5yaWdodC5kYXRhID09IHZhbHVlKXtcbiAgICAgICAgY3VycmVudE5vZGUucmlnaHQgPSBudWxsO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICB9XG4gICBcblxuXG4gICAgaWYodmFsdWUgPCBjdXJyZW50Tm9kZS5kYXRhKXtcbiAgICAgIGlmKGN1cnJlbnROb2RlLmxlZnQgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuO1xuICAgIGVsc2VcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubGVmdDtcbiAgICB9XG4gICAgZWxzZSBpZih2YWx1ZSA+IGN1cnJlbnROb2RlLmRhdGEgKXtcbiAgICAgIGlmKGN1cnJlbnROb2RlLnJpZ2h0ID09IG51bGwpXG4gICAgICByZXR1cm4gXG4gICAgICBlbHNlXG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnJpZ2h0O1xuICAgIH1cblxuICAgXG4gIH1cblxuICB9XG5cbnJldHVybiB7Z2V0VHJlZSxwcmV0dHlQcmludCwgaW5zZXJ0Tm9kZSxkZWxldGVOb2RlfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0cmVlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHRyZWUgIGZyb20gJy4vdHJlZSc7XG5cbmxldCBhcnJheSA9IFsxLCA3LCA0LCAyMywgOCwgOSwgNCwgMywgNSwgNywgOSwgNjcsIDYzNDUsIDMyNF07XG5cbmxldCB0cmVlTm9kZSA9IHRyZWUoYXJyYXkpO1xuXG50cmVlTm9kZS5wcmV0dHlQcmludCh0cmVlTm9kZS5nZXRUcmVlKCkpO1xuXG50cmVlTm9kZS5pbnNlcnROb2RlKDEwKTtcbnRyZWVOb2RlLmluc2VydE5vZGUoMTApO1xudHJlZU5vZGUuaW5zZXJ0Tm9kZSgwKTtcbnRyZWVOb2RlLmluc2VydE5vZGUoNik7XG50cmVlTm9kZS5pbnNlcnROb2RlKDE0KTtcblxudHJlZU5vZGUucHJldHR5UHJpbnQodHJlZU5vZGUuZ2V0VHJlZSgpKTtcblxudHJlZU5vZGUuZGVsZXRlTm9kZSgwKTtcbnRyZWVOb2RlLmRlbGV0ZU5vZGUoMTIzKTtcbnRyZWVOb2RlLmRlbGV0ZU5vZGUoMTQpO1xudHJlZU5vZGUucHJldHR5UHJpbnQodHJlZU5vZGUuZ2V0VHJlZSgpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=