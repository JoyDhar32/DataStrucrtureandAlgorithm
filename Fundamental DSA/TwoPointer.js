const findPairs =(nums,target)=>{
    let left=0;                     // Two pointer approach
    let right=nums.length-1;        // Create two pointers left and right
    const pairs = [];               // Create an array to store the pairs
    while(left<right){              // Loop through the array until left is less than right
        let currentSum=nums[left]+nums[right];   // Calculate the sum of the elements at left and right
        if(currentSum===target){            // If the sum is equal to target
           pairs.push([nums[left],nums[right]]);    // Push the pair to the pairs array 
           left++;                               // Move the left pointer to the right
            right--;                          // Move the right pointer to the left
        }
        else if(currentSum<target){        // If the sum is less than target
            left++;                       // Move the left pointer to the right
        }
        else{   
            right--;               // If the sum is greater than target, move the right pointer to the left
        }
    }
    return pairs;            // Return the pairs array
}

console.log(findPairs([1,2,3,4,6],6)); // [2,4]
console.log(findPairs([2,5,9,11],11)); // [2,9]
console.log(findPairs([1, 2, 3, 4, 6, 8],10)); // [2,8],[4,6]
console.log(findPairs([2, 3, 4, 6, 8, 9],8)); // [2,6],[3,5]