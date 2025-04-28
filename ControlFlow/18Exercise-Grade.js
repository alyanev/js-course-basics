// return Average grade of an array.

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A


function calculateAverage(array) {
    let sum = 0;
    for (let mark of array) {
        sum += mark;
    }

    return sum / array.length;
}

function calculateGrade(marks) {

    const grade = calculateAverage(marks);
    if (grade > 1 && grade <= 59) {
        return 'F';
    } else if (grade <= 69) {
        return 'D';
    } else if (grade <= 79) {
        return 'C';
    } else if (grade <= 89) {
        return 'B';
    } else if (grade <= 100) {
        return 'A';
    }

    // switch (true) {
    //     case (grade > 1 && grade <= 59):
    //         return 'F';
    //     case (grade <= 69):
    //         return 'D';
    //     case (grade <= 79):
    //         return 'C';
    //     case (grade <= 89):
    //         return 'B';
    //     case (grade <= 100):
    //         return 'A';
    //     default: 'Invalid grade';
    // }
}

const marks = [80, 80, 100];
console.log(calculateGrade(marks));

