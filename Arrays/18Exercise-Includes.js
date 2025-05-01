// Exercise: Write a function called includes that takes an array and a number as arguments and returns true if the array contains the number, otherwise false.

const numbers = [1, 2, 3, 4, 5];

function includes(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;
}
// This function iterates through the array and checks if any element matches the searchElement.
console.log(includes(numbers, 5));  