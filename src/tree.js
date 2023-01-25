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
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

return {getTree,prettyPrint}
}

export default tree;