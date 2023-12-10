// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//       this.val = val ?? 0;
//       this.next = next ?? null;
//   }
// }
// function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//   const dummyHead = new ListNode();
//   let current = dummyHead;
//   while (l1 !== null && l2 !== null) {
//       if (l1.val < l2.val) {
//           current.next = l1;
//           l1 = l1.next;
//       } else {
//           current.next = l2;
//           l2 = l2.next;
//       }
//       current = current.next;
//   }
//   if (l1 !== null) {
//       current.next = l1;
//   }
//   if (l2 !== null) {
//       current.next = l2;
//   }
//   return dummyHead.next;
// }
// const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
// const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
// const mergedList = mergeTwoLists(list1, list2);
// let current = mergedList;
// while (current !== null) {
//   console.log(current.val);
//   current = current.next;
// }
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val !== null && val !== void 0 ? val : 0;
        this.next = next !== null && next !== void 0 ? next : null;
    }
    return ListNode;
}());
function mergeTwoLists(l1, l2) {
    var dummyHead = new ListNode();
    var current = dummyHead;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        }
        else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    // If one of the lists is not fully processed
    if (l1 !== null) {
        current.next = l1;
    }
    if (l2 !== null) {
        current.next = l2;
    }
    return dummyHead.next;
}
// Convert linked list to array for easier printing
function linkedListToArray(head) {
    var result = [];
    var current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}
// Example usage:
var list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
var list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
var mergedList = mergeTwoLists(list1, list2);
// Convert the merged list to an array and print
var mergedArray = linkedListToArray(mergedList);
console.log(mergedArray);
