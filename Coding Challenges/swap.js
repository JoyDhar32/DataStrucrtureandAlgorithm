const swap1 = (a, b) => {
    a = a - b;
    b = a + b;
    a = b - a;
    return [a, b];
}
console.log(swap1(2, 3)); // [3,2]
console.log(swap1(33, 22)); // [22,33]
console.log(swap1(0, 1)); // [1,0]

const swap2 = (a, b) => {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    return [a, b];
}
console.log(swap2(2, 3)); // [3,2]
console.log(swap2(33, 22)); // [22,33]
console.log(swap2(0, 1)); // [1,0]

// ⭐ Swap two numbers without using a temporary variable ⭐