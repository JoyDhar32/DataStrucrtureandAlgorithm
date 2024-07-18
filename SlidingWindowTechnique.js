const maxSumSubarray=(arr,k)=>{
    let len=arr.length; // Length of the array arr
    if(len<k){ // If the length of the array is less than k then return Invalid Input
        console.log(`Invalid Input`);
    }
    let maxSum=0;   // Initialize maxSum to 0
    for(let i=0;i<k;i++){   // Calculate the sum of the first k elements of the array
        maxSum +=arr[i];
    }
    let windowSum=maxSum;   // Initialize windowSum to maxSum 
    for(let i=k;i<len;i++){     // Iterate from k to the length of the array 
        windowSum+= arr[i]-arr[i-k];   // Calculate the sum of the current window by adding the current element and subtracting the element k steps back from the current element 
        maxSum=Math.max(maxSum,windowSum);  // Update maxSum to the maximum of maxSum and windowSum 
    }
    return maxSum; // Return maxSum 
}

// Test Cases
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // 9
console.log(maxSumSubarray([2, 3, 4, 1, 5], 2)); // 7
console.log(maxSumSubarray([2, 1, 5, 2, 8], 4)); // 17
console.log(maxSumSubarray([3, 4, 1, 1, 6], 3)); // 8

// time Complexity: O(n)
// Space Complexity: O(1)
// ⭐ Sliding Window ⭐


