/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  if (!head || !head.next) return null;
  let fast = head,
    slow = head;

  while (!fast) {
    if (fast.next && fast.next.next && fast.next.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    } else {
      fast = null;
    }
  }

  slow.next = slow.next.next;
  return head;
};
