class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.last) {
      this.first = this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.length--;
    return this;
  }
  isEmpty() {
    return this.length === 0;
  }
}

const myQueue = new Queue();
console.log(myQueue.enqueue('Joy'));
console.log(myQueue.enqueue('Matt'));
console.log(myQueue.peek());
console.log(myQueue.enqueue('Pavel'));
console.log(myQueue.enqueue('Samir'));
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue.isEmpty());
console.log(myQueue.dequeue());
console.log(myQueue.isEmpty());

//Joy
//Matt
//Pavel
//Samir
