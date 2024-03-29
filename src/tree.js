const node = require("./node");
const fixedArray = require("./mergeSort");

const tree = (array) => {
  let root = buildTree(fixedArray(array));

  function buildTree(array) {
    if (array.length === 0) return null;
    const nodeItem = node();
    nodeItem.data = array[Math.round(array.length / 2 - 0.49)];
    nodeItem.left = buildTree(array.slice(0, array.length / 2));
    nodeItem.right = buildTree(array.slice(array.length / 2 + 1));
    return nodeItem;
  }
  function getTree() {
    return root;
  }

  const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  const insertNode = (value, currentNode = root) => {
    if (!value && value != 0) return;
    const newNode = node();
    newNode.data = value;
    let pointerNode = currentNode;

    if (pointerNode == null) {
      return newNode;
    }
    // if(value < pointerNode.data && pointerNode.left == null)
    //     return pointerNode.left = newNode;
    // if (value > pointerNode.data && pointerNode.right == null)
    //     return pointerNode.right = newNode;

    if (pointerNode.data == value) return newNode;
    else if (value < pointerNode.data) {
      pointerNode.left = insertNode(value, pointerNode.left);
    } else pointerNode.right = insertNode(value, pointerNode.right);

    return pointerNode;
  };

  function deleteWithTwoChild(currentNode) {
    let nextNode = currentNode.right;
    let previousNode;
    while (nextNode.left != null) {
      previousNode = nextNode;
      nextNode = nextNode.left;
    }
    // i remove the one that I find is min on right.
    previousNode.left = null;
    // if the min value has right nodes, it becomes the new min on the previous node.left
    if (nextNode.right != null) previousNode.left = nextNode.right;
    console.log(nextNode.data);
    return nextNode.data;
  }

  const deleteNode = (value, currentNode = root) => {
    if (!value) return;
    if (currentNode == null) {
      return null;
    }
    if (currentNode.data == value) {
      if (currentNode.left == null && currentNode.right == null) {
        return null;
      } //one child
      else if (currentNode.left != null && currentNode.right != null) {
        //two child
        console.log("twochild");
        currentNode.data = deleteWithTwoChild(currentNode);
      } else if (currentNode.left != null) {
        // after current node is deleted, it is updated to equal to the next available node if only 1 is not null
        return currentNode.left;
      } else if (currentNode.right != null) {
        return currentNode.right;
      }
    }
    //asign the new node value to current node
    if (value < currentNode.data)
      currentNode.left = deleteNode(value, currentNode.left);
    if (value > currentNode.data)
      currentNode.right = deleteNode(value, currentNode.right);

    return currentNode;
  };

  /*
   * @param: tree - Node
   * @param: callback (optional) - Function
   *
   * @returns: void | Array<number>
   */
  function levelOrder(node = root, callback) {
    let queueArray = [];
    if (node == null) return [];
    let orderArray = [];
    queueArray.push(node);

    while (queueArray.length != 0) {
      let sliced = queueArray.splice(0, 1);
      if (callback) orderArray.push(callback(sliced[0].data));
      else orderArray.push(sliced[0].data);
      if (sliced[0].left != null) {
        queueArray.push(sliced[0].left);
      }
      if (sliced[0].right != null) {
        queueArray.push(sliced[0].right);
      }
    }
    return orderArray;
  }

  const inOrder = (node = root, array = [], callback) => {
    if (node == null) return array;

    if (callback) {
      inOrder(node.left, array, callback);
      array.push(callback(node.data));
      inOrder(node.right, array, callback);
    } else {
      let holder = inOrder(node.left, array);
      array.push(node.data);
      inOrder(node.right, array);
    }
    return array;
  };

  //

  const preOrder = (node = root, array = [], callback) => {
    if (node == null) {
      return;
    }
    if (callback) {
      array.push(callback(node.data));
      preOrder(node.left, array, callback);
      preOrder(node.right, array, callback);
    } else {
      array.push(node.data);
      preOrder(node.left, array);
      preOrder(node.right, array);
    }
    return array;
  };

  const postOrder = (node = root, array = [], callback) => {
    if (node == null) {
      return;
    }
    if (callback) {
      postOrder(node.left, array, callback);
      postOrder(node.right, array, callback);
      array.push(node.data);
    } else {
      postOrder(node.left, array);
      postOrder(node.right, array);
      array.push(node.data);
    }

    return array;
  };
  const height = (node = root, array = [1, 1]) => {
    if (node == null) return;
    array[0]++;
    height(node.left, array);
    if (node.right != null) {
      array[0]++;
      if (array[1] < array[0]) {
        array[1] = array[0];
      }
      array[0]--;
    }
    array[0]--;
    height(node.right, array);

    if (array[1] < array[0]) {
      array[1] = array[0];
    }

    return array[1];
  };
  const depth = (nodeLook = root, num = 0, node = root) => {
    if (node == null) return null;
    if (nodeLook == null) return null;

    if (node.data == nodeLook.data) return num;
    num++;
    if (nodeLook.data < node.data) {
      num = depth(nodeLook, num, node.left);
    }
    if (nodeLook.data > node.data) {
      num = depth(nodeLook, num, node.right);
    }

    return num;
  };

  const isBalanced = (node = root) => {
    let isBalance = true;
    let heightMax = height(root);

    if (node == null) return isBalance;
    let compareHeight;

    isBalance = isBalanced(node.left, isBalance);

    if (node.left == null && node.right == null) {
      compareHeight = depth(node) + 1;

      if (heightMax - compareHeight > 1 || compareHeight - heightMax > 1) {
        isBalance = false;
        return isBalance;
      }
    }

    if (isBalance != false) isBalance = isBalanced(node.right);

    return isBalance;
  };

  const rebalance = () => {
    let array = inOrder(getTree());
    root = buildTree(array);
  };

  return {
    getTree,
    levelOrder,
    height,
    depth,
    isBalanced,
    rebalance,
    inOrder,
    preOrder,
    postOrder,
    prettyPrint,
    insertNode,
    deleteNode,
  };
};

module.exports = tree;
