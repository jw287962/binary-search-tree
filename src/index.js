import tree  from './tree';

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let treeNode = tree(array);

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