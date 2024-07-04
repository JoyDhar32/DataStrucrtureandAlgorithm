/*
Start with the second element (assume the first element is already sorted):

The first element is considered sorted since there are no preceding elements.
Compare and insert:

Take the second element and compare it with the first.
If the second element is smaller, swap them.
Extend the sorted portion:

Move to the third element.
Compare it with the second element and swap if necessary.
Compare it with the first element and swap if necessary.
Continue the process:

Continue this process for the remaining elements, extending the sorted portion of the array with each iteration.
Final sorted array:

After iterating through all elements, the array is sorted.
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = currentVal
  }
  return arr
}

console.log(insertionSort([2, 1, 9, 76, 4])) // [1, 2, 4, 9, 76]
console.log(insertionSort([3, 1, 4, 2, 5])) // [1, 2, 3, 4, 5]