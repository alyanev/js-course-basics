let person = {
    firstName: 'Aleksandar',
    age: 30
};

// Dot notation
person.firstName = 'Sasho';

// Bracket Notation used in dynamic selecton of a property by user:

let selection = 'name';
person[selection] = 'Mary';

console.log(person);
console.log(person.firstName);