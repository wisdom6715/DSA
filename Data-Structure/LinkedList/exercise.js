/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    if(!head || !head.next) return head
    let fast = head
    let slow = head
    let prev = null
    let currSum = 0;
    let maxSum = 0
    // loop to reverse the half of the linked list
    while(fast && fast.next){
        // slow = slow.next
        fast = fast.next.next
        let next = slow.next
        slow.next = prev
        prev = slow
        slow = next
    }

    while(slow){
        currSum = slow.val + prev.val
        maxSum = Math.max(currSum, maxSum)
        prev = prev.next
        slow = slow.next
    }
    return maxSum

};