// Condition: 
// Get all the movies in 2018 with rating > 4
// Sort them by their rating in descending order
// Pick their title

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 }
];

function movie(array) {
    // let output = [];
    // for (let movie of array) {
    //     if (movie.year === 2018 && movie.rating > 4) {
    //         output.push(movie);
    //     }
    // }
    // output.sort((a, b) => b.rating - a.rating);

    // for (let obj of output) {
    //     console.log(obj.title);
    // }

    // Using array methods
    const output = array
        .filter(movie => movie.rating > 4 && movie.year === 2018)
        .sort((a, b) => b.rating - a.rating);

    for (let obj of output) {
        console.log(obj.title);
    }
}

movie(movies);
