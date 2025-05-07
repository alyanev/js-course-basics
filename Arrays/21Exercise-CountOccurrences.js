// Condition: Write a function that counts the number of times a specific element appears in an array.

function countOccurrences(array, searchElement) {

    // for (let element of array) {
    //     if (element === searchElement) {
    //         count++;
    //     }
    // }
    // return count;

    // Counts the occurrences of a specific element in an array using the `reduce` method.
    // This implementation leverages the accumulator to track the count of matches as the array is iterated over.

    return array.reduce((acc, curr) => {
        if (curr === searchElement) {
            acc++;
        }
        return acc;
    }, 0);

}

const numbers = [1, 2, 3, 4, 1, 1, 1];

const count = countOccurrences(numbers, 1);

console.log(count);


