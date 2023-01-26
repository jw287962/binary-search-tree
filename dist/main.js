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
        return;
    
      // console.log(node)
      if(callback){
        inOrder(node.left,array,callback);
        array.push(callback(node.data));
      inOrder(node.right,array,callback);
      }
      else{
        inOrder(node.left,array);
        array.push(node.data);
      inOrder(node.right,array);
      }
      // console.log(array);
      return array;
  }
  // inOrder(8, array)
  //   -> inOrder(4, array)
  //       -> inOrder(3, array)
  //           -> inOrder(1, array)
  //               -> inOrder(0, array) ... 
  //                   -> inOrder(null, array)
  //                       null, []


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


console.log(treeNode.levelOrder(treeNode.getTree()));



console.log(treeNode.inOrder(treeNode.getTree(),[],( x=> x+2)));


console.log(treeNode.preOrder());

console.log(treeNode.postOrder());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7OztBQUlBOzs7QUFHQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS8uL3NyYy9tZXJnZVNvcnQuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlLy4vc3JjL25vZGUuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlLy4vc3JjL3RyZWUuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICBmdW5jdGlvbiBtZXJnZVNvcnQoYXJyYXkpe1xuICAgIGxldCBuZXdBcnJheSA9IFtdO1xuICAgICAgaWYoYXJyYXkubGVuZ3RoIDwgMiApXG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgbGV0IGFycmF5SG9sZGVyMSA9IChtZXJnZVNvcnQoYXJyYXkuc2xpY2UoMCxhcnJheS5sZW5ndGgvMikpKSBcbiAgICAgbGV0IGFycmF5SG9sZGVyMiA9IChtZXJnZVNvcnQoYXJyYXkuc2xpY2UoYXJyYXkubGVuZ3RoLzIpKSk7XG4gIGlmKGFycmF5SG9sZGVyMS5sZW5ndGg+PTEgfHwgYXJyYXlIb2xkZXIyLmxlbmd0aD49MSl7XG4gIHdoaWxlKGFycmF5SG9sZGVyMS5sZW5ndGggIT0gMCAmJiBhcnJheUhvbGRlcjIubGVuZ3RoICE9MCl7XG4gICAgICAgIGlmKGFycmF5SG9sZGVyMVswXSA8IGFycmF5SG9sZGVyMlswXSl7XG4gICAgICAgICAgICBuZXdBcnJheS5wdXNoKGFycmF5SG9sZGVyMS5zaGlmdCgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIG5ld0FycmF5LnB1c2goYXJyYXlIb2xkZXIyLnNoaWZ0KCkpO1xuICAgICAgICB9XG4gICAgICAgICBpZihhcnJheUhvbGRlcjEubGVuZ3RoID09IDAgKXtcbiAgICAgICAgICAgcmV0dXJuIG5ld0FycmF5LmNvbmNhdChhcnJheUhvbGRlcjIpO1xuICAgICAgICB9XG4gICAgICAgICBpZihhcnJheUhvbGRlcjIubGVuZ3RoID09IDApe1xuICAgICAgICAgcmV0dXJuIG5ld0FycmF5LmNvbmNhdChhcnJheUhvbGRlcjEpO1xuICAgICAgICB9XG4gICAgICB9XG59XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVTb3J0KGFycmF5KXtcbiAgICBsZXQgbWVyZ2VBcnJheSA9IG1lcmdlU29ydChhcnJheSk7XG4gICAgXG4gIGxldCBuZXdBcnJheSA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7aSA8PSBtZXJnZUFycmF5Lmxlbmd0aDtpKyspe1xuICAgICAgaWYobWVyZ2VBcnJheVtpXSAhPSBtZXJnZUFycmF5W2krMV0pXG4gICAgICBuZXdBcnJheS5wdXNoKG1lcmdlQXJyYXlbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3QXJyYXk7XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlRHVwbGljYXRlU29ydDtcbiIsIlxuXG5jb25zdCBub2RlID0gKCkgPT4ge1xuICBsZXQgZGF0YSA9IG51bGw7XG4gIGxldCBsZWZ0ID0gbnVsbDtcbiAgbGV0IHJpZ2h0ID0gbnVsbDsgXG5cbiAgcmV0dXJuIHtkYXRhLGxlZnQscmlnaHR9O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG5vZGU7IiwiaW1wb3J0IG5vZGUgZnJvbSAnLi9ub2RlJztcbmltcG9ydCBmaXhlZEFycmF5IGZyb20gJy4vbWVyZ2VTb3J0JztcblxuXG5jb25zdCB0cmVlID0gKGFycmF5KSA9PiB7XG4gIGNvbnN0IHByb2Nlc3NlZEFycmF5ID0gZml4ZWRBcnJheShhcnJheSk7XG4gIGNvbnNvbGUubG9nKHByb2Nlc3NlZEFycmF5KTtcbiAgbGV0IHJvb3QgPSBidWlsZFRyZWUocHJvY2Vzc2VkQXJyYXkpO1xuICBjb25zb2xlLmxvZyhyb290KTtcblxuICBmdW5jdGlvbiBidWlsZFRyZWUoYXJyYXkpe1xuICAgIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3Qgbm9kZUl0ZW0gPSBub2RlKCk7XG4gICAgbm9kZUl0ZW0uZGF0YSA9IGFycmF5W01hdGgucm91bmQoYXJyYXkubGVuZ3RoLzItMC40OSldO1xuICAgICBub2RlSXRlbS5sZWZ0ID0gYnVpbGRUcmVlKGFycmF5LnNsaWNlKDAsYXJyYXkubGVuZ3RoLzIpKTtcbiAgICAgbm9kZUl0ZW0ucmlnaHQgPSBidWlsZFRyZWUoYXJyYXkuc2xpY2UoYXJyYXkubGVuZ3RoLzIrMSkpO1xuICAgICByZXR1cm4gIG5vZGVJdGVtO1xuICAgIFxuICB9XG4gIGZ1bmN0aW9uIGdldFRyZWUoKXtcbiAgICByZXR1cm4gcm9vdDtcbiAgfVxuXG4gIGNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9ICcnLCBpc0xlZnQgPSB0cnVlKSA9PiB7XG4gICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwgKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyAn4pSCICAgJyA6ICcgICAgJ31gLCBmYWxzZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilJTilIDilIAgJyA6ICfilIzilIDilIAgJ30ke25vZGUuZGF0YX1gKTtcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsICkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5sZWZ0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyAnICAgICcgOiAn4pSCICAgJ31gLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBpbnNlcnROb2RlID0gKHZhbHVlLGN1cnJlbnROb2RlID0gcm9vdCkgPT57XG4gICAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPSAwKSByZXR1cm4gO1xuICAgIGNvbnN0IG5ld05vZGUgPSBub2RlKCk7XG4gICAgbmV3Tm9kZS5kYXRhID0gdmFsdWU7XG4gICAgbGV0IHBvaW50ZXJOb2RlID0gY3VycmVudE5vZGU7XG5cbiAgICBpZihwb2ludGVyTm9kZSA9PSBudWxsKXtcbiAgICAgIHJldHVybiBuZXdOb2RlO1xuICAgIH1cbiAgLy8gaWYodmFsdWUgPCBwb2ludGVyTm9kZS5kYXRhICYmIHBvaW50ZXJOb2RlLmxlZnQgPT0gbnVsbClcbiAgLy8gICAgIHJldHVybiBwb2ludGVyTm9kZS5sZWZ0ID0gbmV3Tm9kZTtcbiAgLy8gaWYgKHZhbHVlID4gcG9pbnRlck5vZGUuZGF0YSAmJiBwb2ludGVyTm9kZS5yaWdodCA9PSBudWxsKVxuICAvLyAgICAgcmV0dXJuIHBvaW50ZXJOb2RlLnJpZ2h0ID0gbmV3Tm9kZTtcblxuICBpZihwb2ludGVyTm9kZS5kYXRhID09IHZhbHVlKSByZXR1cm4gbmV3Tm9kZTtcbiBcbiAgZWxzZSBpZih2YWx1ZSA8IHBvaW50ZXJOb2RlLmRhdGEpe1xuICAgIHBvaW50ZXJOb2RlLmxlZnQgPSBpbnNlcnROb2RlKHZhbHVlLHBvaW50ZXJOb2RlLmxlZnQpXG4gIH1cbiAgZWxzZSBcbiAgcG9pbnRlck5vZGUucmlnaHQgPSAgaW5zZXJ0Tm9kZSh2YWx1ZSxwb2ludGVyTm9kZS5yaWdodCk7XG5cbiAgIHJldHVybiBwb2ludGVyTm9kZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVdpdGhUd29DaGlsZChjdXJyZW50Tm9kZSl7XG4gICAgbGV0IG5leHROb2RlID0gY3VycmVudE5vZGUucmlnaHQgXG4gICAgbGV0IHByZXZpb3VzTm9kZTtcbiAgICB3aGlsZShuZXh0Tm9kZS5sZWZ0ICE9IG51bGwpe1xuICAgICAgcHJldmlvdXNOb2RlID0gbmV4dE5vZGU7XG4gICAgICBuZXh0Tm9kZSA9IG5leHROb2RlLmxlZnQ7XG4gICAgfVxuICAgIHByZXZpb3VzTm9kZS5sZWZ0ID0gbnVsbDtcbiAgICBpZihuZXh0Tm9kZS5yaWdodCAhPSBudWxsKVxuICAgIHByZXZpb3VzTm9kZS5sZWZ0ID0gbmV4dE5vZGUucmlnaHQ7XG4gICAgcmV0dXJuIG5leHROb2RlLmRhdGE7XG4gIH1cblxuICBjb25zdCBkZWxldGVOb2RlID0gKHZhbHVlLGN1cnJlbnROb2RlID0gcm9vdCkgPT57XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuIDtcbiAgICBjb25zdCBuZXdOb2RlID0gbm9kZSgpO1xuICAgIGlmKGN1cnJlbnROb2RlID09IG51bGwpe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgICAgaWYoY3VycmVudE5vZGUuZGF0YSA9PSB2YWx1ZSl7XG4gICAgICAgIGlmKGN1cnJlbnROb2RlLmxlZnQgPT0gbnVsbCAmJiBjdXJyZW50Tm9kZS5yaWdodCA9PSBudWxsICl7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgICAgZWxzZSBpZihjdXJyZW50Tm9kZS5sZWZ0ID09IG51bGwgfHwgY3VycmVudE5vZGUucmlnaHQgPT0gbnVsbCl7ICAvL29uZSBjaGlsZFxuICAgICAgICAgICAgICBpZihjdXJyZW50Tm9kZS5sZWZ0ICE9ICBudWxsKXtcbiAgICAgICAgICAgICAgICBuZXdOb2RlLmRhdGEgPSBjdXJyZW50Tm9kZS5sZWZ0LmRhdGE7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZS5sZWZ0ID0gY3VycmVudE5vZGUubGVmdC5sZWZ0O1xuICAgICAgICAgICAgICAgIG5ld05vZGUucmlnaHQgPSBjdXJyZW50Tm9kZS5sZWZ0LnJpZ2h0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYoY3VycmVudE5vZGUucmlnaHQgIT0gIG51bGwpIHtcbiAgICAgICAgICAgICAgICBuZXdOb2RlLmRhdGEgPSBjdXJyZW50Tm9kZS5yaWdodC5kYXRhO1xuICAgICAgICAgICAgICAgIG5ld05vZGUubGVmdCA9IGN1cnJlbnROb2RlLnJpZ2h0LmxlZnQ7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZS5yaWdodCA9IGN1cnJlbnROb2RlLnJpZ2h0LnJpZ2h0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBuZXdOb2RlO1xuICAgICAgfWVsc2V7ICAvL3R3byBjaGlsZFxuICAgICAgICBjdXJyZW50Tm9kZS5kYXRhID0gIGRlbGV0ZVdpdGhUd29DaGlsZChjdXJyZW50Tm9kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKHZhbHVlIDwgY3VycmVudE5vZGUuZGF0YSlcbiAgICAgIGN1cnJlbnROb2RlLmxlZnQgPSAgZGVsZXRlTm9kZSh2YWx1ZSxjdXJyZW50Tm9kZS5sZWZ0KTtcbiAgICAgaWYodmFsdWUgPiBjdXJyZW50Tm9kZS5kYXRhIClcbiAgICAgY3VycmVudE5vZGUucmlnaHQgPSAgZGVsZXRlTm9kZSh2YWx1ZSxjdXJyZW50Tm9kZS5yaWdodCk7XG4gICAgXG4gICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICB9XG4gIFxuICAvLyBjb25zdCBsZXZlbE9yZGVyID0gKHF1ZXVlQXJyYXkgPSBbcm9vdF0pID0+e1xuICAvLyAgIGxldCBvcmRlckFycmF5ID0gW107XG4gIC8vICAgaWYobm9kZSA9PSBudWxsKSByZXR1cm4gW107XG4gIC8vIGlmKHF1ZXVlQXJyYXkubGVuZ3RoID09IDApIHJldHVybiBvcmRlckFycmF5O1xuXG4gIC8vICAgbGV0IHNsaWNlZCA9IHF1ZXVlQXJyYXkuc3BsaWNlKDAsMSk7XG4gIC8vICAgICBvcmRlckFycmF5LnB1c2goc2xpY2VkWzBdLmRhdGEpO1xuICAvLyAgICAgaWYoc2xpY2VkWzBdLmxlZnQgIT0gbnVsbCl7XG4gIC8vICAgICAgIHF1ZXVlQXJyYXkucHVzaChzbGljZWRbMF0ubGVmdCk7IFxuICAvLyAgICAgfVxuICAvLyAgICAgaWYoc2xpY2VkWzBdLnJpZ2h0ICE9IG51bGwpe1xuICAvLyAgIHF1ZXVlQXJyYXkucHVzaChzbGljZWRbMF0ucmlnaHQpO1xuICAvLyAgICAgfVxuICAvLyByZXR1cm4gb3JkZXJBcnJheS5jb25jYXQobGV2ZWxPcmRlcihxdWV1ZUFycmF5KSk7XG4gIC8vIH1cbiAgZnVuY3Rpb24gbGV2ZWxPcmRlcihub2RlID0gcm9vdCwgY2FsbGJhY2spe1xuICAgIGxldCBxdWV1ZUFycmF5ID0gW107XG4gICAgaWYobm9kZSA9PSBudWxsKSByZXR1cm4gW107XG4gICAgbGV0IG9yZGVyQXJyYXkgPSBbXTtcbiAgICBxdWV1ZUFycmF5LnB1c2gobm9kZSk7XG5cbiAgICB3aGlsZShxdWV1ZUFycmF5Lmxlbmd0aCAhPSAwKXtcbiAgICAgICBsZXQgc2xpY2VkID0gcXVldWVBcnJheS5zcGxpY2UoMCwxKTtcbiAgICAgICBpZihjYWxsYmFjaylcbiAgICAgICAgb3JkZXJBcnJheS5wdXNoKGNhbGxiYWNrKHNsaWNlZFswXS5kYXRhKSk7XG4gICAgICAgZWxzZVxuICAgICAgICBvcmRlckFycmF5LnB1c2goc2xpY2VkWzBdLmRhdGEpO1xuICAgICAgIGlmKHNsaWNlZFswXS5sZWZ0ICE9IG51bGwpe1xuICAgICAgICBxdWV1ZUFycmF5LnB1c2goc2xpY2VkWzBdLmxlZnQpOyBcbiAgICAgIH1cbiAgICAgIGlmKHNsaWNlZFswXS5yaWdodCAhPSBudWxsKXtcbiAgICBxdWV1ZUFycmF5LnB1c2goc2xpY2VkWzBdLnJpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG5yZXR1cm4gb3JkZXJBcnJheTtcbiAgfVxuICBcbiAgY29uc3QgaW5PcmRlciA9IChub2RlID0gcm9vdCwgYXJyYXkgPSBbXSwgY2FsbGJhY2spID0+IHtcbiAgICAgIGlmKG5vZGUgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuO1xuICAgIFxuICAgICAgLy8gY29uc29sZS5sb2cobm9kZSlcbiAgICAgIGlmKGNhbGxiYWNrKXtcbiAgICAgICAgaW5PcmRlcihub2RlLmxlZnQsYXJyYXksY2FsbGJhY2spO1xuICAgICAgICBhcnJheS5wdXNoKGNhbGxiYWNrKG5vZGUuZGF0YSkpO1xuICAgICAgaW5PcmRlcihub2RlLnJpZ2h0LGFycmF5LGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGluT3JkZXIobm9kZS5sZWZ0LGFycmF5KTtcbiAgICAgICAgYXJyYXkucHVzaChub2RlLmRhdGEpO1xuICAgICAgaW5PcmRlcihub2RlLnJpZ2h0LGFycmF5KTtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKGFycmF5KTtcbiAgICAgIHJldHVybiBhcnJheTtcbiAgfVxuICAvLyBpbk9yZGVyKDgsIGFycmF5KVxuICAvLyAgIC0+IGluT3JkZXIoNCwgYXJyYXkpXG4gIC8vICAgICAgIC0+IGluT3JkZXIoMywgYXJyYXkpXG4gIC8vICAgICAgICAgICAtPiBpbk9yZGVyKDEsIGFycmF5KVxuICAvLyAgICAgICAgICAgICAgIC0+IGluT3JkZXIoMCwgYXJyYXkpIC4uLiBcbiAgLy8gICAgICAgICAgICAgICAgICAgLT4gaW5PcmRlcihudWxsLCBhcnJheSlcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgIG51bGwsIFtdXG5cblxuICBjb25zdCBwcmVPcmRlciA9IChub2RlID0gcm9vdCwgYXJyYXkgPSBbXSwgY2FsbGJhY2spID0+IHtcbiAgICBpZihub2RlID09IG51bGwpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZihjYWxsYmFjayl7XG4gICAgICBhcnJheS5wdXNoKGNhbGxiYWNrKG5vZGUuZGF0YSkpO1xuICAgICAgcHJlT3JkZXIobm9kZS5sZWZ0LGFycmF5LGNhbGxiYWNrKTtcbiAgICAgICgocHJlT3JkZXIobm9kZS5yaWdodCxhcnJheSxjYWxsYmFjaykpKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICBhcnJheS5wdXNoKG5vZGUuZGF0YSk7XG4gICAgcHJlT3JkZXIobm9kZS5sZWZ0LGFycmF5KTtcbiAgICAoKHByZU9yZGVyKG5vZGUucmlnaHQsYXJyYXkpKSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIGNvbnN0ICBwb3N0T3JkZXIgPSAobm9kZSA9IHJvb3QsIGFycmF5ID0gW10sIGNhbGxiYWNrKSA9PiB7XG4gICAgaWYobm9kZSA9PSBudWxsKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYoY2FsbGJhY2spe1xuICAgICAgcG9zdE9yZGVyKG5vZGUubGVmdCxhcnJheSxjYWxsYmFjayk7XG4gICAgICBwb3N0T3JkZXIobm9kZS5yaWdodCxhcnJheSxjYWxsYmFjayk7XG4gICAgICBhcnJheS5wdXNoKG5vZGUuZGF0YSk7XG4gICAgfVxuIGVsc2V7XG4gIHBvc3RPcmRlcihub2RlLmxlZnQsYXJyYXkpO1xuICBwb3N0T3JkZXIobm9kZS5yaWdodCxhcnJheSk7XG4gIGFycmF5LnB1c2gobm9kZS5kYXRhKTtcbiB9XG5cbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuXG5yZXR1cm4ge2dldFRyZWUsbGV2ZWxPcmRlciwgaW5PcmRlciwgcHJlT3JkZXIsIHBvc3RPcmRlcixwcmV0dHlQcmludCwgaW5zZXJ0Tm9kZSxkZWxldGVOb2RlfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0cmVlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHRyZWUgIGZyb20gJy4vdHJlZSc7XG5cbmxldCBhcnJheSA9IFsxLCA3LCA0LCAyMywgOCwgOSwgNCwgMywgNSwgNywgOSwgNjcsIDYzNDUsIDMyNF07XG5cbmxldCB0cmVlTm9kZSA9IHRyZWUoYXJyYXkpO1xuXG50cmVlTm9kZS5wcmV0dHlQcmludCh0cmVlTm9kZS5nZXRUcmVlKCkpO1xuXG50cmVlTm9kZS5pbnNlcnROb2RlKDEwKTtcbnRyZWVOb2RlLmluc2VydE5vZGUoMTApO1xudHJlZU5vZGUuaW5zZXJ0Tm9kZSg2KTtcbnRyZWVOb2RlLmluc2VydE5vZGUoMTQpO1xudHJlZU5vZGUuaW5zZXJ0Tm9kZSgwKTtcbnRyZWVOb2RlLmluc2VydE5vZGUoMik7XG50cmVlTm9kZS5pbnNlcnROb2RlKDI1KTtcbnRyZWVOb2RlLmluc2VydE5vZGUoMzYpO1xuXG5cblxuY29uc29sZS5sb2coXCJORVcgVFJFRSBJTlNFUlRcIik7XG5cbnRyZWVOb2RlLnByZXR0eVByaW50KHRyZWVOb2RlLmdldFRyZWUoKSk7XG5cbnRyZWVOb2RlLmRlbGV0ZU5vZGUoMTIzKTtcbi8vIHRyZWVOb2RlLmRlbGV0ZU5vZGUoOSk7XG5cbmNvbnNvbGUubG9nKFwiTkVXIFRSRUUgREVMRVRlXCIpO1xuXG50cmVlTm9kZS5wcmV0dHlQcmludCh0cmVlTm9kZS5nZXRUcmVlKCkpO1xuXG5cbnRyZWVOb2RlLmRlbGV0ZU5vZGUoKTtcblxuY29uc29sZS5sb2coXCJORVcgVFJFRVwiKTtcblxudHJlZU5vZGUucHJldHR5UHJpbnQodHJlZU5vZGUuZ2V0VHJlZSgpKTtcblxuXG5jb25zb2xlLmxvZyh0cmVlTm9kZS5sZXZlbE9yZGVyKHRyZWVOb2RlLmdldFRyZWUoKSkpO1xuXG5cblxuY29uc29sZS5sb2codHJlZU5vZGUuaW5PcmRlcih0cmVlTm9kZS5nZXRUcmVlKCksW10sKCB4PT4geCsyKSkpO1xuXG5cbmNvbnNvbGUubG9nKHRyZWVOb2RlLnByZU9yZGVyKCkpO1xuXG5jb25zb2xlLmxvZyh0cmVlTm9kZS5wb3N0T3JkZXIoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=