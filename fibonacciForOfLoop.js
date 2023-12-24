const fibo = (n) => {
    let fibo = [0, 1];

    for (let i of Array(n - 2).keys()) {
        fibo.push(fibo[i] + fibo[i + 1]);
    }

    return fibo;
};

console.log(fibo(10)); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
/* time complexity Big(O) = O(n) */
