const numbers = [1, 2, 3];

const joined = numbers.join(',');
console.log(typeof (joined));

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

const combined = parts.join('-'); // Could be used when creating an url slugs
console.log(combined);