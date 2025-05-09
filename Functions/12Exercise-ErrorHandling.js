// Condition: If the input is not an array, an error with the message 'Invalid input.' will be thrown.

try {
    const numbers = [1, 2, 3, 4, 1, 1, 1];
    const count = countOccurrences(numbers, 1);
    console.log(count);
}
catch (e) {
    console.log(e.message);
}

function countOccurrences(array, searchElement) {

    if (!Array.isArray(array))
        throw new Error('Invalid input.');

    return array.reduce((acc, curr) => {
        if (curr === searchElement) {
            acc++;
        }
        return acc;
    }, 0);
}


