// Declare Factory Function

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const secondCircle = createCircle(2);
console.log(secondCircle);