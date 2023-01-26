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
       if(callback)
        orderArray.push(callback(sliced[0].data));
       else
        orderArray.push(sliced[0].data);
       if(sliced[0].left != null){
        queueArray.push(sliced[0].left); 
      }
      if(sliced[0].right != null){
    queueArray.push(sliced[0].right);
      }
    }
return orderArray;
  }
  
  const inOrder = (node = root, array = [], callback) => {
      if(node == null)
        return null;

      if(callback){
        inOrder(node.left,array,callback);
        array.push(callback(node.data));
        inOrder(node.right,array,callback);
      }
      else{
        let holder =  inOrder(node.left,array);
        console.log(holder);
        array.push(node.data);
         inOrder(node.right,array);
      }
      return array;
  }
  // inOrder(8, array)
  //   -> inOrder(4, array)
  //       -> inOrder(3, array)
  //           -> inOrder(1, array)
  //               -> inOrder(0, array) --> return [0]
  //                   -> inOrder(null, array) --> null
  //                       


  const preOrder = (node = root, array = [], callback) => {
    if(node == null){
      return;
    }
    if(callback){
      array.push(callback(node.data));
      preOrder(node.left,array,callback);
      ((preOrder(node.right,array,callback)));
    }
    else{
    array.push(node.data);
    preOrder(node.left,array);
    ((preOrder(node.right,array)));
    }
    return array;
  }

  const  postOrder = (node = root, array = [], callback) => {
    if(node == null){
      return;
    }
    if(callback){
      postOrder(node.left,array,callback);
      postOrder(node.right,array,callback);
      array.push(node.data);
    }
 else{
  postOrder(node.left,array);
  postOrder(node.right,array);
  array.push(node.data);
 }

    return array;
  }
const height = (node = root, array = [1,1]) => {
 if (node == null) return;
array[0]++;
  height(node.left,array)
if(node.right != null){
  array[0]++;
  if(array[1] < array[0]){
    array[1] = array[0]
   }
  array[0]--;
}
array[0]--;
  height(node.right,array);

  if(array[1] < array[0]){
    array[1] = array[0]
   }
   
return array[1];

}
const depth = () => {

}
const isBalanced = () =>{

}
 
const rebalance = () =>{
  let array = inOrder(getTree(),[]);
    root =  buildTree(array);
  
}

return {getTree,levelOrder, height,depth,isBalanced,rebalance,
   inOrder, preOrder, postOrder,prettyPrint, insertNode,deleteNode}
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


console.log(treeNode.levelOrder(treeNode.getTree()));



console.log(treeNode.inOrder(treeNode.getTree(),[],( x=> x+2)));


console.log(treeNode.preOrder());

console.log(treeNode.postOrder());


console.log(treeNode.height(treeNode.getTree()));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOzs7QUFHQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FDWE87QUFDVzs7O0FBR3JDO0FBQ0EseUJBQXlCLHNEQUFVO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLE9BQU8sRUFBRSx5QkFBeUI7QUFDbkU7QUFDQSxtQkFBbUIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQVU7QUFDakU7QUFDQSxnQ0FBZ0MsT0FBTyxFQUFFLHlCQUF5QjtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsaURBQUk7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLE9BQU87QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVE7QUFDUjtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7VUNoUHBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMkI7O0FBRTNCOztBQUVBLGVBQWUsaURBQUk7O0FBRW5COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7Ozs7QUFJQTs7O0FBR0E7O0FBRUE7OztBQUdBLGlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlLy4vc3JjL21lcmdlU29ydC5qcyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvLi9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvLi9zcmMvdHJlZS5qcyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gIGZ1bmN0aW9uIG1lcmdlU29ydChhcnJheSl7XG4gICAgbGV0IG5ld0FycmF5ID0gW107XG4gICAgICBpZihhcnJheS5sZW5ndGggPCAyIClcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICBsZXQgYXJyYXlIb2xkZXIxID0gKG1lcmdlU29ydChhcnJheS5zbGljZSgwLGFycmF5Lmxlbmd0aC8yKSkpIFxuICAgICBsZXQgYXJyYXlIb2xkZXIyID0gKG1lcmdlU29ydChhcnJheS5zbGljZShhcnJheS5sZW5ndGgvMikpKTtcbiAgaWYoYXJyYXlIb2xkZXIxLmxlbmd0aD49MSB8fCBhcnJheUhvbGRlcjIubGVuZ3RoPj0xKXtcbiAgd2hpbGUoYXJyYXlIb2xkZXIxLmxlbmd0aCAhPSAwICYmIGFycmF5SG9sZGVyMi5sZW5ndGggIT0wKXtcbiAgICAgICAgaWYoYXJyYXlIb2xkZXIxWzBdIDwgYXJyYXlIb2xkZXIyWzBdKXtcbiAgICAgICAgICAgIG5ld0FycmF5LnB1c2goYXJyYXlIb2xkZXIxLnNoaWZ0KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgbmV3QXJyYXkucHVzaChhcnJheUhvbGRlcjIuc2hpZnQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgIGlmKGFycmF5SG9sZGVyMS5sZW5ndGggPT0gMCApe1xuICAgICAgICAgICByZXR1cm4gbmV3QXJyYXkuY29uY2F0KGFycmF5SG9sZGVyMik7XG4gICAgICAgIH1cbiAgICAgICAgIGlmKGFycmF5SG9sZGVyMi5sZW5ndGggPT0gMCl7XG4gICAgICAgICByZXR1cm4gbmV3QXJyYXkuY29uY2F0KGFycmF5SG9sZGVyMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbn1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZVNvcnQoYXJyYXkpe1xuICAgIGxldCBtZXJnZUFycmF5ID0gbWVyZ2VTb3J0KGFycmF5KTtcbiAgICBcbiAgbGV0IG5ld0FycmF5ID0gW107XG4gICAgZm9yKGxldCBpID0gMDtpIDw9IG1lcmdlQXJyYXkubGVuZ3RoO2krKyl7XG4gICAgICBpZihtZXJnZUFycmF5W2ldICE9IG1lcmdlQXJyYXlbaSsxXSlcbiAgICAgIG5ld0FycmF5LnB1c2gobWVyZ2VBcnJheVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdBcnJheTtcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVEdXBsaWNhdGVTb3J0O1xuIiwiXG5cbmNvbnN0IG5vZGUgPSAoKSA9PiB7XG4gIGxldCBkYXRhID0gbnVsbDtcbiAgbGV0IGxlZnQgPSBudWxsO1xuICBsZXQgcmlnaHQgPSBudWxsOyBcblxuICByZXR1cm4ge2RhdGEsbGVmdCxyaWdodH07XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbm9kZTsiLCJpbXBvcnQgbm9kZSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IGZpeGVkQXJyYXkgZnJvbSAnLi9tZXJnZVNvcnQnO1xuXG5cbmNvbnN0IHRyZWUgPSAoYXJyYXkpID0+IHtcbiAgY29uc3QgcHJvY2Vzc2VkQXJyYXkgPSBmaXhlZEFycmF5KGFycmF5KTtcbiAgY29uc29sZS5sb2cocHJvY2Vzc2VkQXJyYXkpO1xuICBsZXQgcm9vdCA9IGJ1aWxkVHJlZShwcm9jZXNzZWRBcnJheSk7XG4gIGNvbnNvbGUubG9nKHJvb3QpO1xuXG4gIGZ1bmN0aW9uIGJ1aWxkVHJlZShhcnJheSl7XG4gICAgaWYoYXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBub2RlSXRlbSA9IG5vZGUoKTtcbiAgICBub2RlSXRlbS5kYXRhID0gYXJyYXlbTWF0aC5yb3VuZChhcnJheS5sZW5ndGgvMi0wLjQ5KV07XG4gICAgIG5vZGVJdGVtLmxlZnQgPSBidWlsZFRyZWUoYXJyYXkuc2xpY2UoMCxhcnJheS5sZW5ndGgvMikpO1xuICAgICBub2RlSXRlbS5yaWdodCA9IGJ1aWxkVHJlZShhcnJheS5zbGljZShhcnJheS5sZW5ndGgvMisxKSk7XG4gICAgIHJldHVybiAgbm9kZUl0ZW07XG4gICAgXG4gIH1cbiAgZnVuY3Rpb24gZ2V0VHJlZSgpe1xuICAgIHJldHVybiByb290O1xuICB9XG5cbiAgY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gJycsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCApIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilIIgICAnIDogJyAgICAnfWAsIGZhbHNlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gJ+KUlOKUgOKUgCAnIDogJ+KUjOKUgOKUgCAnfSR7bm9kZS5kYXRhfWApO1xuICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwgKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICcgICAgJyA6ICfilIIgICAnfWAsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGluc2VydE5vZGUgPSAodmFsdWUsY3VycmVudE5vZGUgPSByb290KSA9PntcbiAgICBpZiAoIXZhbHVlICYmIHZhbHVlICE9IDApIHJldHVybiA7XG4gICAgY29uc3QgbmV3Tm9kZSA9IG5vZGUoKTtcbiAgICBuZXdOb2RlLmRhdGEgPSB2YWx1ZTtcbiAgICBsZXQgcG9pbnRlck5vZGUgPSBjdXJyZW50Tm9kZTtcblxuICAgIGlmKHBvaW50ZXJOb2RlID09IG51bGwpe1xuICAgICAgcmV0dXJuIG5ld05vZGU7XG4gICAgfVxuICAvLyBpZih2YWx1ZSA8IHBvaW50ZXJOb2RlLmRhdGEgJiYgcG9pbnRlck5vZGUubGVmdCA9PSBudWxsKVxuICAvLyAgICAgcmV0dXJuIHBvaW50ZXJOb2RlLmxlZnQgPSBuZXdOb2RlO1xuICAvLyBpZiAodmFsdWUgPiBwb2ludGVyTm9kZS5kYXRhICYmIHBvaW50ZXJOb2RlLnJpZ2h0ID09IG51bGwpXG4gIC8vICAgICByZXR1cm4gcG9pbnRlck5vZGUucmlnaHQgPSBuZXdOb2RlO1xuXG4gIGlmKHBvaW50ZXJOb2RlLmRhdGEgPT0gdmFsdWUpIHJldHVybiBuZXdOb2RlO1xuIFxuICBlbHNlIGlmKHZhbHVlIDwgcG9pbnRlck5vZGUuZGF0YSl7XG4gICAgcG9pbnRlck5vZGUubGVmdCA9IGluc2VydE5vZGUodmFsdWUscG9pbnRlck5vZGUubGVmdClcbiAgfVxuICBlbHNlIFxuICBwb2ludGVyTm9kZS5yaWdodCA9ICBpbnNlcnROb2RlKHZhbHVlLHBvaW50ZXJOb2RlLnJpZ2h0KTtcblxuICAgcmV0dXJuIHBvaW50ZXJOb2RlO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlV2l0aFR3b0NoaWxkKGN1cnJlbnROb2RlKXtcbiAgICBsZXQgbmV4dE5vZGUgPSBjdXJyZW50Tm9kZS5yaWdodCBcbiAgICBsZXQgcHJldmlvdXNOb2RlO1xuICAgIHdoaWxlKG5leHROb2RlLmxlZnQgIT0gbnVsbCl7XG4gICAgICBwcmV2aW91c05vZGUgPSBuZXh0Tm9kZTtcbiAgICAgIG5leHROb2RlID0gbmV4dE5vZGUubGVmdDtcbiAgICB9XG4gICAgcHJldmlvdXNOb2RlLmxlZnQgPSBudWxsO1xuICAgIGlmKG5leHROb2RlLnJpZ2h0ICE9IG51bGwpXG4gICAgcHJldmlvdXNOb2RlLmxlZnQgPSBuZXh0Tm9kZS5yaWdodDtcbiAgICByZXR1cm4gbmV4dE5vZGUuZGF0YTtcbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZU5vZGUgPSAodmFsdWUsY3VycmVudE5vZGUgPSByb290KSA9PntcbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gO1xuICAgIGNvbnN0IG5ld05vZGUgPSBub2RlKCk7XG4gICAgaWYoY3VycmVudE5vZGUgPT0gbnVsbCl7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgICBpZihjdXJyZW50Tm9kZS5kYXRhID09IHZhbHVlKXtcbiAgICAgICAgaWYoY3VycmVudE5vZGUubGVmdCA9PSBudWxsICYmIGN1cnJlbnROb2RlLnJpZ2h0ID09IG51bGwgKXtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAgICBlbHNlIGlmKGN1cnJlbnROb2RlLmxlZnQgPT0gbnVsbCB8fCBjdXJyZW50Tm9kZS5yaWdodCA9PSBudWxsKXsgIC8vb25lIGNoaWxkXG4gICAgICAgICAgICAgIGlmKGN1cnJlbnROb2RlLmxlZnQgIT0gIG51bGwpe1xuICAgICAgICAgICAgICAgIG5ld05vZGUuZGF0YSA9IGN1cnJlbnROb2RlLmxlZnQuZGF0YTtcbiAgICAgICAgICAgICAgICBuZXdOb2RlLmxlZnQgPSBjdXJyZW50Tm9kZS5sZWZ0LmxlZnQ7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZS5yaWdodCA9IGN1cnJlbnROb2RlLmxlZnQucmlnaHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZihjdXJyZW50Tm9kZS5yaWdodCAhPSAgbnVsbCkge1xuICAgICAgICAgICAgICAgIG5ld05vZGUuZGF0YSA9IGN1cnJlbnROb2RlLnJpZ2h0LmRhdGE7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZS5sZWZ0ID0gY3VycmVudE5vZGUucmlnaHQubGVmdDtcbiAgICAgICAgICAgICAgICBuZXdOb2RlLnJpZ2h0ID0gY3VycmVudE5vZGUucmlnaHQucmlnaHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ld05vZGU7XG4gICAgICB9ZWxzZXsgIC8vdHdvIGNoaWxkXG4gICAgICAgIGN1cnJlbnROb2RlLmRhdGEgPSAgZGVsZXRlV2l0aFR3b0NoaWxkKGN1cnJlbnROb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYodmFsdWUgPCBjdXJyZW50Tm9kZS5kYXRhKVxuICAgICAgY3VycmVudE5vZGUubGVmdCA9ICBkZWxldGVOb2RlKHZhbHVlLGN1cnJlbnROb2RlLmxlZnQpO1xuICAgICBpZih2YWx1ZSA+IGN1cnJlbnROb2RlLmRhdGEgKVxuICAgICBjdXJyZW50Tm9kZS5yaWdodCA9ICBkZWxldGVOb2RlKHZhbHVlLGN1cnJlbnROb2RlLnJpZ2h0KTtcbiAgICBcbiAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gIH1cbiAgXG4gIC8vIGNvbnN0IGxldmVsT3JkZXIgPSAocXVldWVBcnJheSA9IFtyb290XSkgPT57XG4gIC8vICAgbGV0IG9yZGVyQXJyYXkgPSBbXTtcbiAgLy8gICBpZihub2RlID09IG51bGwpIHJldHVybiBbXTtcbiAgLy8gaWYocXVldWVBcnJheS5sZW5ndGggPT0gMCkgcmV0dXJuIG9yZGVyQXJyYXk7XG5cbiAgLy8gICBsZXQgc2xpY2VkID0gcXVldWVBcnJheS5zcGxpY2UoMCwxKTtcbiAgLy8gICAgIG9yZGVyQXJyYXkucHVzaChzbGljZWRbMF0uZGF0YSk7XG4gIC8vICAgICBpZihzbGljZWRbMF0ubGVmdCAhPSBudWxsKXtcbiAgLy8gICAgICAgcXVldWVBcnJheS5wdXNoKHNsaWNlZFswXS5sZWZ0KTsgXG4gIC8vICAgICB9XG4gIC8vICAgICBpZihzbGljZWRbMF0ucmlnaHQgIT0gbnVsbCl7XG4gIC8vICAgcXVldWVBcnJheS5wdXNoKHNsaWNlZFswXS5yaWdodCk7XG4gIC8vICAgICB9XG4gIC8vIHJldHVybiBvcmRlckFycmF5LmNvbmNhdChsZXZlbE9yZGVyKHF1ZXVlQXJyYXkpKTtcbiAgLy8gfVxuICBmdW5jdGlvbiBsZXZlbE9yZGVyKG5vZGUgPSByb290LCBjYWxsYmFjayl7XG4gICAgbGV0IHF1ZXVlQXJyYXkgPSBbXTtcbiAgICBpZihub2RlID09IG51bGwpIHJldHVybiBbXTtcbiAgICBsZXQgb3JkZXJBcnJheSA9IFtdO1xuICAgIHF1ZXVlQXJyYXkucHVzaChub2RlKTtcblxuICAgIHdoaWxlKHF1ZXVlQXJyYXkubGVuZ3RoICE9IDApe1xuICAgICAgIGxldCBzbGljZWQgPSBxdWV1ZUFycmF5LnNwbGljZSgwLDEpO1xuICAgICAgIGlmKGNhbGxiYWNrKVxuICAgICAgICBvcmRlckFycmF5LnB1c2goY2FsbGJhY2soc2xpY2VkWzBdLmRhdGEpKTtcbiAgICAgICBlbHNlXG4gICAgICAgIG9yZGVyQXJyYXkucHVzaChzbGljZWRbMF0uZGF0YSk7XG4gICAgICAgaWYoc2xpY2VkWzBdLmxlZnQgIT0gbnVsbCl7XG4gICAgICAgIHF1ZXVlQXJyYXkucHVzaChzbGljZWRbMF0ubGVmdCk7IFxuICAgICAgfVxuICAgICAgaWYoc2xpY2VkWzBdLnJpZ2h0ICE9IG51bGwpe1xuICAgIHF1ZXVlQXJyYXkucHVzaChzbGljZWRbMF0ucmlnaHQpO1xuICAgICAgfVxuICAgIH1cbnJldHVybiBvcmRlckFycmF5O1xuICB9XG4gIFxuICBjb25zdCBpbk9yZGVyID0gKG5vZGUgPSByb290LCBhcnJheSA9IFtdLCBjYWxsYmFjaykgPT4ge1xuICAgICAgaWYobm9kZSA9PSBudWxsKVxuICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgaWYoY2FsbGJhY2spe1xuICAgICAgICBpbk9yZGVyKG5vZGUubGVmdCxhcnJheSxjYWxsYmFjayk7XG4gICAgICAgIGFycmF5LnB1c2goY2FsbGJhY2sobm9kZS5kYXRhKSk7XG4gICAgICAgIGluT3JkZXIobm9kZS5yaWdodCxhcnJheSxjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBsZXQgaG9sZGVyID0gIGluT3JkZXIobm9kZS5sZWZ0LGFycmF5KTtcbiAgICAgICAgY29uc29sZS5sb2coaG9sZGVyKTtcbiAgICAgICAgYXJyYXkucHVzaChub2RlLmRhdGEpO1xuICAgICAgICAgaW5PcmRlcihub2RlLnJpZ2h0LGFycmF5KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcnJheTtcbiAgfVxuICAvLyBpbk9yZGVyKDgsIGFycmF5KVxuICAvLyAgIC0+IGluT3JkZXIoNCwgYXJyYXkpXG4gIC8vICAgICAgIC0+IGluT3JkZXIoMywgYXJyYXkpXG4gIC8vICAgICAgICAgICAtPiBpbk9yZGVyKDEsIGFycmF5KVxuICAvLyAgICAgICAgICAgICAgIC0+IGluT3JkZXIoMCwgYXJyYXkpIC0tPiByZXR1cm4gWzBdXG4gIC8vICAgICAgICAgICAgICAgICAgIC0+IGluT3JkZXIobnVsbCwgYXJyYXkpIC0tPiBudWxsXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICBcblxuXG4gIGNvbnN0IHByZU9yZGVyID0gKG5vZGUgPSByb290LCBhcnJheSA9IFtdLCBjYWxsYmFjaykgPT4ge1xuICAgIGlmKG5vZGUgPT0gbnVsbCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgIGFycmF5LnB1c2goY2FsbGJhY2sobm9kZS5kYXRhKSk7XG4gICAgICBwcmVPcmRlcihub2RlLmxlZnQsYXJyYXksY2FsbGJhY2spO1xuICAgICAgKChwcmVPcmRlcihub2RlLnJpZ2h0LGFycmF5LGNhbGxiYWNrKSkpO1xuICAgIH1cbiAgICBlbHNle1xuICAgIGFycmF5LnB1c2gobm9kZS5kYXRhKTtcbiAgICBwcmVPcmRlcihub2RlLmxlZnQsYXJyYXkpO1xuICAgICgocHJlT3JkZXIobm9kZS5yaWdodCxhcnJheSkpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgY29uc3QgIHBvc3RPcmRlciA9IChub2RlID0gcm9vdCwgYXJyYXkgPSBbXSwgY2FsbGJhY2spID0+IHtcbiAgICBpZihub2RlID09IG51bGwpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZihjYWxsYmFjayl7XG4gICAgICBwb3N0T3JkZXIobm9kZS5sZWZ0LGFycmF5LGNhbGxiYWNrKTtcbiAgICAgIHBvc3RPcmRlcihub2RlLnJpZ2h0LGFycmF5LGNhbGxiYWNrKTtcbiAgICAgIGFycmF5LnB1c2gobm9kZS5kYXRhKTtcbiAgICB9XG4gZWxzZXtcbiAgcG9zdE9yZGVyKG5vZGUubGVmdCxhcnJheSk7XG4gIHBvc3RPcmRlcihub2RlLnJpZ2h0LGFycmF5KTtcbiAgYXJyYXkucHVzaChub2RlLmRhdGEpO1xuIH1cblxuICAgIHJldHVybiBhcnJheTtcbiAgfVxuY29uc3QgaGVpZ2h0ID0gKG5vZGUgPSByb290LCBhcnJheSA9IFsxLDFdKSA9PiB7XG4gaWYgKG5vZGUgPT0gbnVsbCkgcmV0dXJuO1xuYXJyYXlbMF0rKztcbiAgaGVpZ2h0KG5vZGUubGVmdCxhcnJheSlcbmlmKG5vZGUucmlnaHQgIT0gbnVsbCl7XG4gIGFycmF5WzBdKys7XG4gIGlmKGFycmF5WzFdIDwgYXJyYXlbMF0pe1xuICAgIGFycmF5WzFdID0gYXJyYXlbMF1cbiAgIH1cbiAgYXJyYXlbMF0tLTtcbn1cbmFycmF5WzBdLS07XG4gIGhlaWdodChub2RlLnJpZ2h0LGFycmF5KTtcblxuICBpZihhcnJheVsxXSA8IGFycmF5WzBdKXtcbiAgICBhcnJheVsxXSA9IGFycmF5WzBdXG4gICB9XG4gICBcbnJldHVybiBhcnJheVsxXTtcblxufVxuY29uc3QgZGVwdGggPSAoKSA9PiB7XG5cbn1cbmNvbnN0IGlzQmFsYW5jZWQgPSAoKSA9PntcblxufVxuIFxuY29uc3QgcmViYWxhbmNlID0gKCkgPT57XG4gIGxldCBhcnJheSA9IGluT3JkZXIoZ2V0VHJlZSgpLFtdKTtcbiAgICByb290ID0gIGJ1aWxkVHJlZShhcnJheSk7XG4gIFxufVxuXG5yZXR1cm4ge2dldFRyZWUsbGV2ZWxPcmRlciwgaGVpZ2h0LGRlcHRoLGlzQmFsYW5jZWQscmViYWxhbmNlLFxuICAgaW5PcmRlciwgcHJlT3JkZXIsIHBvc3RPcmRlcixwcmV0dHlQcmludCwgaW5zZXJ0Tm9kZSxkZWxldGVOb2RlfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0cmVlO1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0cmVlICBmcm9tICcuL3RyZWUnO1xuXG5sZXQgYXJyYXkgPSBbMSwgNywgNCwgMjMsIDgsIDksIDQsIDMsIDUsIDcsIDksIDY3LCA2MzQ1LCAzMjRdO1xuXG5sZXQgdHJlZU5vZGUgPSB0cmVlKGFycmF5KTtcblxudHJlZU5vZGUucHJldHR5UHJpbnQodHJlZU5vZGUuZ2V0VHJlZSgpKTtcblxudHJlZU5vZGUuaW5zZXJ0Tm9kZSgxMCk7XG50cmVlTm9kZS5pbnNlcnROb2RlKDEwKTtcbnRyZWVOb2RlLmluc2VydE5vZGUoNik7XG50cmVlTm9kZS5pbnNlcnROb2RlKDE0KTtcbnRyZWVOb2RlLmluc2VydE5vZGUoMCk7XG50cmVlTm9kZS5pbnNlcnROb2RlKDIpO1xudHJlZU5vZGUuaW5zZXJ0Tm9kZSgyNSk7XG50cmVlTm9kZS5pbnNlcnROb2RlKDM2KTtcblxuXG5cbmNvbnNvbGUubG9nKFwiTkVXIFRSRUUgSU5TRVJUXCIpO1xuXG50cmVlTm9kZS5wcmV0dHlQcmludCh0cmVlTm9kZS5nZXRUcmVlKCkpO1xuXG50cmVlTm9kZS5kZWxldGVOb2RlKDEyMyk7XG4vLyB0cmVlTm9kZS5kZWxldGVOb2RlKDkpO1xuXG5jb25zb2xlLmxvZyhcIk5FVyBUUkVFIERFTEVUZVwiKTtcblxudHJlZU5vZGUucHJldHR5UHJpbnQodHJlZU5vZGUuZ2V0VHJlZSgpKTtcblxuXG50cmVlTm9kZS5kZWxldGVOb2RlKCk7XG5cbmNvbnNvbGUubG9nKFwiTkVXIFRSRUVcIik7XG5cbnRyZWVOb2RlLnByZXR0eVByaW50KHRyZWVOb2RlLmdldFRyZWUoKSk7XG5cblxuY29uc29sZS5sb2codHJlZU5vZGUubGV2ZWxPcmRlcih0cmVlTm9kZS5nZXRUcmVlKCkpKTtcblxuXG5cbmNvbnNvbGUubG9nKHRyZWVOb2RlLmluT3JkZXIodHJlZU5vZGUuZ2V0VHJlZSgpLFtdLCggeD0+IHgrMikpKTtcblxuXG5jb25zb2xlLmxvZyh0cmVlTm9kZS5wcmVPcmRlcigpKTtcblxuY29uc29sZS5sb2codHJlZU5vZGUucG9zdE9yZGVyKCkpO1xuXG5cbmNvbnNvbGUubG9nKHRyZWVOb2RlLmhlaWdodCh0cmVlTm9kZS5nZXRUcmVlKCkpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=