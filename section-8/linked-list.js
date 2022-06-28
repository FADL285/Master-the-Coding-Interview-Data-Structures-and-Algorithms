/*
Linked list

  1 ->> 10 ->> 5 ->> 282 ->> 28 ->> 30 ->> 2000

*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  // Value of Head.
  #head = null;
  #tail = null;
  #length = 0;
  constructor(value) {
    this.#head = new Node(value);
    this.#tail = this.#head;
    this.#length += 1;
  }

  get length() {
    return this.#length;
  }
}

const myLinkedList = new LinkedList(10);

// ----------------------------------

// myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 28,
//         next: {
//           value: 30,
//           next: {
//             value: 2000,
//             next: null
//           }
//         }
//       }
//     }
//   }
// };
