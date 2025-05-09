const color = 'red'; // Global scope (bad practice)

function start() {
    const message = 'hi'; // Local scope
    const color = 'blue'; // Local scope
    console.log(color);
}

function stop() {
    const message = 'bye'; // Local scope
}

start();