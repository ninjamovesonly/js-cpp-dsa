import { BinaryTreeNode } from "./binary-tree-node";

class BinaryTree {
  constructor(args) {
    if (args == null) {
      this.root = new BinaryTreeNode(null);
    } else if (args.length == 1) {
      this.root = new BinaryTreeNode(args[0]);
    } else if (args.length > 1) {
      this.root = null;
      for (var i = 0; i < args.length; i++) {
        var nodeData = args[i];
        this.insert(nodeData);
      }
    }
  }

  insertBT(key) {
    let tempQueue = new LinkedListNode();
    let temp = this.root;
    tempQueue.push(temp);

    // Do level order traversal until we find an empty spot.
    while (!tempQueue.length == 0) {
      temp = tempQueue.peek();
      tempQueue.pop();

      if (temp.left == null) {
        temp.left = new BinaryTreeNode(key);
        break;
      } else {
        tempQueue.push(temp.left);
      }

      if (temp.right == null) {
        temp.right = new BinaryTreeNode(key);
        break;
      } else {
        tempQueue.push(temp.right);
      }
    }
  }

  insert(d) {
    let pNew = new BinaryTreeNode(d);
    if (this.root == null) {
      this.root = pNew; // 3
    } else {
      let parent = new BinaryTreeNode();
      parent = null;
      let pTemp = new BinaryTreeNode();
      pTemp = this.root; // 3
      while (pTemp != null) {
        parent = pTemp;
        if (d <= pTemp.data) {
          pTemp = pTemp.left; // {3. l=0r=0}
        } else {
          pTemp = pTemp.right; // {3. l=0r=0}
        }
      }
      if (d <= parent.data) {
        parent.left = pNew; // {3. l=0r=0}
        // pNew.parent = parent;
      } else {
        parent.right = pNew; // {3. l=0r=0}
        // pNew.parent = parent;
      }
    }
  }

  findInBSTRec(node, nodeData) {
    if (node == null) {
      return null;
    }
    if (node.data == nodeData) {
      return node;
    } else if (node.data > nodeData) {
      return this.findInBSTRec(node.left, nodeData);
    } else {
      return this.findInBSTRec(node.right, nodeData);
    }
  }

  findInBST(nodeData) {
    return this.findInBSTRec(this.root, nodeData);
  }

  populateParentsRec(node, parent) {
    if (!node) {
      return null;
    }
    node.parent = parent;

    this.populateParentsRec(node.left, node);
    this.populateParentsRec(node.right, node);
  }

  populate_parents(node) {
    this.populateParentsRec(node, null);
  }

  getSubTreeNodeCount(node) {
    if (node == null) {
      return 0;
    } else {
      return (
        1 +
        this.getSubTreeNodeCount(node.left) +
        this.getSubTreeNodeCount(node.right)
      );
    }
  }

  populateCountRec(node) {
    if (node != null) {
      node.count = this.getSubTreeNodeCount(node);
      this.populateCountRec(node.left);
      this.populateCountRec(node.right);
    }
  }
  populateCount() {
    this.populateCountRec(this.root);
  }

  getTreeDeepCopyRec(node) {
    if (node != null) {
      let newNode = new BinaryTreeNode(node.data);
      newNode.left = getTreeDeepCopyRec(node.left);
      newNode.right = getTreeDeepCopyRec(node.right);
      return newNode;
    } else {
      return null;
    }
  }

  getTreeDeepCopy() {
    if (this.root == null) {
      return null;
    } else {
      let treeCopy = new BinaryTree();
      treeCopy.root = getTreeDeepCopyRec(root);
      return treeCopy;
    }
  }
  findInBTRec(node, nodeData) {
    if (node == null) {
      return null;
    }
    if (node.data == nodeData) {
      return node;
    }
    let leftNode = findInBTRec(node.left, nodeData);
    if (leftNode != null) {
      return leftNode;
    }
    rightNode = findInBTRec(node.right, nodeData);
    return rightNode;
  }
  findInBT(nodeData) {
    return findInBTRec(this.root, nodeData);
  }
}

export { BinaryTree };
