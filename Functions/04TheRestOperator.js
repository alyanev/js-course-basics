// When we apply the rest operator to a parameter of a function, we can pass very number of arguments and the rest operator will take them and put them in an array.
// The Rest parameter must be last formal parameter.

function sum(discount, ...prices) {
     const total = prices.reduce((a, b) => a + b);
     return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));