const numbers = [1, 2, 3];

for (let number of numbers)
    console.log(number);

for (let key in numbers)
    console.log(key, numbers[key]);

numbers.forEach((number, index) => console.log(index, number));