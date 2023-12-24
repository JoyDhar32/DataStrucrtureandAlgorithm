const isPrime = (n) => {
    // Check if n is less than 2, which is not a prime number
    if (n < 2) {
        return false;
    }

    // Loop from 2 to the square root of n for optimized primality check
    for (let i = 2; i <= Math.sqrt(n); i++) {
        // If n is divisible by i, then it's not a prime number
        if (n % i === 0) {
            return false;
        }
    }

    // If no divisors are found, n is a prime number
    return true;
}

// Examples
console.log(isPrime(7));   // true (7 is a prime number)
console.log(isPrime(20));  // false (20 is not a prime number)
console.log(isPrime(2));   // true (2 is a prime number)
console.log(isPrime(1));   // false (1 is not a prime number)
console.log(isPrime(0));   // false (0 is not a prime number)
console.log(isPrime(-5));  // false (negative numbers are not considered prime)

// Time Complexity: O(sqrt(n))
