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

    if(currentNode.left == null && currentNode.right == null) return; 
    // 2 children;
    if(currentNode.data == value){
      if (currentNode.left != null || currentNode.right != null){ {  
        currentNode.data = deleteWithTwoChild(currentNode);
        
        return;
        }
      }
    }
    // REMOvES NODE IF NEEDED
    if(currentNode.left != null){  
      let deleteNode = currentNode.left;  
      if(deleteNode.data == value){
        if(deleteNode.left == null && deleteNode.right == null)  //check for no children
        currentNode.left = null;
        else { // check for 1 child
          if(deleteNode.left != null){
          return currentNode.left = deleteNode.left;
          }
          return currentNode.left = deleteNode.right;
        }
        return;
      }
  }
      if(currentNode.data == value){
       
          return newNode;
      }
  //  cotinues through tree if less than or greater than
    if(value < currentNode.data)
      deleteNode(value,currentNode.left);
     if(value > currentNode.data )
      deleteNode(value,currentNode.right);
    


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


// treeNode.deleteNode(8);

console.log("NEW TREE");

treeNode.prettyPrint(treeNode.getTree());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOzs7QUFHQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FDWE87QUFDVzs7O0FBR3JDO0FBQ0EseUJBQXlCLHNEQUFVO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLE9BQU8sRUFBRSx5QkFBeUI7QUFDbkU7QUFDQSxtQkFBbUIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQVU7QUFDakU7QUFDQSxnQ0FBZ0MsT0FBTyxFQUFFLHlCQUF5QjtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsaURBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixpREFBSTs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBLGlFQUFlLElBQUk7Ozs7OztVQ25IbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04yQjs7QUFFM0I7O0FBRUEsZUFBZSxpREFBSTs7QUFFbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBLHlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlLy4vc3JjL21lcmdlU29ydC5qcyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvLi9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvLi9zcmMvdHJlZS5qcyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gIGZ1bmN0aW9uIG1lcmdlU29ydChhcnJheSl7XG4gICAgbGV0IG5ld0FycmF5ID0gW107XG4gICAgICBpZihhcnJheS5sZW5ndGggPCAyIClcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICBsZXQgYXJyYXlIb2xkZXIxID0gKG1lcmdlU29ydChhcnJheS5zbGljZSgwLGFycmF5Lmxlbmd0aC8yKSkpIFxuICAgICBsZXQgYXJyYXlIb2xkZXIyID0gKG1lcmdlU29ydChhcnJheS5zbGljZShhcnJheS5sZW5ndGgvMikpKTtcbiAgaWYoYXJyYXlIb2xkZXIxLmxlbmd0aD49MSB8fCBhcnJheUhvbGRlcjIubGVuZ3RoPj0xKXtcbiAgd2hpbGUoYXJyYXlIb2xkZXIxLmxlbmd0aCAhPSAwICYmIGFycmF5SG9sZGVyMi5sZW5ndGggIT0wKXtcbiAgICAgICAgaWYoYXJyYXlIb2xkZXIxWzBdIDwgYXJyYXlIb2xkZXIyWzBdKXtcbiAgICAgICAgICAgIG5ld0FycmF5LnB1c2goYXJyYXlIb2xkZXIxLnNoaWZ0KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgbmV3QXJyYXkucHVzaChhcnJheUhvbGRlcjIuc2hpZnQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgIGlmKGFycmF5SG9sZGVyMS5sZW5ndGggPT0gMCApe1xuICAgICAgICAgICByZXR1cm4gbmV3QXJyYXkuY29uY2F0KGFycmF5SG9sZGVyMik7XG4gICAgICAgIH1cbiAgICAgICAgIGlmKGFycmF5SG9sZGVyMi5sZW5ndGggPT0gMCl7XG4gICAgICAgICByZXR1cm4gbmV3QXJyYXkuY29uY2F0KGFycmF5SG9sZGVyMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbn1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZVNvcnQoYXJyYXkpe1xuICAgIGxldCBtZXJnZUFycmF5ID0gbWVyZ2VTb3J0KGFycmF5KTtcbiAgICBcbiAgbGV0IG5ld0FycmF5ID0gW107XG4gICAgZm9yKGxldCBpID0gMDtpIDw9IG1lcmdlQXJyYXkubGVuZ3RoO2krKyl7XG4gICAgICBpZihtZXJnZUFycmF5W2ldICE9IG1lcmdlQXJyYXlbaSsxXSlcbiAgICAgIG5ld0FycmF5LnB1c2gobWVyZ2VBcnJheVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdBcnJheTtcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVEdXBsaWNhdGVTb3J0O1xuIiwiXG5cbmNvbnN0IG5vZGUgPSAoKSA9PiB7XG4gIGxldCBkYXRhID0gbnVsbDtcbiAgbGV0IGxlZnQgPSBudWxsO1xuICBsZXQgcmlnaHQgPSBudWxsOyBcblxuICByZXR1cm4ge2RhdGEsbGVmdCxyaWdodH07XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbm9kZTsiLCJpbXBvcnQgbm9kZSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IGZpeGVkQXJyYXkgZnJvbSAnLi9tZXJnZVNvcnQnO1xuXG5cbmNvbnN0IHRyZWUgPSAoYXJyYXkpID0+IHtcbiAgY29uc3QgcHJvY2Vzc2VkQXJyYXkgPSBmaXhlZEFycmF5KGFycmF5KTtcbiAgY29uc29sZS5sb2cocHJvY2Vzc2VkQXJyYXkpO1xuICBsZXQgcm9vdCA9IGJ1aWxkVHJlZShwcm9jZXNzZWRBcnJheSk7XG4gIGNvbnNvbGUubG9nKHJvb3QpO1xuXG4gIGZ1bmN0aW9uIGJ1aWxkVHJlZShhcnJheSl7XG4gICAgaWYoYXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBub2RlSXRlbSA9IG5vZGUoKTtcbiAgICBub2RlSXRlbS5kYXRhID0gYXJyYXlbTWF0aC5yb3VuZChhcnJheS5sZW5ndGgvMi0wLjQ5KV07XG4gICAgIG5vZGVJdGVtLmxlZnQgPSBidWlsZFRyZWUoYXJyYXkuc2xpY2UoMCxhcnJheS5sZW5ndGgvMikpO1xuICAgICBub2RlSXRlbS5yaWdodCA9IGJ1aWxkVHJlZShhcnJheS5zbGljZShhcnJheS5sZW5ndGgvMisxKSk7XG4gICAgIHJldHVybiAgbm9kZUl0ZW07XG4gICAgXG4gIH1cbiAgZnVuY3Rpb24gZ2V0VHJlZSgpe1xuICAgIHJldHVybiByb290O1xuICB9XG5cbiAgY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gJycsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCApIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilIIgICAnIDogJyAgICAnfWAsIGZhbHNlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gJ+KUlOKUgOKUgCAnIDogJ+KUjOKUgOKUgCAnfSR7bm9kZS5kYXRhfWApO1xuICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwgKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICcgICAgJyA6ICfilIIgICAnfWAsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGluc2VydE5vZGUgPSAodmFsdWUsY3VycmVudE5vZGUgPSByb290KSA9PntcbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gO1xuICAgIGNvbnN0IG5ld05vZGUgPSBub2RlKCk7XG4gICAgbmV3Tm9kZS5kYXRhID0gdmFsdWU7XG4gICAgbGV0IHBvaW50ZXJOb2RlID0gY3VycmVudE5vZGU7XG4gICAgaWYocG9pbnRlck5vZGUgPT0gbnVsbCl7XG4gICAgICByZXR1cm4gbmV3Tm9kZTtcbiAgICB9XG4gIC8vIGlmKHZhbHVlIDwgcG9pbnRlck5vZGUuZGF0YSAmJiBwb2ludGVyTm9kZS5sZWZ0ID09IG51bGwpXG4gIC8vICAgICByZXR1cm4gcG9pbnRlck5vZGUubGVmdCA9IG5ld05vZGU7XG4gIC8vIGlmICh2YWx1ZSA+IHBvaW50ZXJOb2RlLmRhdGEgJiYgcG9pbnRlck5vZGUucmlnaHQgPT0gbnVsbClcbiAgLy8gICAgIHJldHVybiBwb2ludGVyTm9kZS5yaWdodCA9IG5ld05vZGU7XG5cbiAgaWYocG9pbnRlck5vZGUuZGF0YSA9PSB2YWx1ZSkgcmV0dXJuIG5ld05vZGU7XG4gXG4gIGVsc2UgaWYodmFsdWUgPCBwb2ludGVyTm9kZS5kYXRhKXtcbiAgICBwb2ludGVyTm9kZS5sZWZ0ID0gaW5zZXJ0Tm9kZSh2YWx1ZSxwb2ludGVyTm9kZS5sZWZ0KVxuICB9XG4gIGVsc2UgXG4gIHBvaW50ZXJOb2RlLnJpZ2h0ID0gIGluc2VydE5vZGUodmFsdWUscG9pbnRlck5vZGUucmlnaHQpO1xuXG4gICByZXR1cm4gcG9pbnRlck5vZGU7XG4gIH1cbiAgZnVuY3Rpb24gZGVsZXRlV2l0aFR3b0NoaWxkKGN1cnJlbnROb2RlKXtcbiAgICBsZXQgbmV4dE5vZGUgPSBjdXJyZW50Tm9kZS5yaWdodCBcbiAgICBsZXQgcHJldmlvdXNOb2RlO1xuICAgIHdoaWxlKG5leHROb2RlLmxlZnQgIT0gbnVsbCl7XG4gICAgICBwcmV2aW91c05vZGUgPSBuZXh0Tm9kZTtcbiAgICAgIG5leHROb2RlID0gbmV4dE5vZGUubGVmdDtcbiAgICB9XG4gICAgcHJldmlvdXNOb2RlLmxlZnQgPSBudWxsO1xuICAgIGlmKG5leHROb2RlLnJpZ2h0ICE9IG51bGwpXG4gICAgcHJldmlvdXNOb2RlLmxlZnQgPSBuZXh0Tm9kZS5yaWdodDtcbiAgICByZXR1cm4gbmV4dE5vZGUuZGF0YTtcbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZU5vZGUgPSAodmFsdWUsY3VycmVudE5vZGUgPSByb290KSA9PntcbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gO1xuICAgIGNvbnN0IG5ld05vZGUgPSBub2RlKCk7XG5cbiAgICBpZihjdXJyZW50Tm9kZS5sZWZ0ID09IG51bGwgJiYgY3VycmVudE5vZGUucmlnaHQgPT0gbnVsbCkgcmV0dXJuOyBcbiAgICAvLyAyIGNoaWxkcmVuO1xuICAgIGlmKGN1cnJlbnROb2RlLmRhdGEgPT0gdmFsdWUpe1xuICAgICAgaWYgKGN1cnJlbnROb2RlLmxlZnQgIT0gbnVsbCB8fCBjdXJyZW50Tm9kZS5yaWdodCAhPSBudWxsKXsgeyAgXG4gICAgICAgIGN1cnJlbnROb2RlLmRhdGEgPSBkZWxldGVXaXRoVHdvQ2hpbGQoY3VycmVudE5vZGUpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFJFTU92RVMgTk9ERSBJRiBORUVERURcbiAgICBpZihjdXJyZW50Tm9kZS5sZWZ0ICE9IG51bGwpeyAgXG4gICAgICBsZXQgZGVsZXRlTm9kZSA9IGN1cnJlbnROb2RlLmxlZnQ7ICBcbiAgICAgIGlmKGRlbGV0ZU5vZGUuZGF0YSA9PSB2YWx1ZSl7XG4gICAgICAgIGlmKGRlbGV0ZU5vZGUubGVmdCA9PSBudWxsICYmIGRlbGV0ZU5vZGUucmlnaHQgPT0gbnVsbCkgIC8vY2hlY2sgZm9yIG5vIGNoaWxkcmVuXG4gICAgICAgIGN1cnJlbnROb2RlLmxlZnQgPSBudWxsO1xuICAgICAgICBlbHNlIHsgLy8gY2hlY2sgZm9yIDEgY2hpbGRcbiAgICAgICAgICBpZihkZWxldGVOb2RlLmxlZnQgIT0gbnVsbCl7XG4gICAgICAgICAgcmV0dXJuIGN1cnJlbnROb2RlLmxlZnQgPSBkZWxldGVOb2RlLmxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjdXJyZW50Tm9kZS5sZWZ0ID0gZGVsZXRlTm9kZS5yaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gIH1cbiAgICAgIGlmKGN1cnJlbnROb2RlLmRhdGEgPT0gdmFsdWUpe1xuICAgICAgIFxuICAgICAgICAgIHJldHVybiBuZXdOb2RlO1xuICAgICAgfVxuICAvLyAgY290aW51ZXMgdGhyb3VnaCB0cmVlIGlmIGxlc3MgdGhhbiBvciBncmVhdGVyIHRoYW5cbiAgICBpZih2YWx1ZSA8IGN1cnJlbnROb2RlLmRhdGEpXG4gICAgICBkZWxldGVOb2RlKHZhbHVlLGN1cnJlbnROb2RlLmxlZnQpO1xuICAgICBpZih2YWx1ZSA+IGN1cnJlbnROb2RlLmRhdGEgKVxuICAgICAgZGVsZXRlTm9kZSh2YWx1ZSxjdXJyZW50Tm9kZS5yaWdodCk7XG4gICAgXG5cblxuICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgfVxucmV0dXJuIHtnZXRUcmVlLHByZXR0eVByaW50LCBpbnNlcnROb2RlLGRlbGV0ZU5vZGV9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRyZWU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHJlZSAgZnJvbSAnLi90cmVlJztcblxubGV0IGFycmF5ID0gWzEsIDcsIDQsIDIzLCA4LCA5LCA0LCAzLCA1LCA3LCA5LCA2NywgNjM0NSwgMzI0XTtcblxubGV0IHRyZWVOb2RlID0gdHJlZShhcnJheSk7XG5cbnRyZWVOb2RlLnByZXR0eVByaW50KHRyZWVOb2RlLmdldFRyZWUoKSk7XG5cbnRyZWVOb2RlLmluc2VydE5vZGUoMTApO1xudHJlZU5vZGUuaW5zZXJ0Tm9kZSgxMCk7XG50cmVlTm9kZS5pbnNlcnROb2RlKDApO1xudHJlZU5vZGUuaW5zZXJ0Tm9kZSg2KTtcbnRyZWVOb2RlLmluc2VydE5vZGUoMTQpO1xuXG5jb25zb2xlLmxvZyhcIk5FVyBUUkVFIElOU0VSVFwiKTtcblxudHJlZU5vZGUucHJldHR5UHJpbnQodHJlZU5vZGUuZ2V0VHJlZSgpKTtcblxudHJlZU5vZGUuZGVsZXRlTm9kZSgxMjMpO1xudHJlZU5vZGUuZGVsZXRlTm9kZSgxKTtcbnRyZWVOb2RlLmRlbGV0ZU5vZGUoOSk7XG5cbmNvbnNvbGUubG9nKFwiTkVXIFRSRUUgREVMRVRlXCIpO1xuXG50cmVlTm9kZS5wcmV0dHlQcmludCh0cmVlTm9kZS5nZXRUcmVlKCkpO1xuXG5cbi8vIHRyZWVOb2RlLmRlbGV0ZU5vZGUoOCk7XG5cbmNvbnNvbGUubG9nKFwiTkVXIFRSRUVcIik7XG5cbnRyZWVOb2RlLnByZXR0eVByaW50KHRyZWVOb2RlLmdldFRyZWUoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9