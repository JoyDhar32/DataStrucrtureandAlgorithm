/*
In JavaScript, the substring() method is used to extract a portion of a string. Similar to the slice() method, substring() does not modify the original string but returns a new string containing the specified portion. The substring() method accepts two parameters:

start: The index at which to begin extraction. If omitted, it starts from the beginning of the string. If the start index is greater than the end index, substring() swaps the two arguments.

end (optional): The index at which to stop extraction. The substring() method extracts characters up to, but not including, the character at the specified end index. If omitted, it extracts characters until the end of the string. If the end index is greater than the string length, substring() uses the string length as the end index.
*/

/*It's important to note that while substring() and slice() are similar, there is a key difference when it comes to handling negative indices. slice() allows the use of negative indices as an offset from the end of the string, whereas substring() does not support negative indices directly. If negative indices are provided to substring(), they are treated as if they were 0.*/

const str = 'JavaScript is amazing!';

// Extract characters from index 4 to 10 (not including 10)
const substring1 = str.substring(4, 10);
console.log(substring1);  // Output: 'Script'

// Omitting the end index extracts characters until the end
const substring2 = str.substring(11);
console.log(substring2);  // Output: 'is amazing!'

// Omitting both start and end indices returns the entire string
const wholeString = str.substring();
console.log(wholeString);  // Output: 'JavaScript is amazing!'

// Swapping start and end indices (start > end)
const swappedIndices = str.substring(10, 4);
console.log(swappedIndices);  // Output: 'Script'
