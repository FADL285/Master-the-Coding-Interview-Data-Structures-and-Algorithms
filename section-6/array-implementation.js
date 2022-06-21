class MyArray {
  #length;
  constructor() {
    this.#length = 0;
    this.data = {};
  }

  get length() {
    return this.#length;
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.#length++] = item;
    return this.length;
  }

  pop() {
    const deletedItem = this.data[--this.#length];
    delete this.data[this.#length];
    return deletedItem;
  }

  #shiftItems(index) {
    for (let idx = index; idx < this.#length - 1; idx++) {
      this.data[idx] = this.data[idx + 1];
    }
  }

  delete(index) {
    const deletedItem = this.data[index];
    this.#shiftItems(index);
    delete this.data[--this.#length];
    return deletedItem;
  }

}

const array = new MyArray();

console.log(array.push('Fadl'));
console.log(array.get(0));
console.log(array.push('Mohamed'));
console.log(array.push('Ahmed'));
// console.log(array.pop());
console.log(array.push('Ali'));
console.log('length' in array);
console.log(array);
console.log(array.delete(2));
console.log(array);
console.log(array.length);

// [2,3,x,5,6,7]
// [0,1,2,2,3,4]
