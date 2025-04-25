// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

// let hour = 10;
now = new Date();
now = now.getHours();

if (now >= 6 && now < 12) {
    console.log('Good morning!');
} else if (now >= 12 && now < 18) {
    console.log('Good afternoon!');
} else {
    console.log('Good evening!');
}
