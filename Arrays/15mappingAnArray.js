const numbers = [1, -1, 2, 3, 4];

const items = numbers
    .filter(value => value >= 0) // Filter the array to return only positive elements
    .map(n => ({ value: n })) // Mapping the array to return an array of objects with properties named value with 'values' which are the filtered elements
    .filter(obj => obj.value > 1) // Filter the array of objects to get only object with values > 1
    .map(obj => obj.value); // Map the array of object to return an array of elements which values are the values of the properties of the object

console.log(JSON.stringify(items));