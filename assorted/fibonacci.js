// fibonacci

// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fibonacci(4) === 3

// iterative
function fibonacci(n) {
    let fib = [0, 1];
    for (let num = 2; num <= n; num++) {
        fib.push(fib[num - 2] + fib[num - 1]);
    }
    return fib[n];
}

// recursive
// function fibonacci(n) {
//     if (n < 2) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

console.log(fibonacci(10));
