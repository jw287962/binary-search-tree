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

  const insertNode = (value,currentNode = root) =>{
    if (!value) return ;
    const newNode = (0,_node__WEBPACK_IMPORTED_MODULE_0__["default"])();
    newNode.data = value;
    let pointerNode = currentNode;
    if(pointerNode == null){
      return newNode;
    }
  // if(value < pointerNode.data && pointerNode.left == null)
  //     return pointerNode.left = newNode;
  // if (value > pointerNode.data && pointerNode.right == null)
  //     return pointerNode.right = newNode;

  if(pointerNode.data == value) return newNode;
 
  else if(value < pointerNode.data){
    pointerNode.left = insertNode(value,pointerNode.left)
  }
  else 
  pointerNode.right =  insertNode(value,pointerNode.right);

   return pointerNode;
  }
  function deleteWithTwoChild(currentNode){
    let nextNode = currentNode.right 
    let previousNode;
    while(nextNode.left != null){
      previousNode = nextNode;
      nextNode = nextNode.left;
    }
    previousNode.left = null;
    if(nextNode.right != null)
    previousNode.left = nextNode.right;
    return nextNode.data;
  }

  const deleteNode = (value,currentNode = root) =>{
    if (!value) return ;
    const newNode = (0,_node__WEBPACK_IMPORTED_MODULE_0__["default"])();
    if(currentNode == null){
      return null;
    }
      if(currentNode.data == value){
        if(currentNode.left == null && currentNode.right == null ){
          return null;
        }
           else if(currentNode.left == null || currentNode.right == null){  //one child
              if(currentNode.left !=  null){
                newNode.data = currentNode.left.data;
                newNode.left = currentNode.left.left;
                newNode.right = currentNode.left.right;
              }
              else if(currentNode.right !=  null) {
                newNode.data = currentNode.right.data;
                newNode.left = currentNode.right.left;
                newNode.right = currentNode.right.right;
              }
              return newNode;
      }else{  //two child
        currentNode.data =  deleteWithTwoChild(currentNode);
      }
    }
    if(value < currentNode.data)
      currentNode.left =  deleteNode(value,currentNode.left);
     if(value > currentNode.data )
     currentNode.right =  deleteNode(value,currentNode.right);
    
    return currentNode;
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

console.log("NEW TREE INSERT");

treeNode.prettyPrint(treeNode.getTree());

treeNode.deleteNode(123);
treeNode.deleteNode(1);
treeNode.deleteNode(9);

console.log("NEW TREE DELETe");

treeNode.prettyPrint(treeNode.getTree());


treeNode.deleteNode(8);

console.log("NEW TREE");

treeNode.prettyPrint(treeNode.getTree());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOzs7QUFHQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FDWE87QUFDVzs7O0FBR3JDO0FBQ0EseUJBQXlCLHNEQUFVO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLE9BQU8sRUFBRSx5QkFBeUI7QUFDbkU7QUFDQSxtQkFBbUIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQVU7QUFDakU7QUFDQSxnQ0FBZ0MsT0FBTyxFQUFFLHlCQUF5QjtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsaURBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixpREFBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxPQUFPO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7O1VDekduQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjJCOztBQUUzQjs7QUFFQSxlQUFlLGlEQUFJOztBQUVuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUEseUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvLi9zcmMvbWVyZ2VTb3J0LmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS8uL3NyYy9ub2RlLmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS8uL3NyYy90cmVlLmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgZnVuY3Rpb24gbWVyZ2VTb3J0KGFycmF5KXtcbiAgICBsZXQgbmV3QXJyYXkgPSBbXTtcbiAgICAgIGlmKGFycmF5Lmxlbmd0aCA8IDIgKVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgIGxldCBhcnJheUhvbGRlcjEgPSAobWVyZ2VTb3J0KGFycmF5LnNsaWNlKDAsYXJyYXkubGVuZ3RoLzIpKSkgXG4gICAgIGxldCBhcnJheUhvbGRlcjIgPSAobWVyZ2VTb3J0KGFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aC8yKSkpO1xuICBpZihhcnJheUhvbGRlcjEubGVuZ3RoPj0xIHx8IGFycmF5SG9sZGVyMi5sZW5ndGg+PTEpe1xuICB3aGlsZShhcnJheUhvbGRlcjEubGVuZ3RoICE9IDAgJiYgYXJyYXlIb2xkZXIyLmxlbmd0aCAhPTApe1xuICAgICAgICBpZihhcnJheUhvbGRlcjFbMF0gPCBhcnJheUhvbGRlcjJbMF0pe1xuICAgICAgICAgICAgbmV3QXJyYXkucHVzaChhcnJheUhvbGRlcjEuc2hpZnQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBuZXdBcnJheS5wdXNoKGFycmF5SG9sZGVyMi5zaGlmdCgpKTtcbiAgICAgICAgfVxuICAgICAgICAgaWYoYXJyYXlIb2xkZXIxLmxlbmd0aCA9PSAwICl7XG4gICAgICAgICAgIHJldHVybiBuZXdBcnJheS5jb25jYXQoYXJyYXlIb2xkZXIyKTtcbiAgICAgICAgfVxuICAgICAgICAgaWYoYXJyYXlIb2xkZXIyLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgIHJldHVybiBuZXdBcnJheS5jb25jYXQoYXJyYXlIb2xkZXIxKTtcbiAgICAgICAgfVxuICAgICAgfVxufVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRHVwbGljYXRlU29ydChhcnJheSl7XG4gICAgbGV0IG1lcmdlQXJyYXkgPSBtZXJnZVNvcnQoYXJyYXkpO1xuICAgIFxuICBsZXQgbmV3QXJyYXkgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwO2kgPD0gbWVyZ2VBcnJheS5sZW5ndGg7aSsrKXtcbiAgICAgIGlmKG1lcmdlQXJyYXlbaV0gIT0gbWVyZ2VBcnJheVtpKzFdKVxuICAgICAgbmV3QXJyYXkucHVzaChtZXJnZUFycmF5W2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0FycmF5O1xuICB9XG5cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZUR1cGxpY2F0ZVNvcnQ7XG4iLCJcblxuY29uc3Qgbm9kZSA9ICgpID0+IHtcbiAgbGV0IGRhdGEgPSBudWxsO1xuICBsZXQgbGVmdCA9IG51bGw7XG4gIGxldCByaWdodCA9IG51bGw7IFxuXG4gIHJldHVybiB7ZGF0YSxsZWZ0LHJpZ2h0fTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBub2RlOyIsImltcG9ydCBub2RlIGZyb20gJy4vbm9kZSc7XG5pbXBvcnQgZml4ZWRBcnJheSBmcm9tICcuL21lcmdlU29ydCc7XG5cblxuY29uc3QgdHJlZSA9IChhcnJheSkgPT4ge1xuICBjb25zdCBwcm9jZXNzZWRBcnJheSA9IGZpeGVkQXJyYXkoYXJyYXkpO1xuICBjb25zb2xlLmxvZyhwcm9jZXNzZWRBcnJheSk7XG4gIGxldCByb290ID0gYnVpbGRUcmVlKHByb2Nlc3NlZEFycmF5KTtcbiAgY29uc29sZS5sb2cocm9vdCk7XG5cbiAgZnVuY3Rpb24gYnVpbGRUcmVlKGFycmF5KXtcbiAgICBpZihhcnJheS5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIGNvbnN0IG5vZGVJdGVtID0gbm9kZSgpO1xuICAgIG5vZGVJdGVtLmRhdGEgPSBhcnJheVtNYXRoLnJvdW5kKGFycmF5Lmxlbmd0aC8yLTAuNDkpXTtcbiAgICAgbm9kZUl0ZW0ubGVmdCA9IGJ1aWxkVHJlZShhcnJheS5zbGljZSgwLGFycmF5Lmxlbmd0aC8yKSk7XG4gICAgIG5vZGVJdGVtLnJpZ2h0ID0gYnVpbGRUcmVlKGFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aC8yKzEpKTtcbiAgICAgcmV0dXJuICBub2RlSXRlbTtcbiAgICBcbiAgfVxuICBmdW5jdGlvbiBnZXRUcmVlKCl7XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH1cblxuICBjb25zdCBwcmV0dHlQcmludCA9IChub2RlLCBwcmVmaXggPSAnJywgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsICkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gJ+KUgiAgICcgOiAnICAgICd9YCwgZmFsc2UpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyAn4pSU4pSA4pSAICcgOiAn4pSM4pSA4pSAICd9JHtub2RlLmRhdGF9YCk7XG4gICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCApIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gJyAgICAnIDogJ+KUgiAgICd9YCwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaW5zZXJ0Tm9kZSA9ICh2YWx1ZSxjdXJyZW50Tm9kZSA9IHJvb3QpID0+e1xuICAgIGlmICghdmFsdWUpIHJldHVybiA7XG4gICAgY29uc3QgbmV3Tm9kZSA9IG5vZGUoKTtcbiAgICBuZXdOb2RlLmRhdGEgPSB2YWx1ZTtcbiAgICBsZXQgcG9pbnRlck5vZGUgPSBjdXJyZW50Tm9kZTtcbiAgICBpZihwb2ludGVyTm9kZSA9PSBudWxsKXtcbiAgICAgIHJldHVybiBuZXdOb2RlO1xuICAgIH1cbiAgLy8gaWYodmFsdWUgPCBwb2ludGVyTm9kZS5kYXRhICYmIHBvaW50ZXJOb2RlLmxlZnQgPT0gbnVsbClcbiAgLy8gICAgIHJldHVybiBwb2ludGVyTm9kZS5sZWZ0ID0gbmV3Tm9kZTtcbiAgLy8gaWYgKHZhbHVlID4gcG9pbnRlck5vZGUuZGF0YSAmJiBwb2ludGVyTm9kZS5yaWdodCA9PSBudWxsKVxuICAvLyAgICAgcmV0dXJuIHBvaW50ZXJOb2RlLnJpZ2h0ID0gbmV3Tm9kZTtcblxuICBpZihwb2ludGVyTm9kZS5kYXRhID09IHZhbHVlKSByZXR1cm4gbmV3Tm9kZTtcbiBcbiAgZWxzZSBpZih2YWx1ZSA8IHBvaW50ZXJOb2RlLmRhdGEpe1xuICAgIHBvaW50ZXJOb2RlLmxlZnQgPSBpbnNlcnROb2RlKHZhbHVlLHBvaW50ZXJOb2RlLmxlZnQpXG4gIH1cbiAgZWxzZSBcbiAgcG9pbnRlck5vZGUucmlnaHQgPSAgaW5zZXJ0Tm9kZSh2YWx1ZSxwb2ludGVyTm9kZS5yaWdodCk7XG5cbiAgIHJldHVybiBwb2ludGVyTm9kZTtcbiAgfVxuICBmdW5jdGlvbiBkZWxldGVXaXRoVHdvQ2hpbGQoY3VycmVudE5vZGUpe1xuICAgIGxldCBuZXh0Tm9kZSA9IGN1cnJlbnROb2RlLnJpZ2h0IFxuICAgIGxldCBwcmV2aW91c05vZGU7XG4gICAgd2hpbGUobmV4dE5vZGUubGVmdCAhPSBudWxsKXtcbiAgICAgIHByZXZpb3VzTm9kZSA9IG5leHROb2RlO1xuICAgICAgbmV4dE5vZGUgPSBuZXh0Tm9kZS5sZWZ0O1xuICAgIH1cbiAgICBwcmV2aW91c05vZGUubGVmdCA9IG51bGw7XG4gICAgaWYobmV4dE5vZGUucmlnaHQgIT0gbnVsbClcbiAgICBwcmV2aW91c05vZGUubGVmdCA9IG5leHROb2RlLnJpZ2h0O1xuICAgIHJldHVybiBuZXh0Tm9kZS5kYXRhO1xuICB9XG5cbiAgY29uc3QgZGVsZXRlTm9kZSA9ICh2YWx1ZSxjdXJyZW50Tm9kZSA9IHJvb3QpID0+e1xuICAgIGlmICghdmFsdWUpIHJldHVybiA7XG4gICAgY29uc3QgbmV3Tm9kZSA9IG5vZGUoKTtcbiAgICBpZihjdXJyZW50Tm9kZSA9PSBudWxsKXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAgIGlmKGN1cnJlbnROb2RlLmRhdGEgPT0gdmFsdWUpe1xuICAgICAgICBpZihjdXJyZW50Tm9kZS5sZWZ0ID09IG51bGwgJiYgY3VycmVudE5vZGUucmlnaHQgPT0gbnVsbCApe1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgICAgIGVsc2UgaWYoY3VycmVudE5vZGUubGVmdCA9PSBudWxsIHx8IGN1cnJlbnROb2RlLnJpZ2h0ID09IG51bGwpeyAgLy9vbmUgY2hpbGRcbiAgICAgICAgICAgICAgaWYoY3VycmVudE5vZGUubGVmdCAhPSAgbnVsbCl7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZS5kYXRhID0gY3VycmVudE5vZGUubGVmdC5kYXRhO1xuICAgICAgICAgICAgICAgIG5ld05vZGUubGVmdCA9IGN1cnJlbnROb2RlLmxlZnQubGVmdDtcbiAgICAgICAgICAgICAgICBuZXdOb2RlLnJpZ2h0ID0gY3VycmVudE5vZGUubGVmdC5yaWdodDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmKGN1cnJlbnROb2RlLnJpZ2h0ICE9ICBudWxsKSB7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZS5kYXRhID0gY3VycmVudE5vZGUucmlnaHQuZGF0YTtcbiAgICAgICAgICAgICAgICBuZXdOb2RlLmxlZnQgPSBjdXJyZW50Tm9kZS5yaWdodC5sZWZ0O1xuICAgICAgICAgICAgICAgIG5ld05vZGUucmlnaHQgPSBjdXJyZW50Tm9kZS5yaWdodC5yaWdodDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3Tm9kZTtcbiAgICAgIH1lbHNleyAgLy90d28gY2hpbGRcbiAgICAgICAgY3VycmVudE5vZGUuZGF0YSA9ICBkZWxldGVXaXRoVHdvQ2hpbGQoY3VycmVudE5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZih2YWx1ZSA8IGN1cnJlbnROb2RlLmRhdGEpXG4gICAgICBjdXJyZW50Tm9kZS5sZWZ0ID0gIGRlbGV0ZU5vZGUodmFsdWUsY3VycmVudE5vZGUubGVmdCk7XG4gICAgIGlmKHZhbHVlID4gY3VycmVudE5vZGUuZGF0YSApXG4gICAgIGN1cnJlbnROb2RlLnJpZ2h0ID0gIGRlbGV0ZU5vZGUodmFsdWUsY3VycmVudE5vZGUucmlnaHQpO1xuICAgIFxuICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgfVxucmV0dXJuIHtnZXRUcmVlLHByZXR0eVByaW50LCBpbnNlcnROb2RlLGRlbGV0ZU5vZGV9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRyZWU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHJlZSAgZnJvbSAnLi90cmVlJztcblxubGV0IGFycmF5ID0gWzEsIDcsIDQsIDIzLCA4LCA5LCA0LCAzLCA1LCA3LCA5LCA2NywgNjM0NSwgMzI0XTtcblxubGV0IHRyZWVOb2RlID0gdHJlZShhcnJheSk7XG5cbnRyZWVOb2RlLnByZXR0eVByaW50KHRyZWVOb2RlLmdldFRyZWUoKSk7XG5cbnRyZWVOb2RlLmluc2VydE5vZGUoMTApO1xudHJlZU5vZGUuaW5zZXJ0Tm9kZSgxMCk7XG50cmVlTm9kZS5pbnNlcnROb2RlKDApO1xudHJlZU5vZGUuaW5zZXJ0Tm9kZSg2KTtcbnRyZWVOb2RlLmluc2VydE5vZGUoMTQpO1xuXG5jb25zb2xlLmxvZyhcIk5FVyBUUkVFIElOU0VSVFwiKTtcblxudHJlZU5vZGUucHJldHR5UHJpbnQodHJlZU5vZGUuZ2V0VHJlZSgpKTtcblxudHJlZU5vZGUuZGVsZXRlTm9kZSgxMjMpO1xudHJlZU5vZGUuZGVsZXRlTm9kZSgxKTtcbnRyZWVOb2RlLmRlbGV0ZU5vZGUoOSk7XG5cbmNvbnNvbGUubG9nKFwiTkVXIFRSRUUgREVMRVRlXCIpO1xuXG50cmVlTm9kZS5wcmV0dHlQcmludCh0cmVlTm9kZS5nZXRUcmVlKCkpO1xuXG5cbnRyZWVOb2RlLmRlbGV0ZU5vZGUoOCk7XG5cbmNvbnNvbGUubG9nKFwiTkVXIFRSRUVcIik7XG5cbnRyZWVOb2RlLnByZXR0eVByaW50KHRyZWVOb2RlLmdldFRyZWUoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9