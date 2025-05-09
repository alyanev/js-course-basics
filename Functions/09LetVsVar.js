// In this lesson we are going to see what is the difference between using `let` and `var`.

function start() {
    for (var i = 0; i < 5; i++)
        console.log(i);

    console.log(i);
}

// var => function-scoped (it is accessible to the `window` object)
// ES6 (ES2015): let, const => block-scoped

start();