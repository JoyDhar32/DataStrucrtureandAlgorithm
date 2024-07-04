const primeSeries = (n) => {
    let primes = [];
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(i);
        }
    }
    return { primes, length: primes.length };
}

const result = primeSeries(49);
console.log(result.primes);
console.log("Prime Series Length:", result.length);
