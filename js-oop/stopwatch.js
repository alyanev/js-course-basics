function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.startTime = function () {
        if (running) {
            throw new Error('Stopwatch has already started.');
        }

        running = true;

        startTime = new Date();
    };
}