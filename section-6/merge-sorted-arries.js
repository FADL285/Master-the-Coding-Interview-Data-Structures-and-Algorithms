//                                      //
//              First Way               //
//                                      //
/**
 * @param {Array} firstArray
 * @param {Array} secondArray
 * @return {Array}
 */
const mergeSortedArrays = (firstArray, secondArray) => {
  // Check if any array is empty.
  if (firstArray.length === 0) return firstArray;
  if (secondArray.length === 0) return secondArray;

  // Merge the arrays logic
  const mergedArray = [];
  let firstArrayItem = firstArray[0];
  let secondArrayItem = secondArray[0];
  let firstArrayIndex = 1;
  let secondArrayIndex = 1;

  // Loop through the arrays items
  while (firstArrayItem || secondArrayItem) {
    // check if the first item is less than the second item.
    if (!secondArrayItem || firstArrayItem < secondArrayItem) {
      mergedArray.push(firstArrayItem);
      firstArrayItem = firstArray[firstArrayIndex];
      // Increase the index by 1.
      firstArrayIndex++;
    }
    // check if the first item is greater than the second item.
    else {
      mergedArray.push(secondArrayItem);
      secondArrayItem = secondArray[secondArrayIndex];
      // Increase the index by 1.
      secondArrayIndex++;
    }
  }

  return mergedArray;
};

console.log(mergeSortedArrays([0, 3, 4, 31], [1, 6, 30]));

//                                      //
//              Second Way              //
//                                      //
/**
 * @param {Array} firstArray
 * @param {Array} secondArray
 * @return {Array}
 */
const mergeSortedArraysII = (firstArray, secondArray) => {
  const mergedArray = [...firstArray, ...secondArray].sort((a, b) => a - b);
  return mergedArray;
};

console.log(mergeSortedArraysII([0, 3, 4, 31], [1, 6, 30]));
