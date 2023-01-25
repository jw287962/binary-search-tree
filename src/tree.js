import node from './node';
import fixedArray from './mergeSort';


const tree = (array) => {
  const processedArray = fixedArray(array);
  console.log(processedArray);
  let root = buildTree(processedArray);
  console.log(root);

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

  const insertNode = (value) =>{
    const newNode = node();

    let currentNode = root;
    newNode.data = value;
  while(currentNode.data != null){
    if(currentNode.data == value) return null;
    if(value < currentNode.data){
      if(currentNode.left == null)
        return currentNode.left = newNode;
    else
      currentNode = currentNode.left;
    }
    
    else if(value > currentNode.data ){
      if(currentNode.right == null)
      return currentNode.right = newNode;
      else
      currentNode = currentNode.right;
    }
  }
  }

  const deleteNode = (value) =>{
    const newNode = node();
    let currentNode = root;
  while(currentNode.data != null){
    if(currentNode.left == null && currentNode.right == null) return;

    if(currentNode.left != null){
      if(currentNode.left.data == value){
        currentNode.left = null;
        return;
      }
  }
  else if(currentNode.right != null){
      if(currentNode.right.data == value){
        currentNode.right = null;
          return;
      }

  }
   


    if(value < currentNode.data){
      if(currentNode.left == null)
        return;
    else
      currentNode = currentNode.left;
    }
    else if(value > currentNode.data ){
      if(currentNode.right == null)
      return 
      else
      currentNode = currentNode.right;
    }

   
  }

  }

return {getTree,prettyPrint, insertNode,deleteNode}
}

export default tree;