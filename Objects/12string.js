// String primitive
const message = 'This is my \'first\n message';
console.log(message.length);
console.log(message[0]);
console.log(message.includes('my'));
console.log(message.indexOf('my'));
console.log(message.replace('first', 'second'));
console.log(message.toUpperCase());


// String object
const another = new String('hi');


// console.log(typeof (message)); // string
// console.log(typeof (another)); // object