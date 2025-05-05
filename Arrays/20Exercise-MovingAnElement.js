// Exercise: Write a function `move` that moves an element in an array from one index to another.
// The function should take three parameters: the array, the index of the element to move, and the offset (number of positions to move).
// If the offset results in an invalid position (out of bounds), the function should display an error message and return undefined.

const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 1);

console.log(output);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error("Invalid offset.");
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0]; // Removes the element at the specified index from the array and retrieves it. Accessing the first element ([0]) retrieves the removed element directly.
    output.splice(position, 0, element);
    return output;
    // The function returns the modified array with the element moved to the new position.

}