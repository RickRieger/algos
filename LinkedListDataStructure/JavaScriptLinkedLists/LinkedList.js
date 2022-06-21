// class Node {
//   constructor(val, next) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.length = 0;
//   }
//   add(value) {
//     const node = new Node(value);

//     let current;

//     if (!this.head) {
//       this.head = node;
//     } else {
//       current = this.head;

//       while (current.next) {
//         current = current.next;
//       }
//       current.next = node;
//     }
//     this.length++;
//   }
//   fromArray(arr) {
//     arr.forEach((item) => {
//       this.add(item);
//     });
//   }
// }

// let l1 = new LinkedList();
// l1.fromArray([1, 2, 4]);
// console.log(l1);
// l1 = l1.head;

// let l2 = new LinkedList();
// l2.fromArray([1, 3, 4]);
// l2 = l2.head;

// var mergeTwoLists = function (l1, l2) {
//   let newList = new Node();

//   let headOfNewList = newList;

//   while (l1 && l2) {
//     if (l1.val < l2.val) {
//       newList.next = l1;
//       l1 = l1.next;
//     } else {
//       newList.next = l2;
//       l2 = l2.next;
//     }
//     newList = newList.next;
//   }
//   if (l1 == null) {
//     newList.next = l2;
//   } else {
//     newList.next = l1;
//   }
//   return headOfNewList.next;
// };

// console.log(mergeTwoLists(l1, l2));
