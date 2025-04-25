// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'


function fizzBuzz(input) {
    if (typeof (input) !== 'number') {
        return NaN;
    }
    if (input % 3 === 0 && input % 5 === 0) {
        return 'FizzBuzz';
    } else if (input % 5 === 0) {
        return 'Buzz';
    } else if (input % 3 === 0) {
        return 'Fizz';
    } else {
        return input;
    }
}

const output = fizzBuzz(15);
console.log(output);