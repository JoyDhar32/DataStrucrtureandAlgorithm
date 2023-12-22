/*
QuickSort is a widely used sorting algorithm that follows the divide-and-conquer paradigm. It was developed by Tony Hoare in 1960. The basic idea of QuickSort is to select a "pivot" element from the array and partition the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

Here are the detailed steps of the QuickSort algorithm:

Select a Pivot:

Choose a pivot element from the array. The choice of the pivot can impact the efficiency of the algorithm. Common strategies include selecting the first element, the last element, the middle element, or using a random element.
Partitioning:

Reorder the array so that all elements less than the pivot are on the left side, and all elements greater than the pivot are on the right side. The pivot itself is now in its final sorted position.

Recursion:
Recursively apply QuickSort to the sub-arrays on the left and right of the pivot.
Base Case:

The base case of the recursion is when the sub-array has fewer than two elements, as it is already considered sorted.
*/

function QuickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr.splice(pivotIndex, 1)[0]
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }
    return QuickSort(left).concat([pivot], QuickSort(right))
}
console.log(QuickSort([2, 1, 9, 76, 4]))