const num = 555111;
const convertString = num.toString();

const back= Number(convertString);
const usingParse= parseInt(convertString);
console.log(convertString); // This will convert the number to a string
console.log(typeof convertString); // This will show you that the variable is a string
console.log(back); // This will dynamically convert the string to a number every time you call back()
console.log(typeof back); // This will show you that the variable is a number
console.log(usingParse); // This will dynamically convert the string to a number every time you call usingParse()
console.log(typeof usingParse); // This will show you that the variable is a number