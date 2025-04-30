const numbers = [1, 2, 3];

// every() checks if every element matches the given criteria
const allPositive = numbers.every(function (value) {
    return value >= 0;
});

console.log(allPositive);

const nums = [1, 2, -3, 4];

// some() checks to see if at least one element matches to the givec criteria
const atLeastOnPositive = nums.some(function (value) {
    return value >= 0;
});

console.log(atLeastOnPositive);