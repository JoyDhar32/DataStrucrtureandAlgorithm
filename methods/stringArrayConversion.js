const arr=['a','b','c'];
const str="How are you doing today?";
console.log(arr);
console.log(str);
const arrToString=arr.join('');
console.log(arrToString+' -> '+ typeof(arrToString));
const strToArr=str.split(' ');
console.log(strToArr+' -> '+typeof(strToArr));

// Path: methods/trim.js