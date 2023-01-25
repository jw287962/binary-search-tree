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
      if(currentNode.data == value){
       
          return newNode;
      }
  //  cotinues through tree if less than or greater than
    if(value < currentNode.data)
      deleteNode(value,currentNode.left);
     if(value > currentNode.data )
      deleteNode(value,currentNode.right);
    


    return currentNode;
  }
return {getTree,prettyPrint, insertNode,deleteNode}
}

export default tree;