function majorityElement(nums) {
    let candidate = null;
    let count = 0;

    // Phase 1: Find a candidate
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Phase 2: Verify the candidate
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    // Check if the candidate is the majority element
    return count > Math.floor(nums.length / 2) ? candidate : null;
}

// Example usage:
const nums = [3, 3, 4, 2, 4, 4, 2, 4, 4];
const result = majorityElement(nums);
console.log(result); // Output: 4











/*
Moore's Voting Algorithm
Purpose:

Used to find the majority element in an array, which appears more than half the time.
Phase 1 - Candidate Selection:

Initialize candidate and count.
Traverse the array:
If count is 0, set the current element as candidate and count to 1.
If the current element matches candidate, increment count.
Otherwise, decrement count.
Phase 2 - Candidate Verification:

Verify if the candidate is indeed the majority element:
Count occurrences of candidate in the array.
If its count exceeds half the array size, it's the majority element.
Efficiency:

Time Complexity: O(n) - Linear, where n is the size of the array.
Space Complexity: O(1) - Constant, as it uses only a few extra variables.
Advantages:

Efficient for finding a majority element in a single pass through the array.
Uses constant space, making it suitable for large datasets.
Limitations:

Assumes there is always a majority element.
Requires a final verification pass to confirm the candidate as the majority.
Example
For an array [3, 3, 4, 2, 4, 4, 2, 4, 4]:

Candidate Selection identifies 4 as the potential majority element.
Verification confirms 4 appears more than half the time (5 out of 9 elements).
Conclusion
Moore's Voting Algorithm is a powerful and efficient method for identifying the majority element in an array, leveraging a combination of candidate selection and verification to achieve its goal.
*/