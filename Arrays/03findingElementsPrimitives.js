const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(1, 2)); // Start searching from index 2
console.log(numbers.indexOf('1')); // Returns -1 because an element was not found
console.log(numbers.indexOf(1)); // Returns the index
console.log(numbers.lastIndexOf(1)); // Returns the last found index with that element

console.log(numbers.indexOf(1) !== -1); // Returns true if there is an element with a searched value
console.log(numbers.includes(1)); // Returns true if there is an element with a searched value