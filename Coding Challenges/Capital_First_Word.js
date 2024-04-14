let students =[
    
        {name: "John", age: 25, city: "New York"}, 
        {name: "Jane", age: 22, city: "San Francisco"},
        {name: "Robarn", age: 25, city: "Victoria"},
        {name: "Micheal", age: 22, city: "New York"},
        {name: "Rodge", age: 28, city: "California"},
]

// Capitalize the first letter of each word in the city name
// Expected Output: JOHN, JANE, ROBARN, MICHEAL, RODGE

//Example 1
let names=[];
for(let i=0;i<students.length;i++){
    names.push(students[i].name.toUpperCase())
}
console.log(names);

//Example 2

let names2 = students.map(student=>student.name.toUpperCase())
console.log(names2);

// Example 3 using foreach
let names3=[];
students.forEach(student=>names3.push(student.name.toUpperCase()))
console.log(names3);

// ⭐ Using For, Map and Foreach loop, we can get the same output. But using map is more efficient and easy to understand. ⭐ 