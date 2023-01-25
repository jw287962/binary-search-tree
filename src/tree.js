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

  const insertNode = (value,currentNode = root) =>{
    if (!value) return ;
    const newNode = node();

    let pointerNode = currentNode;
    newNode.data = value;


  if(value < pointerNode.data && pointerNode.left == null)
      return pointerNode.left = newNode;
  if (value > pointerNode.data && pointerNode.right == null)
      return pointerNode.right = newNode;

  if(pointerNode.data == value) return newNode;
 
  else if(value < pointerNode.data){
    insertNode(value,pointerNode.left)
  }
  else 
    insertNode(value,pointerNode.right);
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

  const deleteNode = (value) =>{
    if (!value) return ;
    const newNode = node();
    let currentNode = root;
  while(currentNode.data != null){
    if(currentNode.left == null && currentNode.right == null) return; 
    // 2 children;
    if(currentNode.data == value){
      if (currentNode.left != null || currentNode.right != null){ {  
        currentNode.data = deleteWithTwoChild(currentNode);
        
        return;
        }
      }
    }

    // REMOvES NODE IF NEEDED
    if(currentNode.left != null){  
      let deleteNode = currentNode.left;  
      if(deleteNode.data == value){
        if(deleteNode.left == null && deleteNode.right == null)  //check for no children
        currentNode.left = null;
        else { // check for 1 child
          if(deleteNode.left != null){
          return currentNode.left = deleteNode.left;
          }
          return currentNode.left = deleteNode.right;
        }
        return;
      }
  }
  else if(currentNode.right != null){
    let deleteNode = currentNode.right;
      if(deleteNode.data == value){
        if(deleteNode.left == null && deleteNode.right == null) //check for no children
        currentNode.right = null;
        else if(deleteNode.left == null || deleteNode.right == null){
          if(deleteNode.left != null){
          currentNode.right = deleteNode.left;
          return;
          }
          currentNode.right = deleteNode.right;
          return;
        }
       
          return;
      }
  }
  //  cotinues through tree if less than or greater than
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