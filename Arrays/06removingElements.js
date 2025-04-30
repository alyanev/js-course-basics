const numbers = [1, 2, 3, 4];

// End
const last = numbers.pop();
console.log(numbers);
console.log(last);

// Beginning
const first = numbers.shift();
console.log(numbers);
console.log(first);

// Middle
numbers.splice(0, 2);
console.log(numbers);