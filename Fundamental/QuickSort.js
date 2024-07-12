const QuickSort =(arr)=>{
    if(arr.length<1){
        return arr;
    }
    let left =[], right =[], pivot=arr[arr.length-1];
    for(let i=0; i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return [...QuickSort(left),pivot,...QuickSort(right)];
}
console.log(QuickSort([1,5,3,2,4,6,7,8,9,10])); // [1,2,3,4,5,6,7,8,9,10]
console.log(QuickSort([10,9,8,7,6,5,4,3,2,1])); // [1,2,3,4,5,6,7,8,9,10]
console.log(QuickSort([1,2,3,4,5,6,7,8,9,10])); // [1,2,3,4,5,6,7,8,9,10]
console.log(QuickSort([1,1,1,1,1,1,1,1,1,1])); // [1,1,1,1,1,1,1,1,1,1]
console.log(QuickSort([1,1,1,1,1,1,1,1,1,2])); // [1,1,1,1,1,1,1,1,1,2]
console.log(QuickSort([2,1,1,1,1,1,1,1,1,1])); // [1,1,1,1,1,1,1,1,1,2]

//⭐time complexity: O(nlogn)

/*
QuickSort is a sorting algorithm that follows the divide-and-conquer paradigm. It was developed by Tony Hoare in 1960 and is widely used due to its efficiency on average. Here is a step-by-step explanation of the QuickSort algorithm:

### Steps of QuickSort:

1. **Choose a Pivot:**
   - Select an element from the array to act as a pivot. The choice of pivot can significantly affect the performance of the algorithm.

2. **Partition the Array:**
   - Rearrange the elements in the array such that elements less than the pivot are on the left, and elements greater than the pivot are on the right. The pivot itself is now in its sorted position.

   ```plaintext
   Example:
   Array: [7, 2, 1, 6, 8, 5, 3, 4]
   Pivot: 4

   After Partition:
   [2, 1, 3, 4, 8, 5, 7, 6]
   ```

3. **Recursively Apply to Subarrays:**
   - Apply the QuickSort algorithm recursively to the subarrays on the left and right of the pivot. This process continues until the base case is reached (subarrays with one or zero elements).

   ```plaintext
   Recursive Step 1:
   [2, 1, 3] (sorted) + [4] (pivot) + [8, 5, 7, 6] (sorted)

   Recursive Step 2:
   [1] (sorted) + [2] (pivot) + [3]

   ... and so on.
   ```

4. **Combine Results:**
   - Combine the sorted subarrays back together to get the final sorted array.

   ```plaintext
   Final Sorted Array:
   [1, 2, 3, 4, 5, 6, 7, 8]
   ```

### Picking a Pivot:
The efficiency of the QuickSort algorithm can depend on the choice of pivot. Common strategies include choosing the first, last, or middle element of the array, or using more advanced techniques like the "median of three" method.

### Time Complexity:
The average time complexity of QuickSort is \(O(n \log n)\), making it quite efficient for large datasets. However, the worst-case time complexity is \(O(n^2)\) when a poorly chosen pivot leads to unbalanced partitions.

### In-Place Sorting:
QuickSort is often implemented as an in-place sorting algorithm, meaning it doesn't require additional memory proportional to the size of the input.

Understanding the partitioning step and the choice of pivot are crucial for grasping the efficiency and performance characteristics of the QuickSort algorithm.
*/