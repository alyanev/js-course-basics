// Condition: Implement the function to find the largest number in the given array.
const numbers = [1, 2, 3, 4, 1, 6, 100, 2000, 3];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;
    let max = array[0];
    for (let i = 1; i <= array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// Using reduce method

function getMaxUsingReduce(array) {

    if (array.length === 0) return undefined;

    return array.reduce((acc, curr) => (acc > curr) ? acc : curr);
}