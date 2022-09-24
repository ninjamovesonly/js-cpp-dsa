/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */

var pathSum = function (root, targetSum) {
  if (!root) return [];

  const paths = [];

  const dfs = (node, sum, stack) => {
    if (node.left === null && node.right === null) {
      if (node.val === sum) {
        stack.push(node.val);
        paths.push(stack.slice());
        stack.pop();
      }
    }

    if (node.left) {
      stack.push(node.val);
      dfs(node.left, sum - node.val, stack);
      stack.pop();
    }

    if (node.right) {
      stack.push(node.val);
      dfs(node.right, sum - node.val, stack);
      stack.pop();
    }
  };

  dfs(root, targetSum, []);
  return paths;
};
