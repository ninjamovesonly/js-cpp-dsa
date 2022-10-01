export class BinaryTreeNode {
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;
  data: Number | null;

  constructor(data: number | null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
