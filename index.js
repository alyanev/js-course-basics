// Objects Exercises

// 15 - 1 - Address Object

// const address = {
//     street: 'Levski',
//     city: 'Veliko Tarnovo',
//     zipCode: 5000
// };

// function showAddress(obj) {
//     for (let key in obj) {
//         console.log(`${key}: ${obj[key]}`);
//     }
// }

// showAddress(address);

// 16 - 2 - Use Factory and Constructor functions to create Address Object

// Factory Function

// function createAddress(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode
//     };
// }

// let address = createAddress('Levski', 'Gabrovo', 4000);

// console.log(address);


// Constructor Function

// function CreateAddress(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// };

// const address2 = new CreateAddress('Tryavna', 'Tryavna', 3000);
// const address = new CreateAddress('Tryavna', 'Tryavna', 3000);
// const address3 = address2;

// // console.log(address2);

// // 17 - 3 - Object Equality

// function areEqual(obj1, obj2) {
//     return obj1.street === obj2.street && obj1.city === obj2.city && obj1.zipCode === obj2.zipCode;
// }

// // console.log(areEqual(address, address2));

// function areSame(obj1, obj2) {
//     return obj1 === obj2;
// }

// console.log(areSame(address2, address3));


// 18 - 4 - Blog Post Object

// const post = {
//     title: 'a',
//     body: 'b',
//     author: 'c',
//     views: 20,
//     comments: [
//         { author: 'a', body: 'b' },
//         { author: 'c', body: 'd' }
//     ],
//     isLive: true
// };


// 19 - 5 - Constructor Functions - Create a blog engine

// function CreatePost (title, body, author, views, comments) {
//     this.title = title,
//     this.body = body,
//     this.author = author,
//     this.views = 0,
//     this.comments = []
// }

// const firstPost = new CreatePost('a', 'b', 'c');

// console.log(firstPost);

// 20 - 6 - Price Range Object - Array of priceRange Objects

// const priceRange = [
//     { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10  },
//     { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20  },
//     { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50  },
// ];

// let restaurants = [
//     { averagePerPerson: 5 }
// ];







// Arrays


// 2 - Adding Elements

// const numbers = [3, 4];

// numbers.push(5, 6);
// console.log(numbers);

// numbers.unshift(1, 2);
// console.log(numbers);

// numbers.splice(2, 0, 'a');
// console.log(numbers);


// 3 - Finding Elements - Primitives

// const numbers = [1, 2, 3, 1, 4];

// console.log(numbers.indexOf(1));
// console.log(numbers.indexOf(1, 1));
// console.log(numbers.lastIndexOf(1));

// console.log(numbers.indexOf(1) !== -1);
// console.log(numbers.includes(1));


// 4 - Finding Elements - Reference Types (Objects)

// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' },
// ];

// console.log(courses.find((course) => course.id < 2));
// console.log(courses.findIndex((course) => course.id == 2));



// 6 - Removing Elements 

// const numbers = [1, 2, 3, 4];

// End
// const last = numbers.pop();
// console.log(numbers);
// console.log(last);

// Beginning
// const first = numbers.shift();
// console.log(numbers);
// console.log(first);

// Middle
// const middle = numbers.splice(2, 2);
// console.log(numbers);
// console.log(middle);



// 7 - Emptying an Array

// let numbers = [1, 2, 3, 4];

// numbers = [];

// console.log(numbers);



// 8 - Combining and Slicing Arrays

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);

// console.log(combined);

// const slice = combined.slice(0, 1);

// console.log(slice);



// 9 The Spread Operator

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = [...first, 'a', ...second, 'b'];
// const copy = [...combined];
// console.log(combined);
// console.log(copy);



// 10 Iterating an Array

// const numbers = [1, 2, 3, 4];

// numbers.forEach((number, index) => console.log(`${index}: ${number}`));



// 11 - Joining Arrays

// const numbers = [1, 2, 3, 4];
// const joined = numbers.join('-');
// console.log(joined);

// const message = 'This is my first message';
// const parts = message.split(' ');
// console.log(parts);

// const joinedParts = parts.join('-');
// console.log(joinedParts);



// 12 - Sorting Arrays

// const numbers = [2, 5, 1, 3, 4];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// Sort object arrays

// const courses = [
//     { id: 1, name: 'Node.js' },
//     { id: 2, name: 'JavaScript' },
// ];

// courses.sort(function (a, b) {
//     // a < b => -1
//     // a > b => 1
//     // a === b => 0

//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toUpperCase();

//     if (nameA > nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
// });
// console.log(courses);



// 13 - Testing the Elements of an Array

// const numbers = [1, 2, 3];

// const allPositive = numbers.every((number) => number >= 0);
// console.log(allPositive);

// const atLeastOnePositive = numbers.some((number) => number >= 0);
// console.log(atLeastOnePositive);



// 14 - Filtering an Array

// const numbers = [1, -1, 2, 3, 4];
// const filtered = numbers.filter((value) => value >= 0);
// console.log(filtered);



// 15 - Mapping an Array

// const numbers = [1, -1, 2, 3, 4];
// const filtered = numbers.filter((value) => value >= 0);
// const items = filtered.map((n) => '<li>' + n + '</li>');
// // console.log(items);

// const htmlItems = '<ul>' + items.join('') + '</ul>';
// // console.log(htmlItems);

// const itemsToObjects = filtered.map(n => ({ value: n }));

// console.log(itemsToObjects);



// 16 - Reduce ing an Array

// const numbers = [1, -1, 2, 3, 4];

// let sum = numbers.reduce((acc, value) => acc + value, 0);
// console.log(sum);




// 17 - Exercise - Array from range

// const numbers = arrayFromRange(1, 10);
// console.log(numbers);

// function arrayFromRange(min, max) {
//     const n = [];
//     for (let i = min; i <= max; i++) {
//         n.push(i);
//     }
//     return n;
// }


// 18 - Exercise - Includes

// const numbers = [1, 2, 3, 4];

// function includes(array, searchElement) {
//     for (let key of array) {
//         if (searchElement === key) {
//             return true;
//         }
//     }
//     return false;
// };

// console.log(includes(numbers, 4));



// 19 - Exercise - Except elemen from an array

// const numbers = [1, 2, 3, 4, 1, 5, 6, 3, 2];

// const output = except(numbers, [1, 2]);

// console.log(output);

// function except(array, excluded) {
// const output = [];

// for (let element of array)
//     if (!excluded.includes(element))
//         output.push(element);
//     return output;

// // const diff = array.filter(element => !excluded.includes(element));
// // return diff;

//  // const a = array.every((value, index) => value === !excluded[index]);
//  // return a;
// }


// 20 - Exercise - Moving an Element

// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 0, 1);

// console.log(output);

// function move(array, index, offset) {
//     const position = index + offset;

//     if (position >= array.length || position < 0) {
//         console.error('Invalid offset.');
//         return array;
//     }

//     const output = [...array];
//     const element = output.splice(index, 1)[0];
//     output.splice(index + offset, 0, element);
//     return output;

// }


// const numbers = [3, 4];

// numbers.push(5, 6);
// console.log(numbers);

// numbers.unshift(1, 2);
// console.log(numbers);

// numbers.splice(2, 0, 'a');
// console.log(numbers);



// 21 - Exercise - Count Occurrences

// const numbers = [1, 2, 3, 4, 1];

// const count = countOccurrences(numbers, 1);

// console.log(count);

// function countOccurrences(array, searchElement) {
//     let counter = 0;
//     for (let key of array) {
//         if (key === searchElement) {
//             counter++;
//         }
//     }
//     return counter;
// }



// 22 Exercise - Get Max

// const numbers = [1, 2, 3, 4];

// const max = getMax(numbers);

// console.log(max);

// function getMax(array) {
// if (array.length === 0) return undefined;

// let max = array[0];

// for (let i = 1; i < array.length; i++ ) {
//     if (array[i] > max){
//         max = array[i];
//     }
// }
// return max;

// return array.reduce((acc, curr) => (acc > curr) ? acc : curr);
// }



// 23 Exercise - Movies

// const movies = [
//     { title: 'a', year: 2018, rating: 4.5 },
//     { title: 'b', year: 2018, rating: 4.7 },
//     { title: 'c', year: 2018, rating: 4 },
//     { title: '4', year: 2017, rating: 4.5 },
// ];

// // All the movies in 2018 with rating > 4
// // Sort them by their rating
// // Descending order
// // Pick their title

// const filtered = movies
//     .filter(movie => movie.year === 2018 && movie.rating > 4)
//     .sort((a, b) => b.rating - a.rating)
//     // .reverse()
//     .map(m => m.title);


// console.log(filtered);



// ------------------------------------------------------------------------------------------------------------------------------------------ //


// let numbers = [10, 2, 30, 4];
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// let people = [
//     { name: 'a', age: 20 },
//     { name: 'b', age: 23 },
//     { name: 'c', age: 22 },
// ];

// people.sort((a, b) => a.name < b.name);
// console.log(people);

// const fruits = ["apple", "banana", "kiwi", "grape"];

// function sortByLength(array) {
//     return array.sort((a, b) => a.length - b.length);
// }

// console.log(sortByLength(fruits));


/////

// const numbers = [3, 5, 2, 8, 1];

// function sNumsDesc(array) {
//     return array.sort((a, b) => b - a);
// }

// console.log(sNumsDesc(numbers));


////

// let users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 20 }
//   ];

//   function sa(array) {
//     return array.sort((a, b) => b.name.localeCompare(a.name));
//   }

//   console.log(sa(users));


// let people = [
//     { name: "John", age: 28 },
//     { name: "Maria", age: 22 },
//     { name: "David", age: 35 }
//   ];

//   function sortingByAge(array) {
//     return array.sort((a, b) => a.age - b.age);
//   }

//   console.log(sortingByAge(people);

// let words = ["banana", "kiwi", "apple", "grape", "pear"];

// let people = [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 25 },
//     { name: "David", age: 25 }
//   ];


// function sorting(array) {

//     return array.sort((a, b) => {

//         if (a.age !== b.age) {
//             return a.age - b.age;
//         }

//         return a.name.localeCompare(b.name);
//     });


// }

// console.log(sorting(people));
//Имаш масив от числа. Напиши функция, която сортира числата по произведението на цифрите им. Например, за числото 234, произведението на цифрите е 2 * 3 * 4 = 24. Сортирай числата по този начин.

// let numbers = [23, 45, 12, 56, 11];

// function sorting(array) {
//     // Създаваме масив от обекти с числата и произведението на цифрите им
//     let productArray = array.map(element => {
//         let digits = element.toString().split('').map(Number);  // Разделяме числото на цифри
//         let product = digits.reduce((a, b) => a * b, 1);  // Изчисляваме произведението
//         return { number: element, product: product };  // Връщаме обект с числото и произведението му
//     });

//     // Сортираме по произведението на цифрите
//     productArray.sort((a, b) => a.product - b.product);

//     // Връщаме масив с числата, сортирани по произведението
//     return productArray.map(item => item.number);
// }

// console.log(sorting(numbers));  // Очакван резултат: [12, 23, 45, 11, 56]



// Functions


// 1 - Function Decalrations vs Expressions


// // Function Declaration
// function walk() {
//     console.log('walks');
// }

// // Anonymous Function Expression
// const run = function() {
//     console.log('run');
// };


// 2 - Hoisting

// JS enginge moves all function declarations at the top before execute the code.


// 3 - Arguments

// function sum() {
//     let total = 0;
//     for (let value of arguments) {
//         total += value;
//     }
//     return total;
// }


// console.log(sum(1,2,3,4,5));


// 4 - The Rest Operator

// When we pass a vary number of arguments (the Rest '...args' operator) will put them in an array.

// function sum(...args) {
//     return args.reduce((a, b) => a + b);
// }
// console.log(sum(1,2,3,4,5));

// function sum(discount, ...prices) {
//     const total = prices.reduce((a, b) => a + b);
//     return total * (1 - discount);
// }

// console.log(sum(0.1, 20, 30));


// 5 - Default Parameters

// function interest(principal, rate, years) {
//     rate = rate || 3.5;

//     return principal * rate / 100 * years;
// }

// console.log(interest(10000, 0, 5));



// 6 - Getters and Setters

// const person = {
//     firstName: 'Aleksandar',
//     lastName: 'Yanev',
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`
//     },
//     set fullName(value) {
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// // person.fullName = 'Evtim Borisov';

// console.log(person);


// 7 - Try and Catch

// const person = {
//     firstName: 'Aleksandar',
//     lastName: 'Yanev',
//     set fullName(value) {
//         if (typeof value !== 'string') {
//             throw new Error('Value is not a string.');
//         }
//         const parts = value.split(' ');
//         if (parts.length !== 2) {
//             throw new Error('Enter a first and last name.');
//         }
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// try {
//     person.fullName = '11 22';
// }
// catch (e) {
//     alert(e);
// }
// // person.fullName = 'Evtim Borisov';

// console.log(person);



// 8 Local vs Global Scope


// function start() {
//     for (var i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log(i);
// }

// // var => function-scoped
// // ES6 (ES2015): let, const => block-scoped

// start();


// var color = 'red';
// let age = 30;

// // window.color

// function sayHi() {
//     console.log('hi');
// }

// // windows.sayHi()



// 10 - The this Keyword

//this
// method (function inside of an object) -> obj

// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// };

// video.stop = function () {
//     console.log(this);
// };

// video.stop();

// function (outside of an object) -> global (window, global)


// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// };

// video.stop();


// function Video(title) {
//     this.title = title;
//     console.log(this);
// }

// const v = new Video('b'); // {}

// another example

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function (tag) {
//             console.log(tag);
//         });
//     }
// };

// video.showTags();

// 12 - Exercise 1 - Sum Of Arguments

// function sum(...nums) {
//     return nums.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3, 4, 5));

// function sumArray(...items) {
//     if (items.length === 1 && Array.isArray(items[0])) {
//         items = [...items[0]];
//     }

//     return items.reduce((a, b) => a + b);
// }

// console.log(sumArray([1, 2, 3, 4]));


// 13 Exercise 2 - Area of Circle

// const circle = {
//     radius: 1,
//     get area() {
//         return Math.PI * this.radius * this.radius;
//     }
// };

// console.log(circle.area);

// 14 - Exercise 3 - Error Handling

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array)) {
        throw new Error('The first argument must be an array');
    }
    return array.reduce((accumulator, current) => {
        const occerrence = (current === searchElement) ? 1 : 0;
        return accumulator + occerrence;
    }, 0);
}

const numbers = [1, 2, 3, 4, 3, 3, 5, 3];
const n = true;
try {
    const count = countOccurrences(numbers, 3);
    console.log(count);
}
catch (e) {
    alert(e);
}
