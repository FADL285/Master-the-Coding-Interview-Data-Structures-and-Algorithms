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

  prepend(value) {
    const newNode = new Node(value, this.#head);
    this.#head = newNode;
    this.#length++;
    return this.printList();
  }

  append(value) {
    const newNode = new Node(value);
    this.#tail.next = newNode;
    this.#tail = newNode;
    this.#length++;
    return this.printList();
  }

  insert(index, value) {
    // Check if index is zero
    if (index === 0) {
      return this.prepend(value);
    }

    // check if index is less than 0
    if (index < 0) {
      throw new RangeError('index must be greater or equal to zero');
    }

    // check if index is greater than LinkedList length
    if (index >= this.#length) {
      return this.append(value);
    }

    let currentNode = this.#head;
    while (--index) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(value, currentNode.next);
    this.#length++;
    return this.printList();
  }

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(28);
myLinkedList.append(30);
myLinkedList.append(2000);
console.log(myLinkedList.length);
console.log('#'.repeat(10) + ' Finish Appending ' + '#'.repeat(10));
myLinkedList.prepend(1);
console.log(myLinkedList.printList());
console.log(myLinkedList.length);
console.log('#'.repeat(10) + ' Finish Prepending ' + '#'.repeat(10));
myLinkedList.insert(4, 285);
console.log(myLinkedList.printList());
myLinkedList.insert(0, 2852);
console.log(myLinkedList.printList());
myLinkedList.insert(52, 852);
// myLinkedList.insert(-2, 528); // ! Throw an error
console.log(myLinkedList.printList());
console.log(myLinkedList.length);
console.log('#'.repeat(10) + ' Finish Inserting ' + '#'.repeat(10));

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
