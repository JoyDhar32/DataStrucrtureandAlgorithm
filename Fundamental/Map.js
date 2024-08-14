// A Hash Map  (or simply a "Map" in JavaScript) is a data structure that stores key-value pairs. JavaScript offers a built-in Map object for this purpose, which is more versatile than using plain objects for certain use cases

// Creating a Hash Map

const map = new Map();
map.set('name','Joy Dhar');
map.set('age', 26);

console.log(map.get('name')); // Output: Joy Dhar
console.log(map.get('age')); // Output: 25

// Map Methods
// The Map object provides several methods to interact with the key-value pairs:

//    set(key, value): Adds a new key-value pair to the map.
//    get(key): Retrieves the value associated with the specified key.
//    has(key): Checks if a key exists in the map.
//    delete(key): Removes a key-value pair from the map.
//    clear(): Removes all key-value pairs from the map.
//    size: Returns the number of key-value pairs in the map.

// Iterating Over a Map
// You can iterate over the key-value pairs in a map using the entries(), keys(), and values() methods. Here's an example:

const mapEx1= new Map(
    [
        ['name', 'Alice'],
        ['age', 30],
        ['city', 'New York']
    ]
);

// using has() method


mapEx1.forEach((value, key) => {
    console.log(`${key} is= ${value}`);
  });