class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
      this.val = val ?? 0;
      this.next = next ?? null;
  }
}

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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummyHead = new ListNode();
let current = dummyHead;

while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
        current.next = list1;
        list1 = list1.next;
    } else {
        current.next = list2;
        list2 = list2.next;
    }
    current = current.next!;
}

current.next = list1 !== null ? list1 : list2;

return dummyHead.next;
};