// const arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
const arr1 = [{ a: true }, 'b', 'c', 'd', 'e', 'f'];
// const arr2 = ['g', 'h', 'i', 'a', 'b', 'l'];
const arr2 = ['g', { a: true }, 'i', 'a', 'b', 'l'];
const arr3 = ['m', 'n', 'o', 'p', 'q', 'r'];

// =========================================================
// FIRST SUBMISSION. // ! Time Complexity ->> O(a*b) 🥲🥲! 
                    // ! Space Complexity ->> O(1)
// =========================================================

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {boolean}
 */
const containsCommonItems = function (arr1 = [], arr2 = []) {
  for (let index = 0; index < arr3.length; index++) {
    if (arr1.includes(arr2[index])) return true;
  }
  return false;
};

// Another Simple Way
const containsCommonItemsII = (arr1 = [], arr2 = []) =>
  arr1.some((item) => arr2.includes(item));

console.log('containsCommonItems');
console.log(containsCommonItems(arr1, arr2));
console.log(containsCommonItems(arr1, arr3));

console.log('containsCommonItemsII');
console.log(containsCommonItemsII(arr1, arr2));
console.log(containsCommonItemsII(arr1, arr3));

// =========================================================
// SECOND SUBMISSION. // ! Time Complexity ->> O(a+b) 😀😀!
                     // ! Space Complexity ->> O(n)
// =========================================================

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {boolean}
 */
const containsCommonItems2 = function (arr1 = [], arr2 = []) {
  // Loop on first array and create the object.
  const map = arr1.reduce(
    (accumulator, currentValue) => ({ ...accumulator, [currentValue]: true }),
    []
  );
  // Loop on second array and check if element is exists in the object.
  for (const item of arr2) {
    if (map[item]) return true;
  }
  return false;
};

// Another Simple Way
const containsCommonItems2II = (arr1 = [], arr2 = []) => {
  const set = new Set(arr2);
  return arr1.some((item) => set.has(item));
};

console.log('containsCommonItems2');
console.log(containsCommonItems2(arr1, arr2));
console.log(containsCommonItems2(arr1, arr3));

// ==============================
console.log('containsCommonItems2II');
console.log(containsCommonItems2II(arr1, arr2));
console.log(containsCommonItems2II(arr1, arr3));
