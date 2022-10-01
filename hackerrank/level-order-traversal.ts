import { BinaryTree } from "../trees/binary-tree";
import { BinaryTreeNode } from "../trees/binary-tree-node";

function levelOrderTraversal(inputLines: string[]) {
  const inputs = inputLines[1].split(" ").map((item) => Number(item));
  const binaryTree = new BinaryTree();
  let result = "";

  for (let item of inputs) {
    binaryTree.root = binaryTree.insert(
      binaryTree.root as BinaryTreeNode,
      item
    );
  }

  if (binaryTree.root === null) {
    return (result += "null");
  } else {
    const queues: BinaryTreeNode[][] = [[], []];
    let currQueue = queues[0];
    let nextQueue = queues[1];

    currQueue.push(binaryTree.root);
    let level = 0;

    while (currQueue.length > 0) {
      const temp = currQueue.shift();
      result += String(temp?.data) + " ";

      if (temp?.left) {
        nextQueue.push(temp.left);
      }

      if (temp?.right) {
        nextQueue.push(temp.right);
      }

      if (currQueue.length === 0) {
        ++level;
        currQueue = queues[level % 2];
        nextQueue = queues[(level + 1) % 2];
      }
    }
  }

  return result;
}

console.log(levelOrderTraversal(["6", "1 2 5 3 6 4", ""]));
