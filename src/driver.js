const tree = require("./tree");

function randomArray(num) {
  let array = [];
  let i = 0;
  while (i <= num) {
    array.push(Math.round(Math.random() * 100));
    i++;
  }

  return array;
}

// let array = randomArray(20);
let array = [
  0, 9, 11, 20, 26, 33, 36, 42, 46, 51, 64, 65, 67, 72, 74, 80, 88, 92, 93, 101,
  102, 103, 104, 110,
];

// array.push(20);

let newTree = tree(array);

console.log(newTree.isBalanced(), "Balance");
newTree.prettyPrint(newTree.getTree());

console.log("Level", newTree.levelOrder());
console.log("Inorder", newTree.inOrder());
console.log("preOrder", newTree.preOrder());
console.log("PostOrder", newTree.postOrder());

newTree.insertNode(101);
newTree.insertNode(102);
newTree.insertNode(103);
newTree.insertNode(104);
newTree.insertNode(110);

newTree.prettyPrint(newTree.getTree());
console.log(newTree.isBalanced(), "Balance");
if (!newTree.isBalanced()) {
  newTree.rebalance();
}
console.log(newTree.isBalanced(), "Balance");

newTree.prettyPrint(newTree.getTree());
console.log("Level", newTree.levelOrder());
console.log("Inorder", newTree.inOrder());
console.log("preOrder", newTree.preOrder());
console.log("PostOrder", newTree.postOrder());

newTree.prettyPrint(newTree.getTree());
newTree.deleteNode(102);

newTree.deleteNode(20);

newTree.prettyPrint(newTree.getTree());
