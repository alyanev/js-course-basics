// Exercise: Create a function called arrayFromRange that takes two arguments, min and max, and returns an array containing all the numbers in that range, including min and max.
const numbers = arrayFromRange(1, 5);

console.log(numbers);

function arrayFromRange(min, max) {
    const array = [];
    for (let element = min; element <= max; element++)
        array.push(element)
    return array;
}

// The function should work for both positive and negative ranges.
const numbers2 = arrayFromRange(-10, -4);
console.log(numbers2);