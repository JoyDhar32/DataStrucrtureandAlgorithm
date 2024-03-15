// Code: SortJsBuildin.js
const sort = (numbers) => {
   return numbers.sort((a,b)=>a-b);
}
console.log(sort([4, 2, 8, 1, 6])); // Output: [1, 2, 4, 6, 8]
console.log(sort([1, 2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(sort([5, 4, 3, 2, 1])); // Output: [1, 2, 3, 4, 5]
console.log(sort([1, 3, 2, 5, 4])); // Output: [1, 2, 3, 4, 5]

// /* time complexity Big(O) = O(n log(n)) */

