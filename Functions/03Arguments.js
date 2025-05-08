/**
 * Calculates the sum of all arguments passed to the function.
 * 
 * @returns {number} The total sum of all arguments.
 * 
 * Note: The `arguments` object is an array-like object available 
 * within all non-arrow functions. It contains the values of the 
 * arguments passed to the function. It is not a real array, but 
 * it can be iterated using a `for...of` loop.
 */

function sum() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

console.log(sum(1, 2, 3, 4, 5));