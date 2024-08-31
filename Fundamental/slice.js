/* .
In JavaScript, the slice() method is a built-in function that is used to extract a portion of an array or string. It does not modify the original array or string but instead returns a new one containing the selected elements. The slice() method takes one or two arguments
*/

/*
start (optional): The index at which to begin extraction. If omitted, it starts from the beginning of the array or string. A negative index can be used, indicating an offset from the end of the sequence.

end (optional): The index at which to stop extraction. The slice() method extracts up to, but not including, the element at the specified index. If omitted, it extracts elements until the end of the array or string. A negative index can be used here as well.

*/

// Example 1
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const newAnimals = animals.slice(1,3);
console.log(newAnimals); // [ 'bison', 'camel' ]

const newAnimals2 = animals.slice(4,3);
console.log(newAnimals2); // []

console.log(animals); // [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]

// Example 2
const str = 'The quick brown fox jumps over the lazy dog.';
const newStr = str.slice(4, 9);
const newStr2 = str.slice(10);
console.log(newStr); // quick
console.log(newStr2); // brown fox jumps over the lazy dog.
console.log(str); // The quick brown fox jumps over the lazy dog.

// 🌟 Slice 🌟