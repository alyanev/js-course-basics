const numbers = arrayFromRange(1, 5);

console.log(numbers);

function arrayFromRange(min, max) {
    const array = [];
    for (let element = min; element <= max; element++)
        array.push(element)
    return array;
}
