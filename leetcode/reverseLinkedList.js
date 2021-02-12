// 206. Reverse Linked List

// Reverse a singly linked list.

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// function reverseList(head) {
//     let node = head;
//     let prev = null;
//     while (node) {
//         let temp = node.next;
//         node.next = prev;
//         prev = node;
//         node = temp;
//     }
//     return prev;
// }

function reverseList(head) {
    let [current, prev] = [head, null];
    while (current) {
        [current.next, prev, current] = [prev, current, current.next];
    }
    return prev;
}

let list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(reverseList(list));
