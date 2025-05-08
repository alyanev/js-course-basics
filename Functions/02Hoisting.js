// Hoisting in JavaScript is the process where variable and function declarations are moved to the top of their scope during the compilation phase, before code execution.

// Function Declaration
move();

function walk() {
    console.log('walk');
}

// Anonymous Function Expression
run();

const run = function () {
    console.log('run');
};
let move = run;