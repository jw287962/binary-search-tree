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
const depth = (nodeLook = root,num = 0,node = root,) => {
  if(node == null) return null;
  if(nodeLook == null) return null;
 
  console.log(nodeLook.data)
  console.log(node.data)
  console.log(num,'count')
  if(node.data == nodeLook.data)
  return num;
  num++;
  if(nodeLook.data < node.data){
  
   num =  depth(nodeLook,num,node.left);
  }
 
  
  if(nodeLook.data > node.data){
    
   num =  depth(nodeLook,num,node.right);
  }

return num;

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


console.log(treeNode.height(treeNode.getTree()), "Height");

console.log(treeNode.depth(treeNode.getTree().right.left.right.right));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOzs7QUFHQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FDWE87QUFDVzs7O0FBR3JDO0FBQ0EseUJBQXlCLHNEQUFVO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLE9BQU8sRUFBRSx5QkFBeUI7QUFDbkU7QUFDQSxtQkFBbUIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQVU7QUFDakU7QUFDQSxnQ0FBZ0MsT0FBTyxFQUFFLHlCQUF5QjtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsaURBQUk7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLE9BQU87QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUTtBQUNSO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7OztVQ3JRcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04yQjs7QUFFM0I7O0FBRUEsZUFBZSxpREFBSTs7QUFFbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7OztBQUlBOzs7QUFHQTs7QUFFQTs7O0FBR0E7O0FBRUEsdUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvLi9zcmMvbWVyZ2VTb3J0LmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS8uL3NyYy9ub2RlLmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS8uL3NyYy90cmVlLmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgZnVuY3Rpb24gbWVyZ2VTb3J0KGFycmF5KXtcbiAgICBsZXQgbmV3QXJyYXkgPSBbXTtcbiAgICAgIGlmKGFycmF5Lmxlbmd0aCA8IDIgKVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgIGxldCBhcnJheUhvbGRlcjEgPSAobWVyZ2VTb3J0KGFycmF5LnNsaWNlKDAsYXJyYXkubGVuZ3RoLzIpKSkgXG4gICAgIGxldCBhcnJheUhvbGRlcjIgPSAobWVyZ2VTb3J0KGFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aC8yKSkpO1xuICBpZihhcnJheUhvbGRlcjEubGVuZ3RoPj0xIHx8IGFycmF5SG9sZGVyMi5sZW5ndGg+PTEpe1xuICB3aGlsZShhcnJheUhvbGRlcjEubGVuZ3RoICE9IDAgJiYgYXJyYXlIb2xkZXIyLmxlbmd0aCAhPTApe1xuICAgICAgICBpZihhcnJheUhvbGRlcjFbMF0gPCBhcnJheUhvbGRlcjJbMF0pe1xuICAgICAgICAgICAgbmV3QXJyYXkucHVzaChhcnJheUhvbGRlcjEuc2hpZnQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBuZXdBcnJheS5wdXNoKGFycmF5SG9sZGVyMi5zaGlmdCgpKTtcbiAgICAgICAgfVxuICAgICAgICAgaWYoYXJyYXlIb2xkZXIxLmxlbmd0aCA9PSAwICl7XG4gICAgICAgICAgIHJldHVybiBuZXdBcnJheS5jb25jYXQoYXJyYXlIb2xkZXIyKTtcbiAgICAgICAgfVxuICAgICAgICAgaWYoYXJyYXlIb2xkZXIyLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgIHJldHVybiBuZXdBcnJheS5jb25jYXQoYXJyYXlIb2xkZXIxKTtcbiAgICAgICAgfVxuICAgICAgfVxufVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRHVwbGljYXRlU29ydChhcnJheSl7XG4gICAgbGV0IG1lcmdlQXJyYXkgPSBtZXJnZVNvcnQoYXJyYXkpO1xuICAgIFxuICBsZXQgbmV3QXJyYXkgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwO2kgPD0gbWVyZ2VBcnJheS5sZW5ndGg7aSsrKXtcbiAgICAgIGlmKG1lcmdlQXJyYXlbaV0gIT0gbWVyZ2VBcnJheVtpKzFdKVxuICAgICAgbmV3QXJyYXkucHVzaChtZXJnZUFycmF5W2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0FycmF5O1xuICB9XG5cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZUR1cGxpY2F0ZVNvcnQ7XG4iLCJcblxuY29uc3Qgbm9kZSA9ICgpID0+IHtcbiAgbGV0IGRhdGEgPSBudWxsO1xuICBsZXQgbGVmdCA9IG51bGw7XG4gIGxldCByaWdodCA9IG51bGw7IFxuXG4gIHJldHVybiB7ZGF0YSxsZWZ0LHJpZ2h0fTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBub2RlOyIsImltcG9ydCBub2RlIGZyb20gJy4vbm9kZSc7XG5pbXBvcnQgZml4ZWRBcnJheSBmcm9tICcuL21lcmdlU29ydCc7XG5cblxuY29uc3QgdHJlZSA9IChhcnJheSkgPT4ge1xuICBjb25zdCBwcm9jZXNzZWRBcnJheSA9IGZpeGVkQXJyYXkoYXJyYXkpO1xuICBjb25zb2xlLmxvZyhwcm9jZXNzZWRBcnJheSk7XG4gIGxldCByb290ID0gYnVpbGRUcmVlKHByb2Nlc3NlZEFycmF5KTtcbiAgY29uc29sZS5sb2cocm9vdCk7XG5cbiAgZnVuY3Rpb24gYnVpbGRUcmVlKGFycmF5KXtcbiAgICBpZihhcnJheS5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIGNvbnN0IG5vZGVJdGVtID0gbm9kZSgpO1xuICAgIG5vZGVJdGVtLmRhdGEgPSBhcnJheVtNYXRoLnJvdW5kKGFycmF5Lmxlbmd0aC8yLTAuNDkpXTtcbiAgICAgbm9kZUl0ZW0ubGVmdCA9IGJ1aWxkVHJlZShhcnJheS5zbGljZSgwLGFycmF5Lmxlbmd0aC8yKSk7XG4gICAgIG5vZGVJdGVtLnJpZ2h0ID0gYnVpbGRUcmVlKGFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aC8yKzEpKTtcbiAgICAgcmV0dXJuICBub2RlSXRlbTtcbiAgICBcbiAgfVxuICBmdW5jdGlvbiBnZXRUcmVlKCl7XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH1cblxuICBjb25zdCBwcmV0dHlQcmludCA9IChub2RlLCBwcmVmaXggPSAnJywgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsICkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gJ+KUgiAgICcgOiAnICAgICd9YCwgZmFsc2UpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyAn4pSU4pSA4pSAICcgOiAn4pSM4pSA4pSAICd9JHtub2RlLmRhdGF9YCk7XG4gICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCApIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gJyAgICAnIDogJ+KUgiAgICd9YCwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaW5zZXJ0Tm9kZSA9ICh2YWx1ZSxjdXJyZW50Tm9kZSA9IHJvb3QpID0+e1xuICAgIGlmICghdmFsdWUgJiYgdmFsdWUgIT0gMCkgcmV0dXJuIDtcbiAgICBjb25zdCBuZXdOb2RlID0gbm9kZSgpO1xuICAgIG5ld05vZGUuZGF0YSA9IHZhbHVlO1xuICAgIGxldCBwb2ludGVyTm9kZSA9IGN1cnJlbnROb2RlO1xuXG4gICAgaWYocG9pbnRlck5vZGUgPT0gbnVsbCl7XG4gICAgICByZXR1cm4gbmV3Tm9kZTtcbiAgICB9XG4gIC8vIGlmKHZhbHVlIDwgcG9pbnRlck5vZGUuZGF0YSAmJiBwb2ludGVyTm9kZS5sZWZ0ID09IG51bGwpXG4gIC8vICAgICByZXR1cm4gcG9pbnRlck5vZGUubGVmdCA9IG5ld05vZGU7XG4gIC8vIGlmICh2YWx1ZSA+IHBvaW50ZXJOb2RlLmRhdGEgJiYgcG9pbnRlck5vZGUucmlnaHQgPT0gbnVsbClcbiAgLy8gICAgIHJldHVybiBwb2ludGVyTm9kZS5yaWdodCA9IG5ld05vZGU7XG5cbiAgaWYocG9pbnRlck5vZGUuZGF0YSA9PSB2YWx1ZSkgcmV0dXJuIG5ld05vZGU7XG4gXG4gIGVsc2UgaWYodmFsdWUgPCBwb2ludGVyTm9kZS5kYXRhKXtcbiAgICBwb2ludGVyTm9kZS5sZWZ0ID0gaW5zZXJ0Tm9kZSh2YWx1ZSxwb2ludGVyTm9kZS5sZWZ0KVxuICB9XG4gIGVsc2UgXG4gIHBvaW50ZXJOb2RlLnJpZ2h0ID0gIGluc2VydE5vZGUodmFsdWUscG9pbnRlck5vZGUucmlnaHQpO1xuXG4gICByZXR1cm4gcG9pbnRlck5vZGU7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVXaXRoVHdvQ2hpbGQoY3VycmVudE5vZGUpe1xuICAgIGxldCBuZXh0Tm9kZSA9IGN1cnJlbnROb2RlLnJpZ2h0IFxuICAgIGxldCBwcmV2aW91c05vZGU7XG4gICAgd2hpbGUobmV4dE5vZGUubGVmdCAhPSBudWxsKXtcbiAgICAgIHByZXZpb3VzTm9kZSA9IG5leHROb2RlO1xuICAgICAgbmV4dE5vZGUgPSBuZXh0Tm9kZS5sZWZ0O1xuICAgIH1cbiAgICBwcmV2aW91c05vZGUubGVmdCA9IG51bGw7XG4gICAgaWYobmV4dE5vZGUucmlnaHQgIT0gbnVsbClcbiAgICBwcmV2aW91c05vZGUubGVmdCA9IG5leHROb2RlLnJpZ2h0O1xuICAgIHJldHVybiBuZXh0Tm9kZS5kYXRhO1xuICB9XG5cbiAgY29uc3QgZGVsZXRlTm9kZSA9ICh2YWx1ZSxjdXJyZW50Tm9kZSA9IHJvb3QpID0+e1xuICAgIGlmICghdmFsdWUpIHJldHVybiA7XG4gICAgY29uc3QgbmV3Tm9kZSA9IG5vZGUoKTtcbiAgICBpZihjdXJyZW50Tm9kZSA9PSBudWxsKXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAgIGlmKGN1cnJlbnROb2RlLmRhdGEgPT0gdmFsdWUpe1xuICAgICAgICBpZihjdXJyZW50Tm9kZS5sZWZ0ID09IG51bGwgJiYgY3VycmVudE5vZGUucmlnaHQgPT0gbnVsbCApe1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgICAgIGVsc2UgaWYoY3VycmVudE5vZGUubGVmdCA9PSBudWxsIHx8IGN1cnJlbnROb2RlLnJpZ2h0ID09IG51bGwpeyAgLy9vbmUgY2hpbGRcbiAgICAgICAgICAgICAgaWYoY3VycmVudE5vZGUubGVmdCAhPSAgbnVsbCl7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZS5kYXRhID0gY3VycmVudE5vZGUubGVmdC5kYXRhO1xuICAgICAgICAgICAgICAgIG5ld05vZGUubGVmdCA9IGN1cnJlbnROb2RlLmxlZnQubGVmdDtcbiAgICAgICAgICAgICAgICBuZXdOb2RlLnJpZ2h0ID0gY3VycmVudE5vZGUubGVmdC5yaWdodDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmKGN1cnJlbnROb2RlLnJpZ2h0ICE9ICBudWxsKSB7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZS5kYXRhID0gY3VycmVudE5vZGUucmlnaHQuZGF0YTtcbiAgICAgICAgICAgICAgICBuZXdOb2RlLmxlZnQgPSBjdXJyZW50Tm9kZS5yaWdodC5sZWZ0O1xuICAgICAgICAgICAgICAgIG5ld05vZGUucmlnaHQgPSBjdXJyZW50Tm9kZS5yaWdodC5yaWdodDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3Tm9kZTtcbiAgICAgIH1lbHNleyAgLy90d28gY2hpbGRcbiAgICAgICAgY3VycmVudE5vZGUuZGF0YSA9ICBkZWxldGVXaXRoVHdvQ2hpbGQoY3VycmVudE5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZih2YWx1ZSA8IGN1cnJlbnROb2RlLmRhdGEpXG4gICAgICBjdXJyZW50Tm9kZS5sZWZ0ID0gIGRlbGV0ZU5vZGUodmFsdWUsY3VycmVudE5vZGUubGVmdCk7XG4gICAgIGlmKHZhbHVlID4gY3VycmVudE5vZGUuZGF0YSApXG4gICAgIGN1cnJlbnROb2RlLnJpZ2h0ID0gIGRlbGV0ZU5vZGUodmFsdWUsY3VycmVudE5vZGUucmlnaHQpO1xuICAgIFxuICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgfVxuICBcbiAgLy8gY29uc3QgbGV2ZWxPcmRlciA9IChxdWV1ZUFycmF5ID0gW3Jvb3RdKSA9PntcbiAgLy8gICBsZXQgb3JkZXJBcnJheSA9IFtdO1xuICAvLyAgIGlmKG5vZGUgPT0gbnVsbCkgcmV0dXJuIFtdO1xuICAvLyBpZihxdWV1ZUFycmF5Lmxlbmd0aCA9PSAwKSByZXR1cm4gb3JkZXJBcnJheTtcblxuICAvLyAgIGxldCBzbGljZWQgPSBxdWV1ZUFycmF5LnNwbGljZSgwLDEpO1xuICAvLyAgICAgb3JkZXJBcnJheS5wdXNoKHNsaWNlZFswXS5kYXRhKTtcbiAgLy8gICAgIGlmKHNsaWNlZFswXS5sZWZ0ICE9IG51bGwpe1xuICAvLyAgICAgICBxdWV1ZUFycmF5LnB1c2goc2xpY2VkWzBdLmxlZnQpOyBcbiAgLy8gICAgIH1cbiAgLy8gICAgIGlmKHNsaWNlZFswXS5yaWdodCAhPSBudWxsKXtcbiAgLy8gICBxdWV1ZUFycmF5LnB1c2goc2xpY2VkWzBdLnJpZ2h0KTtcbiAgLy8gICAgIH1cbiAgLy8gcmV0dXJuIG9yZGVyQXJyYXkuY29uY2F0KGxldmVsT3JkZXIocXVldWVBcnJheSkpO1xuICAvLyB9XG4gIGZ1bmN0aW9uIGxldmVsT3JkZXIobm9kZSA9IHJvb3QsIGNhbGxiYWNrKXtcbiAgICBsZXQgcXVldWVBcnJheSA9IFtdO1xuICAgIGlmKG5vZGUgPT0gbnVsbCkgcmV0dXJuIFtdO1xuICAgIGxldCBvcmRlckFycmF5ID0gW107XG4gICAgcXVldWVBcnJheS5wdXNoKG5vZGUpO1xuXG4gICAgd2hpbGUocXVldWVBcnJheS5sZW5ndGggIT0gMCl7XG4gICAgICAgbGV0IHNsaWNlZCA9IHF1ZXVlQXJyYXkuc3BsaWNlKDAsMSk7XG4gICAgICAgaWYoY2FsbGJhY2spXG4gICAgICAgIG9yZGVyQXJyYXkucHVzaChjYWxsYmFjayhzbGljZWRbMF0uZGF0YSkpO1xuICAgICAgIGVsc2VcbiAgICAgICAgb3JkZXJBcnJheS5wdXNoKHNsaWNlZFswXS5kYXRhKTtcbiAgICAgICBpZihzbGljZWRbMF0ubGVmdCAhPSBudWxsKXtcbiAgICAgICAgcXVldWVBcnJheS5wdXNoKHNsaWNlZFswXS5sZWZ0KTsgXG4gICAgICB9XG4gICAgICBpZihzbGljZWRbMF0ucmlnaHQgIT0gbnVsbCl7XG4gICAgcXVldWVBcnJheS5wdXNoKHNsaWNlZFswXS5yaWdodCk7XG4gICAgICB9XG4gICAgfVxucmV0dXJuIG9yZGVyQXJyYXk7XG4gIH1cbiAgXG4gIGNvbnN0IGluT3JkZXIgPSAobm9kZSA9IHJvb3QsIGFycmF5ID0gW10sIGNhbGxiYWNrKSA9PiB7XG4gICAgICBpZihub2RlID09IG51bGwpXG4gICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgICBpZihjYWxsYmFjayl7XG4gICAgICAgIGluT3JkZXIobm9kZS5sZWZ0LGFycmF5LGNhbGxiYWNrKTtcbiAgICAgICAgYXJyYXkucHVzaChjYWxsYmFjayhub2RlLmRhdGEpKTtcbiAgICAgICAgaW5PcmRlcihub2RlLnJpZ2h0LGFycmF5LGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGxldCBob2xkZXIgPSAgaW5PcmRlcihub2RlLmxlZnQsYXJyYXkpO1xuICAgICAgICBjb25zb2xlLmxvZyhob2xkZXIpO1xuICAgICAgICBhcnJheS5wdXNoKG5vZGUuZGF0YSk7XG4gICAgICAgICBpbk9yZGVyKG5vZGUucmlnaHQsYXJyYXkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFycmF5O1xuICB9XG4gIC8vIGluT3JkZXIoOCwgYXJyYXkpXG4gIC8vICAgLT4gaW5PcmRlcig0LCBhcnJheSlcbiAgLy8gICAgICAgLT4gaW5PcmRlcigzLCBhcnJheSlcbiAgLy8gICAgICAgICAgIC0+IGluT3JkZXIoMSwgYXJyYXkpXG4gIC8vICAgICAgICAgICAgICAgLT4gaW5PcmRlcigwLCBhcnJheSkgLS0+IHJldHVybiBbMF1cbiAgLy8gICAgICAgICAgICAgICAgICAgLT4gaW5PcmRlcihudWxsLCBhcnJheSkgLS0+IG51bGxcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgY29uc3QgcHJlT3JkZXIgPSAobm9kZSA9IHJvb3QsIGFycmF5ID0gW10sIGNhbGxiYWNrKSA9PiB7XG4gICAgaWYobm9kZSA9PSBudWxsKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYoY2FsbGJhY2spe1xuICAgICAgYXJyYXkucHVzaChjYWxsYmFjayhub2RlLmRhdGEpKTtcbiAgICAgIHByZU9yZGVyKG5vZGUubGVmdCxhcnJheSxjYWxsYmFjayk7XG4gICAgICAoKHByZU9yZGVyKG5vZGUucmlnaHQsYXJyYXksY2FsbGJhY2spKSk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgYXJyYXkucHVzaChub2RlLmRhdGEpO1xuICAgIHByZU9yZGVyKG5vZGUubGVmdCxhcnJheSk7XG4gICAgKChwcmVPcmRlcihub2RlLnJpZ2h0LGFycmF5KSkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICBjb25zdCAgcG9zdE9yZGVyID0gKG5vZGUgPSByb290LCBhcnJheSA9IFtdLCBjYWxsYmFjaykgPT4ge1xuICAgIGlmKG5vZGUgPT0gbnVsbCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgIHBvc3RPcmRlcihub2RlLmxlZnQsYXJyYXksY2FsbGJhY2spO1xuICAgICAgcG9zdE9yZGVyKG5vZGUucmlnaHQsYXJyYXksY2FsbGJhY2spO1xuICAgICAgYXJyYXkucHVzaChub2RlLmRhdGEpO1xuICAgIH1cbiBlbHNle1xuICBwb3N0T3JkZXIobm9kZS5sZWZ0LGFycmF5KTtcbiAgcG9zdE9yZGVyKG5vZGUucmlnaHQsYXJyYXkpO1xuICBhcnJheS5wdXNoKG5vZGUuZGF0YSk7XG4gfVxuXG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5jb25zdCBoZWlnaHQgPSAobm9kZSA9IHJvb3QsIGFycmF5ID0gWzEsMV0pID0+IHtcbiBpZiAobm9kZSA9PSBudWxsKSByZXR1cm47XG5hcnJheVswXSsrO1xuICBoZWlnaHQobm9kZS5sZWZ0LGFycmF5KVxuaWYobm9kZS5yaWdodCAhPSBudWxsKXtcbiAgYXJyYXlbMF0rKztcbiAgaWYoYXJyYXlbMV0gPCBhcnJheVswXSl7XG4gICAgYXJyYXlbMV0gPSBhcnJheVswXVxuICAgfVxuICBhcnJheVswXS0tO1xufVxuYXJyYXlbMF0tLTtcbiAgaGVpZ2h0KG5vZGUucmlnaHQsYXJyYXkpO1xuXG4gIGlmKGFycmF5WzFdIDwgYXJyYXlbMF0pe1xuICAgIGFycmF5WzFdID0gYXJyYXlbMF1cbiAgIH1cbiAgIFxucmV0dXJuIGFycmF5WzFdO1xuXG59XG5jb25zdCBkZXB0aCA9IChub2RlTG9vayA9IHJvb3QsbnVtID0gMCxub2RlID0gcm9vdCwpID0+IHtcbiAgaWYobm9kZSA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgaWYobm9kZUxvb2sgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gXG4gIGNvbnNvbGUubG9nKG5vZGVMb29rLmRhdGEpXG4gIGNvbnNvbGUubG9nKG5vZGUuZGF0YSlcbiAgY29uc29sZS5sb2cobnVtLCdjb3VudCcpXG4gIGlmKG5vZGUuZGF0YSA9PSBub2RlTG9vay5kYXRhKVxuICByZXR1cm4gbnVtO1xuICBudW0rKztcbiAgaWYobm9kZUxvb2suZGF0YSA8IG5vZGUuZGF0YSl7XG4gIFxuICAgbnVtID0gIGRlcHRoKG5vZGVMb29rLG51bSxub2RlLmxlZnQpO1xuICB9XG4gXG4gIFxuICBpZihub2RlTG9vay5kYXRhID4gbm9kZS5kYXRhKXtcbiAgICBcbiAgIG51bSA9ICBkZXB0aChub2RlTG9vayxudW0sbm9kZS5yaWdodCk7XG4gIH1cblxucmV0dXJuIG51bTtcblxufVxuY29uc3QgaXNCYWxhbmNlZCA9ICgpID0+e1xuXG59XG4gXG5jb25zdCByZWJhbGFuY2UgPSAoKSA9PntcbiAgbGV0IGFycmF5ID0gaW5PcmRlcihnZXRUcmVlKCksW10pO1xuICAgIHJvb3QgPSAgYnVpbGRUcmVlKGFycmF5KTtcbiAgXG59XG5cbnJldHVybiB7Z2V0VHJlZSxsZXZlbE9yZGVyLCBoZWlnaHQsZGVwdGgsaXNCYWxhbmNlZCxyZWJhbGFuY2UsXG4gICBpbk9yZGVyLCBwcmVPcmRlciwgcG9zdE9yZGVyLHByZXR0eVByaW50LCBpbnNlcnROb2RlLGRlbGV0ZU5vZGV9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRyZWU7XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHRyZWUgIGZyb20gJy4vdHJlZSc7XG5cbmxldCBhcnJheSA9IFsxLCA3LCA0LCAyMywgOCwgOSwgNCwgMywgNSwgNywgOSwgNjcsIDYzNDUsIDMyNF07XG5cbmxldCB0cmVlTm9kZSA9IHRyZWUoYXJyYXkpO1xuXG50cmVlTm9kZS5wcmV0dHlQcmludCh0cmVlTm9kZS5nZXRUcmVlKCkpO1xuXG50cmVlTm9kZS5pbnNlcnROb2RlKDEwKTtcbnRyZWVOb2RlLmluc2VydE5vZGUoMTApO1xudHJlZU5vZGUuaW5zZXJ0Tm9kZSg2KTtcbnRyZWVOb2RlLmluc2VydE5vZGUoMTQpO1xudHJlZU5vZGUuaW5zZXJ0Tm9kZSgwKTtcbnRyZWVOb2RlLmluc2VydE5vZGUoMik7XG50cmVlTm9kZS5pbnNlcnROb2RlKDI1KTtcbnRyZWVOb2RlLmluc2VydE5vZGUoMzYpO1xuXG5cblxuY29uc29sZS5sb2coXCJORVcgVFJFRSBJTlNFUlRcIik7XG5cbnRyZWVOb2RlLnByZXR0eVByaW50KHRyZWVOb2RlLmdldFRyZWUoKSk7XG5cbnRyZWVOb2RlLmRlbGV0ZU5vZGUoMTIzKTtcbi8vIHRyZWVOb2RlLmRlbGV0ZU5vZGUoOSk7XG5cbmNvbnNvbGUubG9nKFwiTkVXIFRSRUUgREVMRVRlXCIpO1xuXG50cmVlTm9kZS5wcmV0dHlQcmludCh0cmVlTm9kZS5nZXRUcmVlKCkpO1xuXG5cbnRyZWVOb2RlLmRlbGV0ZU5vZGUoKTtcblxuY29uc29sZS5sb2coXCJORVcgVFJFRVwiKTtcblxudHJlZU5vZGUucHJldHR5UHJpbnQodHJlZU5vZGUuZ2V0VHJlZSgpKTtcblxuXG5jb25zb2xlLmxvZyh0cmVlTm9kZS5sZXZlbE9yZGVyKHRyZWVOb2RlLmdldFRyZWUoKSkpO1xuXG5cblxuY29uc29sZS5sb2codHJlZU5vZGUuaW5PcmRlcih0cmVlTm9kZS5nZXRUcmVlKCksW10sKCB4PT4geCsyKSkpO1xuXG5cbmNvbnNvbGUubG9nKHRyZWVOb2RlLnByZU9yZGVyKCkpO1xuXG5jb25zb2xlLmxvZyh0cmVlTm9kZS5wb3N0T3JkZXIoKSk7XG5cblxuY29uc29sZS5sb2codHJlZU5vZGUuaGVpZ2h0KHRyZWVOb2RlLmdldFRyZWUoKSksIFwiSGVpZ2h0XCIpO1xuXG5jb25zb2xlLmxvZyh0cmVlTm9kZS5kZXB0aCh0cmVlTm9kZS5nZXRUcmVlKCkucmlnaHQubGVmdC5yaWdodC5yaWdodCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==