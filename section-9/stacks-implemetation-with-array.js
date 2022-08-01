class Stack {
  constructor() {
    this.items = [];
  }
  peek() {
    return this.items.at(-1);
  }
  push(value) {
    this.items.push(value);
    return this;
  }
  pop() {
    return this.items.pop();
  }
  isEmpty() {
    return this.items.length === 0;
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
