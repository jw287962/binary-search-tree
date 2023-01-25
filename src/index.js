import tree  from './tree';

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let treeNode = tree(array);

treeNode.prettyPrint(treeNode.getTree());

treeNode.insertNode(10);
treeNode.insertNode(10);
treeNode.insertNode(0);
treeNode.insertNode(6);
treeNode.insertNode(14);

console.log("NEW TREE");

treeNode.prettyPrint(treeNode.getTree());

treeNode.deleteNode(123);
treeNode.deleteNode();
treeNode.deleteNode(9);

console.log("NEW TREE");

treeNode.prettyPrint(treeNode.getTree());


treeNode.deleteNode(8);

console.log("NEW TREE");

treeNode.prettyPrint(treeNode.getTree());