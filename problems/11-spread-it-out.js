/***********************************************************************
Write a function named `spreadItOut(array1, array2)` that accepts two arrays and
uses *spread operator* syntax to return a single array.



Examples:
console.log(spreadItOut([3,5,6], [1,2,3])); // => [3,5,6,1,2,3];
console.log(spreadItOut([], [1,2,3])); // => 14;
console.log(spreadItOut(["apple", "banana"], [1,2,3])); // => ["apple", "banana", 1, 2, 3];
***********************************************************************/

function spreadItOut(array1, array2) {
  // your code here

  let twoArr = [...array1, ...array2];
  return twoArr;

}

console.log(spreadItOut([3,5,6], [1,2,3])); // => [3,5,6,1,2,3];
console.log(spreadItOut([], [1,2,3])); // => 14;
console.log(spreadItOut(["apple", "banana"], [1,2,3])); // => ["apple", "banana", 1, 2, 3];


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = spreadItOut;
