const factorialSeries = (n) => {
    let factorial = [1];

    for (let i = 1; i < n; i++) {
        factorial[i] = factorial[i - 1] * i;
    }

    return factorial;
}

console.log(factorialSeries(10)); // [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880]
console.log(factorialSeries(0));  // [1]
console.log(factorialSeries(1));  // [1, 1]
