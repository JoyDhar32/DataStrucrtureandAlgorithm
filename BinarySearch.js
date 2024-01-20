const BinarySearch = (arr, target) => {
 // Initialize left and right pointers, which will be the starting and ending indices of the array
 let left = 0;
 let right = arr.length - 1;

 // Continue the search while the left pointer is less than or equal to the right pointer
 while (left <= right) {
     // Calculate the middle index
     let middleIndex = Math.floor((left + right) / 2);

     // If the target is found at the middle index, return the index
     if (target === arr[middleIndex]) {
         return middleIndex;
     }
     // If the target is greater than the element at the middle index, narrow the search to the right half
     else if (target > arr[middleIndex]) {
         left = middleIndex + 1;
     }
     // If the target is less than the element at the middle index, narrow the search to the left half
     else {
         right = middleIndex - 1;
     }
 }

 // If the target is not found, return -1
 return -1;
    
}

console.log(BinarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(BinarySearch([1, 2, 3, 4, 5], 0)); // -1
console.log(BinarySearch([1, 2, 3, 4, 5], 5)); // 4
// /* time complexity Big(O) = O(log(n)) */

