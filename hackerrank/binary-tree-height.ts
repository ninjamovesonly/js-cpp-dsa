import { BinaryTree } from "../trees/binary-tree";
import { BinaryTreeNode } from "../trees/binary-tree-node";

function maxHeight(tree: BinaryTreeNode | null): number {
  if (tree === null) {
    return -1;
  }

  return Math.max(maxHeight(tree.left), maxHeight(tree.right)) + 1;
}

function calculateHeight(inputLines: string[]) {
  const inputs = inputLines[1].split(" ").map((item) => Number(item));
  const binaryTree = new BinaryTree();

  for (let item of inputs) {
    binaryTree.root = binaryTree.insert(
      binaryTree.root as BinaryTreeNode,
      item
    );
  }

  return maxHeight(binaryTree.root);
}

console.log(calculateHeight(["7", "3 1 7 5 4"])); // not building this tree well
console.log(calculateHeight(["7", "3 5 2 1 4 6 7"]));
