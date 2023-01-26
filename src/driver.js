const tree = require('./tree');

function randomArray(num){
  let array = [];
  let i = 0
  while(i <= num){
    array.push(Math.round(Math.random()*100));
i++;
  }

  return array;
}


let array = randomArray(20)

let newTree = tree(array);

console.log(newTree.isBalanced(), "Balance");
newTree.prettyPrint(newTree.getTree());

console.log(newTree.levelOrder());
console.log(newTree.inOrder());
console.log(newTree.preOrder());
console.log(newTree.postOrder());

newTree.insertNode(101);
newTree.insertNode(102);
newTree.insertNode(103);
newTree.insertNode(104);
newTree.insertNode(110);

newTree.prettyPrint(newTree.getTree());
console.log(newTree.isBalanced());
if(!newTree.isBalanced()){
  newTree.rebalance();
}
newTree.prettyPrint(newTree.getTree());

console.log(newTree.levelOrder());
console.log(newTree.inOrder());
console.log(newTree.preOrder());
console.log(newTree.postOrder());
