import { BinaryTreeNode } from "./binary-tree-node";

export class BinaryTree {
  root: BinaryTreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(node: BinaryTreeNode, data: number): BinaryTreeNode {
    if (node === null) {
      node = new BinaryTreeNode(data);
    } else if (node.data && data < node.data) {
      node.left = this.insert(node.left as BinaryTreeNode, data);
    } else {
      node.right = this.insert(node.right as BinaryTreeNode, data);
    }

    return node;
  }
}
