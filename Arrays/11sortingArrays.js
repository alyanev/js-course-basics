const numbers = [2, 3, 1, 5, 10, 2, 7, 8, 0, 100];
numbers.sort(); // Sorting like strings
console.log(numbers);

numbers.sort((a, b) => a - b); // Sorting like numbers
console.log(numbers);

const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript.js' }
];



courses.sort(function (a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0

    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});

console.log(JSON.stringify(courses));
