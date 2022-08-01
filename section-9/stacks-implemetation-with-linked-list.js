class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;

    return this;
  }
  pop() {
    if (!this.top) return null;
    const deletedItem = this.top;
    this.top = this.top.next;
    this.length--;
    return deletedItem;
  }
  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();
console.log(myStack.peek());
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
console.log(myStack.peek());
console.log(myStack);
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.pop());
console.log(myStack.isEmpty());

//Discord
//Udemy
//Google
