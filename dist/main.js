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
    if (!value && value != 0) return ;
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
  
  // const levelOrder = (queueArray = [root]) =>{
  //   let orderArray = [];
  //   if(node == null) return [];
  // if(queueArray.length == 0) return orderArray;

  //   let sliced = queueArray.splice(0,1);
  //     orderArray.push(sliced[0].data);
  //     if(sliced[0].left != null){
  //       queueArray.push(sliced[0].left); 
  //     }
  //     if(sliced[0].right != null){
  //   queueArray.push(sliced[0].right);
  //     }
  // return orderArray.concat(levelOrder(queueArray));
  // }
  function levelOrder(node = root, callback){
    let queueArray = [];
    if(node == null) return [];
    let orderArray = [];
    queueArray.push(node);

    while(queueArray.length != 0){
       let sliced = queueArray.splice(0,1);
       if(callback){
        orderArray.push(callback(sliced[0].data));
       }else{
        orderArray.push(sliced[0].data);
       }
      

       if(sliced[0].left != null){
        queueArray.push(sliced[0].left); 
      }
      if(sliced[0].right != null){
    queueArray.push(sliced[0].right);
      }

    }
return orderArray;
  }
  
  const inOrder = (node = root) => {
    let arrayOrder  = [];
      if(node == null){
        return ;
      }


inOrder(node.left);
arrayOrder.push(node.data);
console.log(arrayOrder)

    if(node.right != null){

      return arrayOrder.concat((inOrder(node.right)));
    }
    return arrayOrder.concat(arrayOrder)


   
  }

  const preOrder = () => {

  }
  const  postOrder = () => {

  }


return {getTree,levelOrder, inOrder, preOrder, postOrder,prettyPrint, insertNode,deleteNode}
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
treeNode.insertNode(6);
treeNode.insertNode(14);
treeNode.insertNode(0);
treeNode.insertNode(2);
treeNode.insertNode(25);
treeNode.insertNode(36);



console.log("NEW TREE INSERT");

treeNode.prettyPrint(treeNode.getTree());

treeNode.deleteNode(123);
// treeNode.deleteNode(9);

console.log("NEW TREE DELETe");

treeNode.prettyPrint(treeNode.getTree());


treeNode.deleteNode();

console.log("NEW TREE");

treeNode.prettyPrint(treeNode.getTree());


console.log(treeNode.levelOrder(treeNode.getTree(),(x=> x*2)));

console.log(treeNode.inOrder());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOzs7QUFHQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FDWE87QUFDVzs7O0FBR3JDO0FBQ0EseUJBQXlCLHNEQUFVO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLE9BQU8sRUFBRSx5QkFBeUI7QUFDbkU7QUFDQSxtQkFBbUIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQVU7QUFDakU7QUFDQSxnQ0FBZ0MsT0FBTyxFQUFFLHlCQUF5QjtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsaURBQUk7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLE9BQU87QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBLFFBQVE7QUFDUjs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7VUNsTG5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMkI7O0FBRTNCOztBQUVBLGVBQWUsaURBQUk7O0FBRW5COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUEsZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvLi9zcmMvbWVyZ2VTb3J0LmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS8uL3NyYy9ub2RlLmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS8uL3NyYy90cmVlLmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgZnVuY3Rpb24gbWVyZ2VTb3J0KGFycmF5KXtcbiAgICBsZXQgbmV3QXJyYXkgPSBbXTtcbiAgICAgIGlmKGFycmF5Lmxlbmd0aCA8IDIgKVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgIGxldCBhcnJheUhvbGRlcjEgPSAobWVyZ2VTb3J0KGFycmF5LnNsaWNlKDAsYXJyYXkubGVuZ3RoLzIpKSkgXG4gICAgIGxldCBhcnJheUhvbGRlcjIgPSAobWVyZ2VTb3J0KGFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aC8yKSkpO1xuICBpZihhcnJheUhvbGRlcjEubGVuZ3RoPj0xIHx8IGFycmF5SG9sZGVyMi5sZW5ndGg+PTEpe1xuICB3aGlsZShhcnJheUhvbGRlcjEubGVuZ3RoICE9IDAgJiYgYXJyYXlIb2xkZXIyLmxlbmd0aCAhPTApe1xuICAgICAgICBpZihhcnJheUhvbGRlcjFbMF0gPCBhcnJheUhvbGRlcjJbMF0pe1xuICAgICAgICAgICAgbmV3QXJyYXkucHVzaChhcnJheUhvbGRlcjEuc2hpZnQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBuZXdBcnJheS5wdXNoKGFycmF5SG9sZGVyMi5zaGlmdCgpKTtcbiAgICAgICAgfVxuICAgICAgICAgaWYoYXJyYXlIb2xkZXIxLmxlbmd0aCA9PSAwICl7XG4gICAgICAgICAgIHJldHVybiBuZXdBcnJheS5jb25jYXQoYXJyYXlIb2xkZXIyKTtcbiAgICAgICAgfVxuICAgICAgICAgaWYoYXJyYXlIb2xkZXIyLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgIHJldHVybiBuZXdBcnJheS5jb25jYXQoYXJyYXlIb2xkZXIxKTtcbiAgICAgICAgfVxuICAgICAgfVxufVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRHVwbGljYXRlU29ydChhcnJheSl7XG4gICAgbGV0IG1lcmdlQXJyYXkgPSBtZXJnZVNvcnQoYXJyYXkpO1xuICAgIFxuICBsZXQgbmV3QXJyYXkgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwO2kgPD0gbWVyZ2VBcnJheS5sZW5ndGg7aSsrKXtcbiAgICAgIGlmKG1lcmdlQXJyYXlbaV0gIT0gbWVyZ2VBcnJheVtpKzFdKVxuICAgICAgbmV3QXJyYXkucHVzaChtZXJnZUFycmF5W2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0FycmF5O1xuICB9XG5cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZUR1cGxpY2F0ZVNvcnQ7XG4iLCJcblxuY29uc3Qgbm9kZSA9ICgpID0+IHtcbiAgbGV0IGRhdGEgPSBudWxsO1xuICBsZXQgbGVmdCA9IG51bGw7XG4gIGxldCByaWdodCA9IG51bGw7IFxuXG4gIHJldHVybiB7ZGF0YSxsZWZ0LHJpZ2h0fTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBub2RlOyIsImltcG9ydCBub2RlIGZyb20gJy4vbm9kZSc7XG5pbXBvcnQgZml4ZWRBcnJheSBmcm9tICcuL21lcmdlU29ydCc7XG5cblxuY29uc3QgdHJlZSA9IChhcnJheSkgPT4ge1xuICBjb25zdCBwcm9jZXNzZWRBcnJheSA9IGZpeGVkQXJyYXkoYXJyYXkpO1xuICBjb25zb2xlLmxvZyhwcm9jZXNzZWRBcnJheSk7XG4gIGxldCByb290ID0gYnVpbGRUcmVlKHByb2Nlc3NlZEFycmF5KTtcbiAgY29uc29sZS5sb2cocm9vdCk7XG5cbiAgZnVuY3Rpb24gYnVpbGRUcmVlKGFycmF5KXtcbiAgICBpZihhcnJheS5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIGNvbnN0IG5vZGVJdGVtID0gbm9kZSgpO1xuICAgIG5vZGVJdGVtLmRhdGEgPSBhcnJheVtNYXRoLnJvdW5kKGFycmF5Lmxlbmd0aC8yLTAuNDkpXTtcbiAgICAgbm9kZUl0ZW0ubGVmdCA9IGJ1aWxkVHJlZShhcnJheS5zbGljZSgwLGFycmF5Lmxlbmd0aC8yKSk7XG4gICAgIG5vZGVJdGVtLnJpZ2h0ID0gYnVpbGRUcmVlKGFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aC8yKzEpKTtcbiAgICAgcmV0dXJuICBub2RlSXRlbTtcbiAgICBcbiAgfVxuICBmdW5jdGlvbiBnZXRUcmVlKCl7XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH1cblxuICBjb25zdCBwcmV0dHlQcmludCA9IChub2RlLCBwcmVmaXggPSAnJywgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsICkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gJ+KUgiAgICcgOiAnICAgICd9YCwgZmFsc2UpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyAn4pSU4pSA4pSAICcgOiAn4pSM4pSA4pSAICd9JHtub2RlLmRhdGF9YCk7XG4gICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCApIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gJyAgICAnIDogJ+KUgiAgICd9YCwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaW5zZXJ0Tm9kZSA9ICh2YWx1ZSxjdXJyZW50Tm9kZSA9IHJvb3QpID0+e1xuICAgIGlmICghdmFsdWUgJiYgdmFsdWUgIT0gMCkgcmV0dXJuIDtcbiAgICBjb25zdCBuZXdOb2RlID0gbm9kZSgpO1xuICAgIG5ld05vZGUuZGF0YSA9IHZhbHVlO1xuICAgIGxldCBwb2ludGVyTm9kZSA9IGN1cnJlbnROb2RlO1xuXG4gICAgaWYocG9pbnRlck5vZGUgPT0gbnVsbCl7XG4gICAgICByZXR1cm4gbmV3Tm9kZTtcbiAgICB9XG4gIC8vIGlmKHZhbHVlIDwgcG9pbnRlck5vZGUuZGF0YSAmJiBwb2ludGVyTm9kZS5sZWZ0ID09IG51bGwpXG4gIC8vICAgICByZXR1cm4gcG9pbnRlck5vZGUubGVmdCA9IG5ld05vZGU7XG4gIC8vIGlmICh2YWx1ZSA+IHBvaW50ZXJOb2RlLmRhdGEgJiYgcG9pbnRlck5vZGUucmlnaHQgPT0gbnVsbClcbiAgLy8gICAgIHJldHVybiBwb2ludGVyTm9kZS5yaWdodCA9IG5ld05vZGU7XG5cbiAgaWYocG9pbnRlck5vZGUuZGF0YSA9PSB2YWx1ZSkgcmV0dXJuIG5ld05vZGU7XG4gXG4gIGVsc2UgaWYodmFsdWUgPCBwb2ludGVyTm9kZS5kYXRhKXtcbiAgICBwb2ludGVyTm9kZS5sZWZ0ID0gaW5zZXJ0Tm9kZSh2YWx1ZSxwb2ludGVyTm9kZS5sZWZ0KVxuICB9XG4gIGVsc2UgXG4gIHBvaW50ZXJOb2RlLnJpZ2h0ID0gIGluc2VydE5vZGUodmFsdWUscG9pbnRlck5vZGUucmlnaHQpO1xuXG4gICByZXR1cm4gcG9pbnRlck5vZGU7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVXaXRoVHdvQ2hpbGQoY3VycmVudE5vZGUpe1xuICAgIGxldCBuZXh0Tm9kZSA9IGN1cnJlbnROb2RlLnJpZ2h0IFxuICAgIGxldCBwcmV2aW91c05vZGU7XG4gICAgd2hpbGUobmV4dE5vZGUubGVmdCAhPSBudWxsKXtcbiAgICAgIHByZXZpb3VzTm9kZSA9IG5leHROb2RlO1xuICAgICAgbmV4dE5vZGUgPSBuZXh0Tm9kZS5sZWZ0O1xuICAgIH1cbiAgICBwcmV2aW91c05vZGUubGVmdCA9IG51bGw7XG4gICAgaWYobmV4dE5vZGUucmlnaHQgIT0gbnVsbClcbiAgICBwcmV2aW91c05vZGUubGVmdCA9IG5leHROb2RlLnJpZ2h0O1xuICAgIHJldHVybiBuZXh0Tm9kZS5kYXRhO1xuICB9XG5cbiAgY29uc3QgZGVsZXRlTm9kZSA9ICh2YWx1ZSxjdXJyZW50Tm9kZSA9IHJvb3QpID0+e1xuICAgIGlmICghdmFsdWUpIHJldHVybiA7XG4gICAgY29uc3QgbmV3Tm9kZSA9IG5vZGUoKTtcbiAgICBpZihjdXJyZW50Tm9kZSA9PSBudWxsKXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAgIGlmKGN1cnJlbnROb2RlLmRhdGEgPT0gdmFsdWUpe1xuICAgICAgICBpZihjdXJyZW50Tm9kZS5sZWZ0ID09IG51bGwgJiYgY3VycmVudE5vZGUucmlnaHQgPT0gbnVsbCApe1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgICAgIGVsc2UgaWYoY3VycmVudE5vZGUubGVmdCA9PSBudWxsIHx8IGN1cnJlbnROb2RlLnJpZ2h0ID09IG51bGwpeyAgLy9vbmUgY2hpbGRcbiAgICAgICAgICAgICAgaWYoY3VycmVudE5vZGUubGVmdCAhPSAgbnVsbCl7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZS5kYXRhID0gY3VycmVudE5vZGUubGVmdC5kYXRhO1xuICAgICAgICAgICAgICAgIG5ld05vZGUubGVmdCA9IGN1cnJlbnROb2RlLmxlZnQubGVmdDtcbiAgICAgICAgICAgICAgICBuZXdOb2RlLnJpZ2h0ID0gY3VycmVudE5vZGUubGVmdC5yaWdodDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmKGN1cnJlbnROb2RlLnJpZ2h0ICE9ICBudWxsKSB7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZS5kYXRhID0gY3VycmVudE5vZGUucmlnaHQuZGF0YTtcbiAgICAgICAgICAgICAgICBuZXdOb2RlLmxlZnQgPSBjdXJyZW50Tm9kZS5yaWdodC5sZWZ0O1xuICAgICAgICAgICAgICAgIG5ld05vZGUucmlnaHQgPSBjdXJyZW50Tm9kZS5yaWdodC5yaWdodDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3Tm9kZTtcbiAgICAgIH1lbHNleyAgLy90d28gY2hpbGRcbiAgICAgICAgY3VycmVudE5vZGUuZGF0YSA9ICBkZWxldGVXaXRoVHdvQ2hpbGQoY3VycmVudE5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZih2YWx1ZSA8IGN1cnJlbnROb2RlLmRhdGEpXG4gICAgICBjdXJyZW50Tm9kZS5sZWZ0ID0gIGRlbGV0ZU5vZGUodmFsdWUsY3VycmVudE5vZGUubGVmdCk7XG4gICAgIGlmKHZhbHVlID4gY3VycmVudE5vZGUuZGF0YSApXG4gICAgIGN1cnJlbnROb2RlLnJpZ2h0ID0gIGRlbGV0ZU5vZGUodmFsdWUsY3VycmVudE5vZGUucmlnaHQpO1xuICAgIFxuICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgfVxuICBcbiAgLy8gY29uc3QgbGV2ZWxPcmRlciA9IChxdWV1ZUFycmF5ID0gW3Jvb3RdKSA9PntcbiAgLy8gICBsZXQgb3JkZXJBcnJheSA9IFtdO1xuICAvLyAgIGlmKG5vZGUgPT0gbnVsbCkgcmV0dXJuIFtdO1xuICAvLyBpZihxdWV1ZUFycmF5Lmxlbmd0aCA9PSAwKSByZXR1cm4gb3JkZXJBcnJheTtcblxuICAvLyAgIGxldCBzbGljZWQgPSBxdWV1ZUFycmF5LnNwbGljZSgwLDEpO1xuICAvLyAgICAgb3JkZXJBcnJheS5wdXNoKHNsaWNlZFswXS5kYXRhKTtcbiAgLy8gICAgIGlmKHNsaWNlZFswXS5sZWZ0ICE9IG51bGwpe1xuICAvLyAgICAgICBxdWV1ZUFycmF5LnB1c2goc2xpY2VkWzBdLmxlZnQpOyBcbiAgLy8gICAgIH1cbiAgLy8gICAgIGlmKHNsaWNlZFswXS5yaWdodCAhPSBudWxsKXtcbiAgLy8gICBxdWV1ZUFycmF5LnB1c2goc2xpY2VkWzBdLnJpZ2h0KTtcbiAgLy8gICAgIH1cbiAgLy8gcmV0dXJuIG9yZGVyQXJyYXkuY29uY2F0KGxldmVsT3JkZXIocXVldWVBcnJheSkpO1xuICAvLyB9XG4gIGZ1bmN0aW9uIGxldmVsT3JkZXIobm9kZSA9IHJvb3QsIGNhbGxiYWNrKXtcbiAgICBsZXQgcXVldWVBcnJheSA9IFtdO1xuICAgIGlmKG5vZGUgPT0gbnVsbCkgcmV0dXJuIFtdO1xuICAgIGxldCBvcmRlckFycmF5ID0gW107XG4gICAgcXVldWVBcnJheS5wdXNoKG5vZGUpO1xuXG4gICAgd2hpbGUocXVldWVBcnJheS5sZW5ndGggIT0gMCl7XG4gICAgICAgbGV0IHNsaWNlZCA9IHF1ZXVlQXJyYXkuc3BsaWNlKDAsMSk7XG4gICAgICAgaWYoY2FsbGJhY2spe1xuICAgICAgICBvcmRlckFycmF5LnB1c2goY2FsbGJhY2soc2xpY2VkWzBdLmRhdGEpKTtcbiAgICAgICB9ZWxzZXtcbiAgICAgICAgb3JkZXJBcnJheS5wdXNoKHNsaWNlZFswXS5kYXRhKTtcbiAgICAgICB9XG4gICAgICBcblxuICAgICAgIGlmKHNsaWNlZFswXS5sZWZ0ICE9IG51bGwpe1xuICAgICAgICBxdWV1ZUFycmF5LnB1c2goc2xpY2VkWzBdLmxlZnQpOyBcbiAgICAgIH1cbiAgICAgIGlmKHNsaWNlZFswXS5yaWdodCAhPSBudWxsKXtcbiAgICBxdWV1ZUFycmF5LnB1c2goc2xpY2VkWzBdLnJpZ2h0KTtcbiAgICAgIH1cblxuICAgIH1cbnJldHVybiBvcmRlckFycmF5O1xuICB9XG4gIFxuICBjb25zdCBpbk9yZGVyID0gKG5vZGUgPSByb290KSA9PiB7XG4gICAgbGV0IGFycmF5T3JkZXIgID0gW107XG4gICAgICBpZihub2RlID09IG51bGwpe1xuICAgICAgICByZXR1cm4gO1xuICAgICAgfVxuXG5cbmluT3JkZXIobm9kZS5sZWZ0KTtcbmFycmF5T3JkZXIucHVzaChub2RlLmRhdGEpO1xuY29uc29sZS5sb2coYXJyYXlPcmRlcilcblxuICAgIGlmKG5vZGUucmlnaHQgIT0gbnVsbCl7XG5cbiAgICAgIHJldHVybiBhcnJheU9yZGVyLmNvbmNhdCgoaW5PcmRlcihub2RlLnJpZ2h0KSkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXlPcmRlci5jb25jYXQoYXJyYXlPcmRlcilcblxuXG4gICBcbiAgfVxuXG4gIGNvbnN0IHByZU9yZGVyID0gKCkgPT4ge1xuXG4gIH1cbiAgY29uc3QgIHBvc3RPcmRlciA9ICgpID0+IHtcblxuICB9XG5cblxucmV0dXJuIHtnZXRUcmVlLGxldmVsT3JkZXIsIGluT3JkZXIsIHByZU9yZGVyLCBwb3N0T3JkZXIscHJldHR5UHJpbnQsIGluc2VydE5vZGUsZGVsZXRlTm9kZX1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdHJlZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0cmVlICBmcm9tICcuL3RyZWUnO1xuXG5sZXQgYXJyYXkgPSBbMSwgNywgNCwgMjMsIDgsIDksIDQsIDMsIDUsIDcsIDksIDY3LCA2MzQ1LCAzMjRdO1xuXG5sZXQgdHJlZU5vZGUgPSB0cmVlKGFycmF5KTtcblxudHJlZU5vZGUucHJldHR5UHJpbnQodHJlZU5vZGUuZ2V0VHJlZSgpKTtcblxudHJlZU5vZGUuaW5zZXJ0Tm9kZSgxMCk7XG50cmVlTm9kZS5pbnNlcnROb2RlKDEwKTtcbnRyZWVOb2RlLmluc2VydE5vZGUoNik7XG50cmVlTm9kZS5pbnNlcnROb2RlKDE0KTtcbnRyZWVOb2RlLmluc2VydE5vZGUoMCk7XG50cmVlTm9kZS5pbnNlcnROb2RlKDIpO1xudHJlZU5vZGUuaW5zZXJ0Tm9kZSgyNSk7XG50cmVlTm9kZS5pbnNlcnROb2RlKDM2KTtcblxuXG5cbmNvbnNvbGUubG9nKFwiTkVXIFRSRUUgSU5TRVJUXCIpO1xuXG50cmVlTm9kZS5wcmV0dHlQcmludCh0cmVlTm9kZS5nZXRUcmVlKCkpO1xuXG50cmVlTm9kZS5kZWxldGVOb2RlKDEyMyk7XG4vLyB0cmVlTm9kZS5kZWxldGVOb2RlKDkpO1xuXG5jb25zb2xlLmxvZyhcIk5FVyBUUkVFIERFTEVUZVwiKTtcblxudHJlZU5vZGUucHJldHR5UHJpbnQodHJlZU5vZGUuZ2V0VHJlZSgpKTtcblxuXG50cmVlTm9kZS5kZWxldGVOb2RlKCk7XG5cbmNvbnNvbGUubG9nKFwiTkVXIFRSRUVcIik7XG5cbnRyZWVOb2RlLnByZXR0eVByaW50KHRyZWVOb2RlLmdldFRyZWUoKSk7XG5cblxuY29uc29sZS5sb2codHJlZU5vZGUubGV2ZWxPcmRlcih0cmVlTm9kZS5nZXRUcmVlKCksKHg9PiB4KjIpKSk7XG5cbmNvbnNvbGUubG9nKHRyZWVOb2RlLmluT3JkZXIoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9