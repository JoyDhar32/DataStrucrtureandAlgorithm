
// Function to compute the prefix sum array
function computePrefixSum(arr) {
    const n = arr.length;
    const prefixSum = new Array(n);
    
    if (n === 0) return prefixSum; // Return an empty array for an empty input

    // Initialize the first element
    prefixSum[0] = arr[0];
    
    // Compute prefix sums
    for (let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
    
    return prefixSum;
}

// Function to compute the sum of elements in a range
function rangeSum(prefixSum, l, r) {
    if (l > 0) {
        return prefixSum[r] - prefixSum[l - 1];
    } else {
        return prefixSum[r];
    }
}

// Example usage
const arr = [2, 4, 1, 22, 3, 1];
const prefixSum = computePrefixSum(arr);

console.log('Prefix Sum Array:', prefixSum); // Output: [2, 6, 7, 29, 32, 33]

// Query the sum from index 2 to 4
const sum = rangeSum(prefixSum, 2, 4);
console.log('Sum from index 2 to 4:', sum); // Output: 26



/* 
The prefix sum algorithm is a method used to quickly calculate the sum of elements in a subarray or range of an array. 

Steps
    Create a Prefix Sum Array: Build a new array where each element at index i is the sum of all elements in the original array from the start up to index 𝑖

    Use Prefix Sum Array for Quick Queries: To find the sum of elements between two indices, simply subtract values in the prefix sum array.

Example: For an array A =[1,2,3,4,5]

The prefix sum array would be [1,3,6,10,15]. 
To find the sum of elements between indices 1 and 3, we can use the prefix sum array: prefixSum[3] - prefixSum[1] = 10 - 3 = 7.






Time Complexity: O(n) to build the prefix sum array and O(1) to answer each query.

*/