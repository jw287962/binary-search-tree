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
  
  const inOrder = (node = root, array = []) => {
      if(node == null){
        return;
      }
      inOrder(node.left,array);
      // console.log(node.data);
      array.push(node.data);
      if(node.right != null){  
        return ((inOrder(node.right,array)));
      }
      return array;
  }

  const preOrder = (node = root, array = []) => {
    if(node == null){
      return;
    }
    array.push(node.data);

    preOrder(node.left,array);
    // console.log(node.data);
    if(node.right != null){  
      return ((preOrder(node.right,array)));
    }
    return array;
  }
  const  postOrder = (node = root, array = []) => {
    if(node == null){
      return;
    }

    postOrder(node.left,array);
 
      postOrder(node.right,array);
    array.push(node.data);

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



console.log(treeNode.inOrder());


console.log(treeNode.preOrder());

console.log(treeNode.postOrder());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlLy4vc3JjL21lcmdlU29ydC5qcyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvLi9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvLi9zcmMvdHJlZS5qcyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gIGZ1bmN0aW9uIG1lcmdlU29ydChhcnJheSl7XG4gICAgbGV0IG5ld0FycmF5ID0gW107XG4gICAgICBpZihhcnJheS5sZW5ndGggPCAyIClcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICBsZXQgYXJyYXlIb2xkZXIxID0gKG1lcmdlU29ydChhcnJheS5zbGljZSgwLGFycmF5Lmxlbmd0aC8yKSkpIFxuICAgICBsZXQgYXJyYXlIb2xkZXIyID0gKG1lcmdlU29ydChhcnJheS5zbGljZShhcnJheS5sZW5ndGgvMikpKTtcbiAgaWYoYXJyYXlIb2xkZXIxLmxlbmd0aD49MSB8fCBhcnJheUhvbGRlcjIubGVuZ3RoPj0xKXtcbiAgd2hpbGUoYXJyYXlIb2xkZXIxLmxlbmd0aCAhPSAwICYmIGFycmF5SG9sZGVyMi5sZW5ndGggIT0wKXtcbiAgICAgICAgaWYoYXJyYXlIb2xkZXIxWzBdIDwgYXJyYXlIb2xkZXIyWzBdKXtcbiAgICAgICAgICAgIG5ld0FycmF5LnB1c2goYXJyYXlIb2xkZXIxLnNoaWZ0KCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgbmV3QXJyYXkucHVzaChhcnJheUhvbGRlcjIuc2hpZnQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgIGlmKGFycmF5SG9sZGVyMS5sZW5ndGggPT0gMCApe1xuICAgICAgICAgICByZXR1cm4gbmV3QXJyYXkuY29uY2F0KGFycmF5SG9sZGVyMik7XG4gICAgICAgIH1cbiAgICAgICAgIGlmKGFycmF5SG9sZGVyMi5sZW5ndGggPT0gMCl7XG4gICAgICAgICByZXR1cm4gbmV3QXJyYXkuY29uY2F0KGFycmF5SG9sZGVyMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbn1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZVNvcnQoYXJyYXkpe1xuICAgIGxldCBtZXJnZUFycmF5ID0gbWVyZ2VTb3J0KGFycmF5KTtcbiAgICBcbiAgbGV0IG5ld0FycmF5ID0gW107XG4gICAgZm9yKGxldCBpID0gMDtpIDw9IG1lcmdlQXJyYXkubGVuZ3RoO2krKyl7XG4gICAgICBpZihtZXJnZUFycmF5W2ldICE9IG1lcmdlQXJyYXlbaSsxXSlcbiAgICAgIG5ld0FycmF5LnB1c2gobWVyZ2VBcnJheVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdBcnJheTtcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVEdXBsaWNhdGVTb3J0O1xuIiwiXG5cbmNvbnN0IG5vZGUgPSAoKSA9PiB7XG4gIGxldCBkYXRhID0gbnVsbDtcbiAgbGV0IGxlZnQgPSBudWxsO1xuICBsZXQgcmlnaHQgPSBudWxsOyBcblxuICByZXR1cm4ge2RhdGEsbGVmdCxyaWdodH07XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbm9kZTsiLCJpbXBvcnQgbm9kZSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IGZpeGVkQXJyYXkgZnJvbSAnLi9tZXJnZVNvcnQnO1xuXG5cbmNvbnN0IHRyZWUgPSAoYXJyYXkpID0+IHtcbiAgY29uc3QgcHJvY2Vzc2VkQXJyYXkgPSBmaXhlZEFycmF5KGFycmF5KTtcbiAgY29uc29sZS5sb2cocHJvY2Vzc2VkQXJyYXkpO1xuICBsZXQgcm9vdCA9IGJ1aWxkVHJlZShwcm9jZXNzZWRBcnJheSk7XG4gIGNvbnNvbGUubG9nKHJvb3QpO1xuXG4gIGZ1bmN0aW9uIGJ1aWxkVHJlZShhcnJheSl7XG4gICAgaWYoYXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBub2RlSXRlbSA9IG5vZGUoKTtcbiAgICBub2RlSXRlbS5kYXRhID0gYXJyYXlbTWF0aC5yb3VuZChhcnJheS5sZW5ndGgvMi0wLjQ5KV07XG4gICAgIG5vZGVJdGVtLmxlZnQgPSBidWlsZFRyZWUoYXJyYXkuc2xpY2UoMCxhcnJheS5sZW5ndGgvMikpO1xuICAgICBub2RlSXRlbS5yaWdodCA9IGJ1aWxkVHJlZShhcnJheS5zbGljZShhcnJheS5sZW5ndGgvMisxKSk7XG4gICAgIHJldHVybiAgbm9kZUl0ZW07XG4gICAgXG4gIH1cbiAgZnVuY3Rpb24gZ2V0VHJlZSgpe1xuICAgIHJldHVybiByb290O1xuICB9XG5cbiAgY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gJycsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCApIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilIIgICAnIDogJyAgICAnfWAsIGZhbHNlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gJ+KUlOKUgOKUgCAnIDogJ+KUjOKUgOKUgCAnfSR7bm9kZS5kYXRhfWApO1xuICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwgKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICcgICAgJyA6ICfilIIgICAnfWAsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGluc2VydE5vZGUgPSAodmFsdWUsY3VycmVudE5vZGUgPSByb290KSA9PntcbiAgICBpZiAoIXZhbHVlICYmIHZhbHVlICE9IDApIHJldHVybiA7XG4gICAgY29uc3QgbmV3Tm9kZSA9IG5vZGUoKTtcbiAgICBuZXdOb2RlLmRhdGEgPSB2YWx1ZTtcbiAgICBsZXQgcG9pbnRlck5vZGUgPSBjdXJyZW50Tm9kZTtcblxuICAgIGlmKHBvaW50ZXJOb2RlID09IG51bGwpe1xuICAgICAgcmV0dXJuIG5ld05vZGU7XG4gICAgfVxuICAvLyBpZih2YWx1ZSA8IHBvaW50ZXJOb2RlLmRhdGEgJiYgcG9pbnRlck5vZGUubGVmdCA9PSBudWxsKVxuICAvLyAgICAgcmV0dXJuIHBvaW50ZXJOb2RlLmxlZnQgPSBuZXdOb2RlO1xuICAvLyBpZiAodmFsdWUgPiBwb2ludGVyTm9kZS5kYXRhICYmIHBvaW50ZXJOb2RlLnJpZ2h0ID09IG51bGwpXG4gIC8vICAgICByZXR1cm4gcG9pbnRlck5vZGUucmlnaHQgPSBuZXdOb2RlO1xuXG4gIGlmKHBvaW50ZXJOb2RlLmRhdGEgPT0gdmFsdWUpIHJldHVybiBuZXdOb2RlO1xuIFxuICBlbHNlIGlmKHZhbHVlIDwgcG9pbnRlck5vZGUuZGF0YSl7XG4gICAgcG9pbnRlck5vZGUubGVmdCA9IGluc2VydE5vZGUodmFsdWUscG9pbnRlck5vZGUubGVmdClcbiAgfVxuICBlbHNlIFxuICBwb2ludGVyTm9kZS5yaWdodCA9ICBpbnNlcnROb2RlKHZhbHVlLHBvaW50ZXJOb2RlLnJpZ2h0KTtcblxuICAgcmV0dXJuIHBvaW50ZXJOb2RlO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlV2l0aFR3b0NoaWxkKGN1cnJlbnROb2RlKXtcbiAgICBsZXQgbmV4dE5vZGUgPSBjdXJyZW50Tm9kZS5yaWdodCBcbiAgICBsZXQgcHJldmlvdXNOb2RlO1xuICAgIHdoaWxlKG5leHROb2RlLmxlZnQgIT0gbnVsbCl7XG4gICAgICBwcmV2aW91c05vZGUgPSBuZXh0Tm9kZTtcbiAgICAgIG5leHROb2RlID0gbmV4dE5vZGUubGVmdDtcbiAgICB9XG4gICAgcHJldmlvdXNOb2RlLmxlZnQgPSBudWxsO1xuICAgIGlmKG5leHROb2RlLnJpZ2h0ICE9IG51bGwpXG4gICAgcHJldmlvdXNOb2RlLmxlZnQgPSBuZXh0Tm9kZS5yaWdodDtcbiAgICByZXR1cm4gbmV4dE5vZGUuZGF0YTtcbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZU5vZGUgPSAodmFsdWUsY3VycmVudE5vZGUgPSByb290KSA9PntcbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gO1xuICAgIGNvbnN0IG5ld05vZGUgPSBub2RlKCk7XG4gICAgaWYoY3VycmVudE5vZGUgPT0gbnVsbCl7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgICBpZihjdXJyZW50Tm9kZS5kYXRhID09IHZhbHVlKXtcbiAgICAgICAgaWYoY3VycmVudE5vZGUubGVmdCA9PSBudWxsICYmIGN1cnJlbnROb2RlLnJpZ2h0ID09IG51bGwgKXtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAgICBlbHNlIGlmKGN1cnJlbnROb2RlLmxlZnQgPT0gbnVsbCB8fCBjdXJyZW50Tm9kZS5yaWdodCA9PSBudWxsKXsgIC8vb25lIGNoaWxkXG4gICAgICAgICAgICAgIGlmKGN1cnJlbnROb2RlLmxlZnQgIT0gIG51bGwpe1xuICAgICAgICAgICAgICAgIG5ld05vZGUuZGF0YSA9IGN1cnJlbnROb2RlLmxlZnQuZGF0YTtcbiAgICAgICAgICAgICAgICBuZXdOb2RlLmxlZnQgPSBjdXJyZW50Tm9kZS5sZWZ0LmxlZnQ7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZS5yaWdodCA9IGN1cnJlbnROb2RlLmxlZnQucmlnaHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZihjdXJyZW50Tm9kZS5yaWdodCAhPSAgbnVsbCkge1xuICAgICAgICAgICAgICAgIG5ld05vZGUuZGF0YSA9IGN1cnJlbnROb2RlLnJpZ2h0LmRhdGE7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZS5sZWZ0ID0gY3VycmVudE5vZGUucmlnaHQubGVmdDtcbiAgICAgICAgICAgICAgICBuZXdOb2RlLnJpZ2h0ID0gY3VycmVudE5vZGUucmlnaHQucmlnaHQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ld05vZGU7XG4gICAgICB9ZWxzZXsgIC8vdHdvIGNoaWxkXG4gICAgICAgIGN1cnJlbnROb2RlLmRhdGEgPSAgZGVsZXRlV2l0aFR3b0NoaWxkKGN1cnJlbnROb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYodmFsdWUgPCBjdXJyZW50Tm9kZS5kYXRhKVxuICAgICAgY3VycmVudE5vZGUubGVmdCA9ICBkZWxldGVOb2RlKHZhbHVlLGN1cnJlbnROb2RlLmxlZnQpO1xuICAgICBpZih2YWx1ZSA+IGN1cnJlbnROb2RlLmRhdGEgKVxuICAgICBjdXJyZW50Tm9kZS5yaWdodCA9ICBkZWxldGVOb2RlKHZhbHVlLGN1cnJlbnROb2RlLnJpZ2h0KTtcbiAgICBcbiAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gIH1cbiAgXG4gIC8vIGNvbnN0IGxldmVsT3JkZXIgPSAocXVldWVBcnJheSA9IFtyb290XSkgPT57XG4gIC8vICAgbGV0IG9yZGVyQXJyYXkgPSBbXTtcbiAgLy8gICBpZihub2RlID09IG51bGwpIHJldHVybiBbXTtcbiAgLy8gaWYocXVldWVBcnJheS5sZW5ndGggPT0gMCkgcmV0dXJuIG9yZGVyQXJyYXk7XG5cbiAgLy8gICBsZXQgc2xpY2VkID0gcXVldWVBcnJheS5zcGxpY2UoMCwxKTtcbiAgLy8gICAgIG9yZGVyQXJyYXkucHVzaChzbGljZWRbMF0uZGF0YSk7XG4gIC8vICAgICBpZihzbGljZWRbMF0ubGVmdCAhPSBudWxsKXtcbiAgLy8gICAgICAgcXVldWVBcnJheS5wdXNoKHNsaWNlZFswXS5sZWZ0KTsgXG4gIC8vICAgICB9XG4gIC8vICAgICBpZihzbGljZWRbMF0ucmlnaHQgIT0gbnVsbCl7XG4gIC8vICAgcXVldWVBcnJheS5wdXNoKHNsaWNlZFswXS5yaWdodCk7XG4gIC8vICAgICB9XG4gIC8vIHJldHVybiBvcmRlckFycmF5LmNvbmNhdChsZXZlbE9yZGVyKHF1ZXVlQXJyYXkpKTtcbiAgLy8gfVxuICBmdW5jdGlvbiBsZXZlbE9yZGVyKG5vZGUgPSByb290LCBjYWxsYmFjayl7XG4gICAgbGV0IHF1ZXVlQXJyYXkgPSBbXTtcbiAgICBpZihub2RlID09IG51bGwpIHJldHVybiBbXTtcbiAgICBsZXQgb3JkZXJBcnJheSA9IFtdO1xuICAgIHF1ZXVlQXJyYXkucHVzaChub2RlKTtcblxuICAgIHdoaWxlKHF1ZXVlQXJyYXkubGVuZ3RoICE9IDApe1xuICAgICAgIGxldCBzbGljZWQgPSBxdWV1ZUFycmF5LnNwbGljZSgwLDEpO1xuICAgICAgIGlmKGNhbGxiYWNrKVxuICAgICAgICBvcmRlckFycmF5LnB1c2goY2FsbGJhY2soc2xpY2VkWzBdLmRhdGEpKTtcbiAgICAgICBcbiAgICAgICAgb3JkZXJBcnJheS5wdXNoKHNsaWNlZFswXS5kYXRhKTtcbiAgICAgICBpZihzbGljZWRbMF0ubGVmdCAhPSBudWxsKXtcbiAgICAgICAgcXVldWVBcnJheS5wdXNoKHNsaWNlZFswXS5sZWZ0KTsgXG4gICAgICB9XG4gICAgICBpZihzbGljZWRbMF0ucmlnaHQgIT0gbnVsbCl7XG4gICAgcXVldWVBcnJheS5wdXNoKHNsaWNlZFswXS5yaWdodCk7XG4gICAgICB9XG4gICAgfVxucmV0dXJuIG9yZGVyQXJyYXk7XG4gIH1cbiAgXG4gIGNvbnN0IGluT3JkZXIgPSAobm9kZSA9IHJvb3QsIGFycmF5ID0gW10pID0+IHtcbiAgICAgIGlmKG5vZGUgPT0gbnVsbCl7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGluT3JkZXIobm9kZS5sZWZ0LGFycmF5KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5vZGUuZGF0YSk7XG4gICAgICBhcnJheS5wdXNoKG5vZGUuZGF0YSk7XG4gICAgICBpZihub2RlLnJpZ2h0ICE9IG51bGwpeyAgXG4gICAgICAgIHJldHVybiAoKGluT3JkZXIobm9kZS5yaWdodCxhcnJheSkpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIGNvbnN0IHByZU9yZGVyID0gKG5vZGUgPSByb290LCBhcnJheSA9IFtdKSA9PiB7XG4gICAgaWYobm9kZSA9PSBudWxsKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXJyYXkucHVzaChub2RlLmRhdGEpO1xuXG4gICAgcHJlT3JkZXIobm9kZS5sZWZ0LGFycmF5KTtcbiAgICAvLyBjb25zb2xlLmxvZyhub2RlLmRhdGEpO1xuICAgIGlmKG5vZGUucmlnaHQgIT0gbnVsbCl7ICBcbiAgICAgIHJldHVybiAoKHByZU9yZGVyKG5vZGUucmlnaHQsYXJyYXkpKSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbiAgfVxuICBjb25zdCAgcG9zdE9yZGVyID0gKG5vZGUgPSByb290LCBhcnJheSA9IFtdKSA9PiB7XG4gICAgaWYobm9kZSA9PSBudWxsKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwb3N0T3JkZXIobm9kZS5sZWZ0LGFycmF5KTtcbiBcbiAgICAgIHBvc3RPcmRlcihub2RlLnJpZ2h0LGFycmF5KTtcbiAgICBhcnJheS5wdXNoKG5vZGUuZGF0YSk7XG5cbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuXG5yZXR1cm4ge2dldFRyZWUsbGV2ZWxPcmRlciwgaW5PcmRlciwgcHJlT3JkZXIsIHBvc3RPcmRlcixwcmV0dHlQcmludCwgaW5zZXJ0Tm9kZSxkZWxldGVOb2RlfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0cmVlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHRyZWUgIGZyb20gJy4vdHJlZSc7XG5cbmxldCBhcnJheSA9IFsxLCA3LCA0LCAyMywgOCwgOSwgNCwgMywgNSwgNywgOSwgNjcsIDYzNDUsIDMyNF07XG5cbmxldCB0cmVlTm9kZSA9IHRyZWUoYXJyYXkpO1xuXG50cmVlTm9kZS5wcmV0dHlQcmludCh0cmVlTm9kZS5nZXRUcmVlKCkpO1xuXG50cmVlTm9kZS5pbnNlcnROb2RlKDEwKTtcbnRyZWVOb2RlLmluc2VydE5vZGUoMTApO1xudHJlZU5vZGUuaW5zZXJ0Tm9kZSg2KTtcbnRyZWVOb2RlLmluc2VydE5vZGUoMTQpO1xudHJlZU5vZGUuaW5zZXJ0Tm9kZSgwKTtcbnRyZWVOb2RlLmluc2VydE5vZGUoMik7XG50cmVlTm9kZS5pbnNlcnROb2RlKDI1KTtcbnRyZWVOb2RlLmluc2VydE5vZGUoMzYpO1xuXG5cblxuY29uc29sZS5sb2coXCJORVcgVFJFRSBJTlNFUlRcIik7XG5cbnRyZWVOb2RlLnByZXR0eVByaW50KHRyZWVOb2RlLmdldFRyZWUoKSk7XG5cbnRyZWVOb2RlLmRlbGV0ZU5vZGUoMTIzKTtcbi8vIHRyZWVOb2RlLmRlbGV0ZU5vZGUoOSk7XG5cbmNvbnNvbGUubG9nKFwiTkVXIFRSRUUgREVMRVRlXCIpO1xuXG50cmVlTm9kZS5wcmV0dHlQcmludCh0cmVlTm9kZS5nZXRUcmVlKCkpO1xuXG5cbnRyZWVOb2RlLmRlbGV0ZU5vZGUoKTtcblxuY29uc29sZS5sb2coXCJORVcgVFJFRVwiKTtcblxudHJlZU5vZGUucHJldHR5UHJpbnQodHJlZU5vZGUuZ2V0VHJlZSgpKTtcblxuXG5jb25zb2xlLmxvZyh0cmVlTm9kZS5sZXZlbE9yZGVyKHRyZWVOb2RlLmdldFRyZWUoKSkpO1xuXG5cblxuY29uc29sZS5sb2codHJlZU5vZGUuaW5PcmRlcigpKTtcblxuXG5jb25zb2xlLmxvZyh0cmVlTm9kZS5wcmVPcmRlcigpKTtcblxuY29uc29sZS5sb2codHJlZU5vZGUucG9zdE9yZGVyKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9