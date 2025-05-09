// Check if the function can handle both arrays and individual arguments and sum the arguments.

function sum(...items) {
    if (items.length === 1 && Array.isArray)
        items = [...items[0]];

    return items.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4]));