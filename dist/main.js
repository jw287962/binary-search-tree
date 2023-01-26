/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mergeSort.js":
/*!**************************!*\
  !*** ./src/mergeSort.js ***!
  \**************************/
/***/ ((module) => {


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

  module.exports = removeDuplicateSort;


/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((module) => {



const node = () => {
  let data = null;
  let left = null;
  let right = null; 

  return {data,left,right};
}


module.exports = node;

/***/ }),

/***/ "./src/tree.js":
/*!*********************!*\
  !*** ./src/tree.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const  node = __webpack_require__(/*! ./node */ "./src/node.js");
const fixedArray = __webpack_require__(/*! ./mergeSort */ "./src/mergeSort.js");


const tree = (array) => {
  let root = buildTree(fixedArray(array));

  function buildTree(array){
    if(array.length === 0) return null;
    const nodeItem = node();
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
    const newNode = node();
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
    const newNode = node();
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
  

 /*
 * @param: tree - Node
 * @param: callback (optional) - Function
 *
 * @returns: void | Array<number>
*/
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
        return array;

      if(callback){
      inOrder(node.left,array,callback);
        array.push(callback(node.data));
        inOrder(node.right,array,callback);
      }
      else{
        let holder =  inOrder(node.left,array);
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
  //                   -> inOrder(null, array) --> []
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

const isBalanced = (node = root) =>{
  let isBalance = true;
  let heightMax = height(root);

  if (node == null) return isBalance;
  let compareHeight;

  isBalance = isBalanced(node.left,isBalance);
  
  if(node.left == null && node.right == null){
     compareHeight = depth(node)+1;

    if(heightMax-compareHeight >1 || compareHeight - heightMax >1) {
      isBalance = false;
    return isBalance;
    } 
  }

if(isBalance != false)
  isBalance = isBalanced(node.right);

    return isBalance;
}
 
const rebalance = () =>{
  let array = inOrder(getTree());
    root =  buildTree(array);
}

return {getTree,levelOrder, height,depth,isBalanced,rebalance,
   inOrder, preOrder, postOrder,prettyPrint, insertNode,deleteNode}
}

module.exports = tree;


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree */ "./src/tree.js");
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tree__WEBPACK_IMPORTED_MODULE_0__);


let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let treeNode = _tree__WEBPACK_IMPORTED_MODULE_0___default()(array);

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

console.log(treeNode.depth(treeNode.getTree()),"depth");

console.log(treeNode.isBalanced(treeNode.getTree()),"Balance");

if(!treeNode.isBalanced(treeNode.getTree))
treeNode.rebalance();

treeNode.prettyPrint(treeNode.getTree());

console.log(treeNode.isBalanced(treeNode.getTree()),"Balance");

function randomArray(num){
  let array = [];
  let i = 0
  while(i <= num){
    array.push(Math.random()*100)
i++;
  }

  return array;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7OztBQUdBOzs7Ozs7Ozs7O0FDWEEsY0FBYyxtQkFBTyxDQUFDLDZCQUFRO0FBQzlCLG1CQUFtQixtQkFBTyxDQUFDLHVDQUFhOzs7QUFHeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxPQUFPLEVBQUUseUJBQXlCO0FBQ25FO0FBQ0EsbUJBQW1CLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxVQUFVO0FBQ2pFO0FBQ0EsZ0NBQWdDLE9BQU8sRUFBRSx5QkFBeUI7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLE9BQU87QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7Ozs7Ozs7VUN2UkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjJCOztBQUUzQjs7QUFFQSxlQUFlLDRDQUFJOztBQUVuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7OztBQUdBOzs7O0FBSUE7OztBQUdBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS8uL3NyYy9tZXJnZVNvcnQuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlLy4vc3JjL25vZGUuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlLy4vc3JjL3RyZWUuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgZnVuY3Rpb24gbWVyZ2VTb3J0KGFycmF5KXtcbiAgICBsZXQgbmV3QXJyYXkgPSBbXTtcbiAgICAgIGlmKGFycmF5Lmxlbmd0aCA8IDIgKVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgIGxldCBhcnJheUhvbGRlcjEgPSAobWVyZ2VTb3J0KGFycmF5LnNsaWNlKDAsYXJyYXkubGVuZ3RoLzIpKSkgXG4gICAgIGxldCBhcnJheUhvbGRlcjIgPSAobWVyZ2VTb3J0KGFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aC8yKSkpO1xuICBpZihhcnJheUhvbGRlcjEubGVuZ3RoPj0xIHx8IGFycmF5SG9sZGVyMi5sZW5ndGg+PTEpe1xuICB3aGlsZShhcnJheUhvbGRlcjEubGVuZ3RoICE9IDAgJiYgYXJyYXlIb2xkZXIyLmxlbmd0aCAhPTApe1xuICAgICAgICBpZihhcnJheUhvbGRlcjFbMF0gPCBhcnJheUhvbGRlcjJbMF0pe1xuICAgICAgICAgICAgbmV3QXJyYXkucHVzaChhcnJheUhvbGRlcjEuc2hpZnQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBuZXdBcnJheS5wdXNoKGFycmF5SG9sZGVyMi5zaGlmdCgpKTtcbiAgICAgICAgfVxuICAgICAgICAgaWYoYXJyYXlIb2xkZXIxLmxlbmd0aCA9PSAwICl7XG4gICAgICAgICAgIHJldHVybiBuZXdBcnJheS5jb25jYXQoYXJyYXlIb2xkZXIyKTtcbiAgICAgICAgfVxuICAgICAgICAgaWYoYXJyYXlIb2xkZXIyLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgIHJldHVybiBuZXdBcnJheS5jb25jYXQoYXJyYXlIb2xkZXIxKTtcbiAgICAgICAgfVxuICAgICAgfVxufVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRHVwbGljYXRlU29ydChhcnJheSl7XG4gICAgbGV0IG1lcmdlQXJyYXkgPSBtZXJnZVNvcnQoYXJyYXkpO1xuICAgIFxuICBsZXQgbmV3QXJyYXkgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwO2kgPD0gbWVyZ2VBcnJheS5sZW5ndGg7aSsrKXtcbiAgICAgIGlmKG1lcmdlQXJyYXlbaV0gIT0gbWVyZ2VBcnJheVtpKzFdKVxuICAgICAgbmV3QXJyYXkucHVzaChtZXJnZUFycmF5W2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0FycmF5O1xuICB9XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSByZW1vdmVEdXBsaWNhdGVTb3J0O1xuIiwiXG5cbmNvbnN0IG5vZGUgPSAoKSA9PiB7XG4gIGxldCBkYXRhID0gbnVsbDtcbiAgbGV0IGxlZnQgPSBudWxsO1xuICBsZXQgcmlnaHQgPSBudWxsOyBcblxuICByZXR1cm4ge2RhdGEsbGVmdCxyaWdodH07XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBub2RlOyIsImNvbnN0ICBub2RlID0gcmVxdWlyZSgnLi9ub2RlJyk7XG5jb25zdCBmaXhlZEFycmF5ID0gcmVxdWlyZSgnLi9tZXJnZVNvcnQnKTtcblxuXG5jb25zdCB0cmVlID0gKGFycmF5KSA9PiB7XG4gIGxldCByb290ID0gYnVpbGRUcmVlKGZpeGVkQXJyYXkoYXJyYXkpKTtcblxuICBmdW5jdGlvbiBidWlsZFRyZWUoYXJyYXkpe1xuICAgIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3Qgbm9kZUl0ZW0gPSBub2RlKCk7XG4gICAgbm9kZUl0ZW0uZGF0YSA9IGFycmF5W01hdGgucm91bmQoYXJyYXkubGVuZ3RoLzItMC40OSldO1xuICAgICBub2RlSXRlbS5sZWZ0ID0gYnVpbGRUcmVlKGFycmF5LnNsaWNlKDAsYXJyYXkubGVuZ3RoLzIpKTtcbiAgICAgbm9kZUl0ZW0ucmlnaHQgPSBidWlsZFRyZWUoYXJyYXkuc2xpY2UoYXJyYXkubGVuZ3RoLzIrMSkpO1xuICAgICByZXR1cm4gIG5vZGVJdGVtO1xuICAgIFxuICB9XG4gIGZ1bmN0aW9uIGdldFRyZWUoKXtcbiAgICByZXR1cm4gcm9vdDtcbiAgfVxuXG4gIGNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9ICcnLCBpc0xlZnQgPSB0cnVlKSA9PiB7XG4gICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwgKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyAn4pSCICAgJyA6ICcgICAgJ31gLCBmYWxzZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilJTilIDilIAgJyA6ICfilIzilIDilIAgJ30ke25vZGUuZGF0YX1gKTtcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsICkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5sZWZ0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyAnICAgICcgOiAn4pSCICAgJ31gLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBpbnNlcnROb2RlID0gKHZhbHVlLGN1cnJlbnROb2RlID0gcm9vdCkgPT57XG4gICAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPSAwKSByZXR1cm4gO1xuICAgIGNvbnN0IG5ld05vZGUgPSBub2RlKCk7XG4gICAgbmV3Tm9kZS5kYXRhID0gdmFsdWU7XG4gICAgbGV0IHBvaW50ZXJOb2RlID0gY3VycmVudE5vZGU7XG5cbiAgICBpZihwb2ludGVyTm9kZSA9PSBudWxsKXtcbiAgICAgIHJldHVybiBuZXdOb2RlO1xuICAgIH1cbiAgLy8gaWYodmFsdWUgPCBwb2ludGVyTm9kZS5kYXRhICYmIHBvaW50ZXJOb2RlLmxlZnQgPT0gbnVsbClcbiAgLy8gICAgIHJldHVybiBwb2ludGVyTm9kZS5sZWZ0ID0gbmV3Tm9kZTtcbiAgLy8gaWYgKHZhbHVlID4gcG9pbnRlck5vZGUuZGF0YSAmJiBwb2ludGVyTm9kZS5yaWdodCA9PSBudWxsKVxuICAvLyAgICAgcmV0dXJuIHBvaW50ZXJOb2RlLnJpZ2h0ID0gbmV3Tm9kZTtcblxuICBpZihwb2ludGVyTm9kZS5kYXRhID09IHZhbHVlKSByZXR1cm4gbmV3Tm9kZTtcbiBcbiAgZWxzZSBpZih2YWx1ZSA8IHBvaW50ZXJOb2RlLmRhdGEpe1xuICAgIHBvaW50ZXJOb2RlLmxlZnQgPSBpbnNlcnROb2RlKHZhbHVlLHBvaW50ZXJOb2RlLmxlZnQpXG4gIH1cbiAgZWxzZSBcbiAgcG9pbnRlck5vZGUucmlnaHQgPSAgaW5zZXJ0Tm9kZSh2YWx1ZSxwb2ludGVyTm9kZS5yaWdodCk7XG5cbiAgIHJldHVybiBwb2ludGVyTm9kZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVdpdGhUd29DaGlsZChjdXJyZW50Tm9kZSl7XG4gICAgbGV0IG5leHROb2RlID0gY3VycmVudE5vZGUucmlnaHQgXG4gICAgbGV0IHByZXZpb3VzTm9kZTtcbiAgICB3aGlsZShuZXh0Tm9kZS5sZWZ0ICE9IG51bGwpe1xuICAgICAgcHJldmlvdXNOb2RlID0gbmV4dE5vZGU7XG4gICAgICBuZXh0Tm9kZSA9IG5leHROb2RlLmxlZnQ7XG4gICAgfVxuICAgIHByZXZpb3VzTm9kZS5sZWZ0ID0gbnVsbDtcbiAgICBpZihuZXh0Tm9kZS5yaWdodCAhPSBudWxsKVxuICAgIHByZXZpb3VzTm9kZS5sZWZ0ID0gbmV4dE5vZGUucmlnaHQ7XG4gICAgcmV0dXJuIG5leHROb2RlLmRhdGE7XG4gIH1cblxuICBjb25zdCBkZWxldGVOb2RlID0gKHZhbHVlLGN1cnJlbnROb2RlID0gcm9vdCkgPT57XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuIDtcbiAgICBjb25zdCBuZXdOb2RlID0gbm9kZSgpO1xuICAgIGlmKGN1cnJlbnROb2RlID09IG51bGwpe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgICAgaWYoY3VycmVudE5vZGUuZGF0YSA9PSB2YWx1ZSl7XG4gICAgICAgIGlmKGN1cnJlbnROb2RlLmxlZnQgPT0gbnVsbCAmJiBjdXJyZW50Tm9kZS5yaWdodCA9PSBudWxsICl7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgICAgZWxzZSBpZihjdXJyZW50Tm9kZS5sZWZ0ID09IG51bGwgfHwgY3VycmVudE5vZGUucmlnaHQgPT0gbnVsbCl7ICAvL29uZSBjaGlsZFxuICAgICAgICAgICAgICBpZihjdXJyZW50Tm9kZS5sZWZ0ICE9ICBudWxsKXtcbiAgICAgICAgICAgICAgICBuZXdOb2RlLmRhdGEgPSBjdXJyZW50Tm9kZS5sZWZ0LmRhdGE7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZS5sZWZ0ID0gY3VycmVudE5vZGUubGVmdC5sZWZ0O1xuICAgICAgICAgICAgICAgIG5ld05vZGUucmlnaHQgPSBjdXJyZW50Tm9kZS5sZWZ0LnJpZ2h0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYoY3VycmVudE5vZGUucmlnaHQgIT0gIG51bGwpIHtcbiAgICAgICAgICAgICAgICBuZXdOb2RlLmRhdGEgPSBjdXJyZW50Tm9kZS5yaWdodC5kYXRhO1xuICAgICAgICAgICAgICAgIG5ld05vZGUubGVmdCA9IGN1cnJlbnROb2RlLnJpZ2h0LmxlZnQ7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZS5yaWdodCA9IGN1cnJlbnROb2RlLnJpZ2h0LnJpZ2h0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBuZXdOb2RlO1xuICAgICAgfWVsc2V7ICAvL3R3byBjaGlsZFxuICAgICAgICBjdXJyZW50Tm9kZS5kYXRhID0gIGRlbGV0ZVdpdGhUd29DaGlsZChjdXJyZW50Tm9kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKHZhbHVlIDwgY3VycmVudE5vZGUuZGF0YSlcbiAgICAgIGN1cnJlbnROb2RlLmxlZnQgPSAgZGVsZXRlTm9kZSh2YWx1ZSxjdXJyZW50Tm9kZS5sZWZ0KTtcbiAgICAgaWYodmFsdWUgPiBjdXJyZW50Tm9kZS5kYXRhIClcbiAgICAgY3VycmVudE5vZGUucmlnaHQgPSAgZGVsZXRlTm9kZSh2YWx1ZSxjdXJyZW50Tm9kZS5yaWdodCk7XG4gICAgXG4gICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICB9XG4gIFxuICAvLyBjb25zdCBsZXZlbE9yZGVyID0gKHF1ZXVlQXJyYXkgPSBbcm9vdF0pID0+e1xuICAvLyAgIGxldCBvcmRlckFycmF5ID0gW107XG4gIC8vICAgaWYobm9kZSA9PSBudWxsKSByZXR1cm4gW107XG4gIC8vIGlmKHF1ZXVlQXJyYXkubGVuZ3RoID09IDApIHJldHVybiBvcmRlckFycmF5O1xuXG4gIC8vICAgbGV0IHNsaWNlZCA9IHF1ZXVlQXJyYXkuc3BsaWNlKDAsMSk7XG4gIC8vICAgICBvcmRlckFycmF5LnB1c2goc2xpY2VkWzBdLmRhdGEpO1xuICAvLyAgICAgaWYoc2xpY2VkWzBdLmxlZnQgIT0gbnVsbCl7XG4gIC8vICAgICAgIHF1ZXVlQXJyYXkucHVzaChzbGljZWRbMF0ubGVmdCk7IFxuICAvLyAgICAgfVxuICAvLyAgICAgaWYoc2xpY2VkWzBdLnJpZ2h0ICE9IG51bGwpe1xuICAvLyAgIHF1ZXVlQXJyYXkucHVzaChzbGljZWRbMF0ucmlnaHQpO1xuICAvLyAgICAgfVxuICAvLyByZXR1cm4gb3JkZXJBcnJheS5jb25jYXQobGV2ZWxPcmRlcihxdWV1ZUFycmF5KSk7XG4gIC8vIH1cbiAgXG5cbiAvKlxuICogQHBhcmFtOiB0cmVlIC0gTm9kZVxuICogQHBhcmFtOiBjYWxsYmFjayAob3B0aW9uYWwpIC0gRnVuY3Rpb25cbiAqXG4gKiBAcmV0dXJuczogdm9pZCB8IEFycmF5PG51bWJlcj5cbiovXG4gIGZ1bmN0aW9uIGxldmVsT3JkZXIobm9kZSA9IHJvb3QsIGNhbGxiYWNrKXtcbiAgICBsZXQgcXVldWVBcnJheSA9IFtdO1xuICAgIGlmKG5vZGUgPT0gbnVsbCkgcmV0dXJuIFtdO1xuICAgIGxldCBvcmRlckFycmF5ID0gW107XG4gICAgcXVldWVBcnJheS5wdXNoKG5vZGUpO1xuXG4gICAgd2hpbGUocXVldWVBcnJheS5sZW5ndGggIT0gMCl7XG4gICAgICAgbGV0IHNsaWNlZCA9IHF1ZXVlQXJyYXkuc3BsaWNlKDAsMSk7XG4gICAgICAgaWYoY2FsbGJhY2spXG4gICAgICAgIG9yZGVyQXJyYXkucHVzaChjYWxsYmFjayhzbGljZWRbMF0uZGF0YSkpO1xuICAgICAgIGVsc2VcbiAgICAgICAgb3JkZXJBcnJheS5wdXNoKHNsaWNlZFswXS5kYXRhKTtcbiAgICAgICBpZihzbGljZWRbMF0ubGVmdCAhPSBudWxsKXtcbiAgICAgICAgcXVldWVBcnJheS5wdXNoKHNsaWNlZFswXS5sZWZ0KTsgXG4gICAgICB9XG4gICAgICBpZihzbGljZWRbMF0ucmlnaHQgIT0gbnVsbCl7XG4gICAgcXVldWVBcnJheS5wdXNoKHNsaWNlZFswXS5yaWdodCk7XG4gICAgICB9XG4gICAgfVxucmV0dXJuIG9yZGVyQXJyYXk7XG4gIH1cbiAgXG4gIGNvbnN0IGluT3JkZXIgPSAobm9kZSA9IHJvb3QsIGFycmF5ID0gW10sIGNhbGxiYWNrKSA9PiB7XG4gICAgICBpZihub2RlID09IG51bGwpXG4gICAgICAgIHJldHVybiBhcnJheTtcblxuICAgICAgaWYoY2FsbGJhY2spe1xuICAgICAgaW5PcmRlcihub2RlLmxlZnQsYXJyYXksY2FsbGJhY2spO1xuICAgICAgICBhcnJheS5wdXNoKGNhbGxiYWNrKG5vZGUuZGF0YSkpO1xuICAgICAgICBpbk9yZGVyKG5vZGUucmlnaHQsYXJyYXksY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgbGV0IGhvbGRlciA9ICBpbk9yZGVyKG5vZGUubGVmdCxhcnJheSk7XG4gICAgICAgIGFycmF5LnB1c2gobm9kZS5kYXRhKTtcbiAgICAgICAgIGluT3JkZXIobm9kZS5yaWdodCxhcnJheSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJyYXk7XG4gIH1cbiAgLy8gaW5PcmRlcig4LCBhcnJheSlcbiAgLy8gICAtPiBpbk9yZGVyKDQsIGFycmF5KVxuICAvLyAgICAgICAtPiBpbk9yZGVyKDMsIGFycmF5KVxuICAvLyAgICAgICAgICAgLT4gaW5PcmRlcigxLCBhcnJheSlcbiAgLy8gICAgICAgICAgICAgICAtPiBpbk9yZGVyKDAsIGFycmF5KSAtLT4gcmV0dXJuIFswXVxuICAvLyAgICAgICAgICAgICAgICAgICAtPiBpbk9yZGVyKG51bGwsIGFycmF5KSAtLT4gW11cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgY29uc3QgcHJlT3JkZXIgPSAobm9kZSA9IHJvb3QsIGFycmF5ID0gW10sIGNhbGxiYWNrKSA9PiB7XG4gICAgaWYobm9kZSA9PSBudWxsKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYoY2FsbGJhY2spe1xuICAgICAgYXJyYXkucHVzaChjYWxsYmFjayhub2RlLmRhdGEpKTtcbiAgICAgIHByZU9yZGVyKG5vZGUubGVmdCxhcnJheSxjYWxsYmFjayk7XG4gICAgICAoKHByZU9yZGVyKG5vZGUucmlnaHQsYXJyYXksY2FsbGJhY2spKSk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgYXJyYXkucHVzaChub2RlLmRhdGEpO1xuICAgIHByZU9yZGVyKG5vZGUubGVmdCxhcnJheSk7XG4gICAgKChwcmVPcmRlcihub2RlLnJpZ2h0LGFycmF5KSkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICBjb25zdCAgcG9zdE9yZGVyID0gKG5vZGUgPSByb290LCBhcnJheSA9IFtdLCBjYWxsYmFjaykgPT4ge1xuICAgIGlmKG5vZGUgPT0gbnVsbCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgIHBvc3RPcmRlcihub2RlLmxlZnQsYXJyYXksY2FsbGJhY2spO1xuICAgICAgcG9zdE9yZGVyKG5vZGUucmlnaHQsYXJyYXksY2FsbGJhY2spO1xuICAgICAgYXJyYXkucHVzaChub2RlLmRhdGEpO1xuICAgIH1cbiBlbHNle1xuICBwb3N0T3JkZXIobm9kZS5sZWZ0LGFycmF5KTtcbiAgcG9zdE9yZGVyKG5vZGUucmlnaHQsYXJyYXkpO1xuICBhcnJheS5wdXNoKG5vZGUuZGF0YSk7XG4gfVxuXG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5jb25zdCBoZWlnaHQgPSAobm9kZSA9IHJvb3QsIGFycmF5ID0gWzEsMV0pID0+IHtcbiBpZiAobm9kZSA9PSBudWxsKSByZXR1cm47XG5hcnJheVswXSsrO1xuICBoZWlnaHQobm9kZS5sZWZ0LGFycmF5KVxuaWYobm9kZS5yaWdodCAhPSBudWxsKXtcbiAgYXJyYXlbMF0rKztcbiAgaWYoYXJyYXlbMV0gPCBhcnJheVswXSl7XG4gICAgYXJyYXlbMV0gPSBhcnJheVswXVxuICAgfVxuICBhcnJheVswXS0tO1xufVxuYXJyYXlbMF0tLTtcbiAgaGVpZ2h0KG5vZGUucmlnaHQsYXJyYXkpO1xuXG4gIGlmKGFycmF5WzFdIDwgYXJyYXlbMF0pe1xuICAgIGFycmF5WzFdID0gYXJyYXlbMF1cbiAgIH1cbiAgIFxucmV0dXJuIGFycmF5WzFdO1xuXG59XG5jb25zdCBkZXB0aCA9IChub2RlTG9vayA9IHJvb3QsbnVtID0gMCxub2RlID0gcm9vdCwpID0+IHtcbiAgaWYobm9kZSA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgaWYobm9kZUxvb2sgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gXG4gIGlmKG5vZGUuZGF0YSA9PSBub2RlTG9vay5kYXRhKVxuICByZXR1cm4gbnVtO1xuICBudW0rKztcbiAgaWYobm9kZUxvb2suZGF0YSA8IG5vZGUuZGF0YSl7XG4gIFxuICAgbnVtID0gIGRlcHRoKG5vZGVMb29rLG51bSxub2RlLmxlZnQpO1xuICB9XG4gIGlmKG5vZGVMb29rLmRhdGEgPiBub2RlLmRhdGEpe1xuICAgbnVtID0gIGRlcHRoKG5vZGVMb29rLG51bSxub2RlLnJpZ2h0KTtcbiAgfVxuXG5yZXR1cm4gbnVtO1xuXG59XG5cbmNvbnN0IGlzQmFsYW5jZWQgPSAobm9kZSA9IHJvb3QpID0+e1xuICBsZXQgaXNCYWxhbmNlID0gdHJ1ZTtcbiAgbGV0IGhlaWdodE1heCA9IGhlaWdodChyb290KTtcblxuICBpZiAobm9kZSA9PSBudWxsKSByZXR1cm4gaXNCYWxhbmNlO1xuICBsZXQgY29tcGFyZUhlaWdodDtcblxuICBpc0JhbGFuY2UgPSBpc0JhbGFuY2VkKG5vZGUubGVmdCxpc0JhbGFuY2UpO1xuICBcbiAgaWYobm9kZS5sZWZ0ID09IG51bGwgJiYgbm9kZS5yaWdodCA9PSBudWxsKXtcbiAgICAgY29tcGFyZUhlaWdodCA9IGRlcHRoKG5vZGUpKzE7XG5cbiAgICBpZihoZWlnaHRNYXgtY29tcGFyZUhlaWdodCA+MSB8fCBjb21wYXJlSGVpZ2h0IC0gaGVpZ2h0TWF4ID4xKSB7XG4gICAgICBpc0JhbGFuY2UgPSBmYWxzZTtcbiAgICByZXR1cm4gaXNCYWxhbmNlO1xuICAgIH0gXG4gIH1cblxuaWYoaXNCYWxhbmNlICE9IGZhbHNlKVxuICBpc0JhbGFuY2UgPSBpc0JhbGFuY2VkKG5vZGUucmlnaHQpO1xuXG4gICAgcmV0dXJuIGlzQmFsYW5jZTtcbn1cbiBcbmNvbnN0IHJlYmFsYW5jZSA9ICgpID0+e1xuICBsZXQgYXJyYXkgPSBpbk9yZGVyKGdldFRyZWUoKSk7XG4gICAgcm9vdCA9ICBidWlsZFRyZWUoYXJyYXkpO1xufVxuXG5yZXR1cm4ge2dldFRyZWUsbGV2ZWxPcmRlciwgaGVpZ2h0LGRlcHRoLGlzQmFsYW5jZWQscmViYWxhbmNlLFxuICAgaW5PcmRlciwgcHJlT3JkZXIsIHBvc3RPcmRlcixwcmV0dHlQcmludCwgaW5zZXJ0Tm9kZSxkZWxldGVOb2RlfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyZWU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHRyZWUgIGZyb20gJy4vdHJlZSc7XG5cbmxldCBhcnJheSA9IFsxLCA3LCA0LCAyMywgOCwgOSwgNCwgMywgNSwgNywgOSwgNjcsIDYzNDUsIDMyNF07XG5cbmxldCB0cmVlTm9kZSA9IHRyZWUoYXJyYXkpO1xuXG50cmVlTm9kZS5wcmV0dHlQcmludCh0cmVlTm9kZS5nZXRUcmVlKCkpO1xuXG50cmVlTm9kZS5pbnNlcnROb2RlKDEwKTtcbnRyZWVOb2RlLmluc2VydE5vZGUoMTApO1xudHJlZU5vZGUuaW5zZXJ0Tm9kZSg2KTtcbnRyZWVOb2RlLmluc2VydE5vZGUoMTQpO1xudHJlZU5vZGUuaW5zZXJ0Tm9kZSgwKTtcbnRyZWVOb2RlLmluc2VydE5vZGUoMik7XG50cmVlTm9kZS5pbnNlcnROb2RlKDI1KTtcbnRyZWVOb2RlLmluc2VydE5vZGUoMzYpO1xuXG5cblxuY29uc29sZS5sb2coXCJORVcgVFJFRSBJTlNFUlRcIik7XG5cbnRyZWVOb2RlLnByZXR0eVByaW50KHRyZWVOb2RlLmdldFRyZWUoKSk7XG5cbnRyZWVOb2RlLmRlbGV0ZU5vZGUoMTIzKTtcbi8vIHRyZWVOb2RlLmRlbGV0ZU5vZGUoOSk7XG5cbmNvbnNvbGUubG9nKFwiTkVXIFRSRUUgREVMRVRlXCIpO1xuXG50cmVlTm9kZS5wcmV0dHlQcmludCh0cmVlTm9kZS5nZXRUcmVlKCkpO1xuXG5cbnRyZWVOb2RlLmRlbGV0ZU5vZGUoKTtcblxuY29uc29sZS5sb2coXCJORVcgVFJFRVwiKTtcblxudHJlZU5vZGUucHJldHR5UHJpbnQodHJlZU5vZGUuZ2V0VHJlZSgpKTtcblxuXG5jb25zb2xlLmxvZyh0cmVlTm9kZS5sZXZlbE9yZGVyKHRyZWVOb2RlLmdldFRyZWUoKSkpO1xuXG5cblxuY29uc29sZS5sb2codHJlZU5vZGUuaW5PcmRlcih0cmVlTm9kZS5nZXRUcmVlKCksW10sKCB4PT4geCsyKSkpO1xuXG5cbmNvbnNvbGUubG9nKHRyZWVOb2RlLnByZU9yZGVyKCkpO1xuXG5jb25zb2xlLmxvZyh0cmVlTm9kZS5wb3N0T3JkZXIoKSk7XG5cblxuY29uc29sZS5sb2codHJlZU5vZGUuaGVpZ2h0KHRyZWVOb2RlLmdldFRyZWUoKSksIFwiSGVpZ2h0XCIpO1xuXG5jb25zb2xlLmxvZyh0cmVlTm9kZS5kZXB0aCh0cmVlTm9kZS5nZXRUcmVlKCkpLFwiZGVwdGhcIik7XG5cbmNvbnNvbGUubG9nKHRyZWVOb2RlLmlzQmFsYW5jZWQodHJlZU5vZGUuZ2V0VHJlZSgpKSxcIkJhbGFuY2VcIik7XG5cbmlmKCF0cmVlTm9kZS5pc0JhbGFuY2VkKHRyZWVOb2RlLmdldFRyZWUpKVxudHJlZU5vZGUucmViYWxhbmNlKCk7XG5cbnRyZWVOb2RlLnByZXR0eVByaW50KHRyZWVOb2RlLmdldFRyZWUoKSk7XG5cbmNvbnNvbGUubG9nKHRyZWVOb2RlLmlzQmFsYW5jZWQodHJlZU5vZGUuZ2V0VHJlZSgpKSxcIkJhbGFuY2VcIik7XG5cbmZ1bmN0aW9uIHJhbmRvbUFycmF5KG51bSl7XG4gIGxldCBhcnJheSA9IFtdO1xuICBsZXQgaSA9IDBcbiAgd2hpbGUoaSA8PSBudW0pe1xuICAgIGFycmF5LnB1c2goTWF0aC5yYW5kb20oKSoxMDApXG5pKys7XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9