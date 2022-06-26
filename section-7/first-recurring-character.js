const firstRecurringChar = function (array) {
  const map = new Map();
  for (const item of array) {
    if (map.get(item)) return item;
    map.set(item, true);
  }
  return undefined;
};

const arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const arr2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const arr3 = [2, 3, 4, 5];

console.log(firstRecurringChar(arr1));
console.log(firstRecurringChar(arr2));
console.log(firstRecurringChar(arr3));
